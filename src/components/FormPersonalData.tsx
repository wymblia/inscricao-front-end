import React, { useContext, useState } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import PersonalData from "../core/PersonalData";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import Input from "./Input";
import Textarea from "./TextArea";

interface PersonalDataProps {
  personalData: PersonalData
  personalDataChange?: (personalData: PersonalData) => void
  backPage?: () => void
}

export default function FormPersonalData (props: PersonalDataProps) {
  const {cpf, setCpf, invisibleErrorCpf, setInvisibleErrorCpf, birthDate, setBirthDate, deficiency, setDeficiency, name, email, phone} = useContext(RegistrationContext)
  const [appearanceDeficiency, setAppearanceDeficiency] = useState(true)
  const [classNameInput, setClassNameInput] = useState("bg-red-900")

  function setAppearanceDeficiencyFunction() {
    appearanceDeficiency ? setAppearanceDeficiency(false) : setAppearanceDeficiency(true)
  }

  function validateCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g,'');
    if(cpf == '') return false;
      // Elimina CPFs invalidos conhecidos
      if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
          cpf == "88888888888" ||
          cpf == "99999999999")
          return false;
          // Valida 1o digito
          let add = 0;
          for (let i=0; i < 9; i ++)
          add += parseInt(cpf.charAt(i)) * (10 - i);
          let rev = 11 - (add % 11);
          if (rev == 10 || rev == 11)
          rev = 0;
          if (rev != parseInt(cpf.charAt(9)))
          return false;
          // Valida 2o digito
          add = 0;
          for (let i = 0; i < 10; i ++)
          add += parseInt(cpf.charAt(i)) * (11 - i);
          rev = 11 - (add % 11);
          if (rev == 10 || rev == 11)
          rev = 0;
          if (rev != parseInt(cpf.charAt(10)))
          return false;
          return true;
        }

        function validateCpfReturn(){
          if (validateCpf(cpf) === false){
            setCpf('')
            setInvisibleErrorCpf(false)
          }else{
            setInvisibleErrorCpf(true)
          }
        }

  function setClassNameInputFunction() {
    setInvisibleErrorCpf ? setClassNameInput("bg-red-700") : setClassNameInput("bg-gray-700")
  }

  return (
    <div>
      <div id="blocoCpf">
        <Input mask="999.999.999-99" textLabel="CPF" valueInput={cpf || ''} typeInput="text" idInput="cpf" defaultValue={cpf} onChange={setCpf} onBlur={validateCpfReturn} classNameInput={setClassNameInputFunction} />
        <div className="text-sm text-red-600"  hidden={invisibleErrorCpf}>
          <div className="flex justify-end -mt-3">
            <svg className=" pt-0.5 h-6 w-6 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="12" y1="8" x2="12" y2="12" />  <line x1="12" y1="16" x2="12.01" y2="16" /></svg>
            <p className="pt-1 pl-1">CPF inválido!</p>
          </div>
        </div>
    </div>

      <Input textLabel="Data de Nascimento" typeInput="date" idInput="birthDate" defaultValue={birthDate} onChange={setBirthDate} />

      <Input readOnly={true} textLabel="Nome" typeInput="text" idInput="name" defaultValue={name} />
      <Input readOnly={true} textLabel="E-mail" typeInput="text" idInput="email" defaultValue={email} />
      <Input readOnly={true} textLabel="Telefone" typeInput="text" idInput="phone" defaultValue={phone} />

      <div className="flex justify-end -mb-4z text-sm">
        <div className="form-check form-switch">
          <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={setAppearanceDeficiencyFunction}/>
          <label className="form-check-label inline-block text-gray-800 mb-3" htmlFor="flexSwitchCheckDefault">Sou portador de necessidades especiais</label>
        </div>
      </div>
      <div hidden={appearanceDeficiency}>
        <Textarea textLabel="Necessito da seguinte providência:" name="deficienty"></Textarea>
      </div>

      <div className="flex flex-col mt-12">
        <Button onClick={() => props.personalDataChange?.(new PersonalData(cpf, new Date(birthDate), deficiency))}>Próximo</Button>
      </div>
      <div className="flex flex-col mt-2">
        <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
      </div>

    </div>
  )
}
