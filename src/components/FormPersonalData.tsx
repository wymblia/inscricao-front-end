import React, { useContext, useState } from "react"
import { useEffect } from "react"
import Swal from "sweetalert2"
import { RegistrationContext } from "../contexts/RegistrationContext"
import PersonalData from "../core/PersonalData"
import Button from "./Button"
import ButtonBack from "./ButtonBack"
import Input from "./Input"
import Select from "./Select"
import Textarea from "./TextArea"

interface PersonalDataProps {
  personalData: PersonalData
  personalDataChange?: (personalData: PersonalData) => void
  backPage?: () => void
}

export default function FormPersonalData(props: PersonalDataProps) {
  const {
    cpf,
    setCpf,
    birthDate,
    setBirthDate,
    switchShowDeficiency,
    setSwitchShowDeficiency,
    disabilityRelief,
    setDisabilityRelief,
    gender,
    setGender
  } = useContext(RegistrationContext)
  const [classNameInput, setClassNameInput] = useState("bg-red-900")

  function handleSwitchShowDeficiency() {
    switchShowDeficiency
      ? (setSwitchShowDeficiency(false), setDisabilityRelief(""))
      : setSwitchShowDeficiency(true)
  }

  function cpfValidation(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "")
    if (cpf == "") return false
    // Elimina CPFs invalidos conhecidos
    if (
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    ) {
      return false
    }
    // Valida 1o digito
    let add = 0
    for (let i = 0; i < 9; i++) {
      add += parseInt(cpf.charAt(i)) * (10 - i)
    }
    let rev = 11 - (add % 11)
    if (rev == 10 || rev == 11) {
      rev = 0
    }
    if (rev != parseInt(cpf.charAt(9))) {
      return false
    }
    // Valida 2o digito
    add = 0
    for (let i = 0; i < 10; i++) {
      add += parseInt(cpf.charAt(i)) * (11 - i)
    }
    rev = 11 - (add % 11)
    if (rev == 10 || rev == 11) {
      rev = 0
    }
    if (rev != parseInt(cpf.charAt(10))) {
      return false
    }
    return true
  }

  function handleCpf() {
    if (cpf.includes("_")) {
      Swal.fire({
        title: "CPF incompleto",
        text: "Digite o CPF completo!",
        confirmButtonText: "Ok",
        icon: "warning"
      })
    } else {
      if (!cpfValidation(cpf)) {
        Swal.fire({
          title: "CPF inválido",
          text: "Digite seu CPF!",
          confirmButtonText: "Ok",
          icon: "warning"
        })
        setCpf("")
      }
    }
  }

  function FormSubmit(e: any) {
    e.preventDefault()
    props.personalDataChange?.(new PersonalData(cpf, new Date(birthDate), disabilityRelief))
  }

  return (
    <div>
      <form onSubmit={FormSubmit}>
        <Input
          mask="999.999.999-99"
          textLabel="CPF"
          defaultValue={cpf || ""}
          valueInput={cpf}
          typeInput="text"
          idInput="cpf"
          onChange={setCpf}
          onBlur={handleCpf}
          required
        />

        <Input
          classNameInput={"text-gray-700"}
          classNameLabel={"text-gray-700"}
          textLabel="Data de Nascimento"
          typeInput="date"
          idInput="birthDate"
          defaultValue={birthDate}
          onChange={setBirthDate}
          required
        />

        <Select
          textLabel="Gênero"
          defaultValue={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </Select>

        <div className="flex justify-end -mb-4z text-sm">
          <div className="form-check form-switch">
            <input
              defaultChecked={switchShowDeficiency}
              className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={handleSwitchShowDeficiency}
            />
            <label
              className="form-check-label inline-block text-gray-800 mb-3"
              htmlFor="flexSwitchCheckDefault"
            >
              Sou portador de necessidades especiais
            </label>
          </div>
        </div>
        <div hidden={!switchShowDeficiency}>
          <Textarea
            textLabel="Necessito da seguinte providência:"
            valueTextArea={disabilityRelief}
            onChange={setDisabilityRelief}
            required={switchShowDeficiency}
          />
        </div>

        <div className="flex flex-col mt-12">
          <Button type="submit">Próximo</Button>
        </div>
        <div className="flex flex-col mt-2">
          <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
        </div>
      </form>
    </div>
  )
}
