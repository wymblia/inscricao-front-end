import { useContext, useState } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import PersonalData from "../core/PersonalData";
import Button from "./Button";
import Input from "./Input";

interface PersonalDataProps {
  personalData: PersonalData
  personalDataChange?: (personalData: PersonalData) => void
}

export default function FormPersonalData (props: PersonalDataProps) {
  const {cpf, setCpf, birthDate, setBirthDate, deficiency, setDeficiency, name, email, phone} = useContext(RegistrationContext)
  const [appearanceDeficiency, setAppearanceDeficiency] = useState(true)
  

  function setAppearanceDeficiencyFunction() {
      appearanceDeficiency ? setAppearanceDeficiency(false) : setAppearanceDeficiency(true)
  }

  return (
    <div>
      <Input mask="999.999.999-99" textLabel="CPF" typeInput="text" idInput="cpf" defaultValue={cpf} onChange={setCpf} />
      <Input textLabel="Data de Nascimento" typeInput="date" idInput="birthDate" defaultValue={birthDate} onChange={setBirthDate} />

      <Input readOnly={true} textLabel="Nome" typeInput="text" idInput="name" defaultValue={name} />
      <Input readOnly={true} textLabel="E-mail" typeInput="text" idInput="email" defaultValue={email} />
      <Input readOnly={true} textLabel="Telefone" typeInput="text" idInput="phone" defaultValue={phone} />

      <a href="#" className="flex justify-end text-sm mt-5" onClick={setAppearanceDeficiencyFunction}>Possuo Deficiência</a>
      <div hidden={appearanceDeficiency}>
        <Input textLabel="Necessito da seguinte providência:" typeInput="text" idInput="deficiency" defaultValue={deficiency} onChange={setDeficiency} />
      </div>

      <div className="flex flex-col mt-12">
        <Button onClick={() => props.personalDataChange?.(new PersonalData(cpf, new Date(birthDate), deficiency))}>Próximo</Button>
      </div>
    </div>
  )
}
