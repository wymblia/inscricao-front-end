import React, { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import PersonalData from "../core/PersonalData"
import Input from "./Input"
import Select from "./Select"
import Textarea from "./TextArea"
import ButtonNext from "./ButtonNext"
import ButtonBack from "./ButtonBack"
import Swal from "sweetalert2"
import { cpf } from "cpf-cnpj-validator"
import { Switch } from "@material-tailwind/react"
interface PersonalDataProps {
  personalData: PersonalData
  personalDataChange?: (personalData: PersonalData) => void
  backPage?: () => void
}

export default function FormPersonalData(props: PersonalDataProps) {
  const {
    CPF,
    setCPF,
    birthDate,
    setBirthDate,
    switchShowDeficiency,
    setSwitchShowDeficiency,
    disabilityRelief,
    setDisabilityRelief,
    gender,
    setGender
  } = useContext(RegistrationContext)

  function handleIncompleteAndInvalidCpf() {
    if (CPF.includes("_")) {
      Swal.fire({
        title: "CPF incompleto",
        text: "Digite o CPF completo!",
        confirmButtonText: "Ok",
        icon: "warning"
      })
      return true
    } else {
      if (!cpf.isValid(CPF)) {
        Swal.fire({
          title: "CPF inválido",
          text: "Digite seu CPF!",
          confirmButtonText: "Ok",
          icon: "warning"
        })
        setCPF("")
        return true
      }
    }
  }

  function FormSubmit(e: any) {
    e.preventDefault()
    handleIncompleteAndInvalidCpf()
      ? null
      : props.personalDataChange?.(new PersonalData(CPF, new Date(birthDate), disabilityRelief))
  }

  return (
    <div>
      <form onSubmit={FormSubmit}>
        <Input
          textLabel="CPF"
          idInput="cpf"
          typeInput="text"
          valueInput={CPF}
          onChange={setCPF}
          existsMask={true}
          mask={"999.999.999-99"}
          required
        />

        <Input
          textLabel="Data de Nascimento"
          idInput="birthDate"
          typeInput="date"
          valueInput={String(birthDate)}
          onChange={setBirthDate}
          required
        />

        <Select
          textLabel="Gênero"
          idSelect="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option disabled value="">
            Selecione
          </option>
          <option value="M">Masculino</option>
          <option value="F">Feminino</option>
        </Select>

        <div className="flex justify-start text-sm mb-2 ml-2">
          <div className="flex w-max gap-4">
            <Switch
              id="socialName"
              color="blue"
              label="Sou portador de necessidades especiais"
              defaultChecked={switchShowDeficiency}
              onChange={() => (
                setSwitchShowDeficiency(!switchShowDeficiency), setDisabilityRelief("")
              )}
            />
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
          <ButtonNext type="submit">Próximo</ButtonNext>
        </div>

        <div className="flex flex-col mt-2">
          <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
        </div>
      </form>
    </div>
  )
}
