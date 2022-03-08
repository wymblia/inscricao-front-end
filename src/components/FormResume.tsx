import React, { useContext, useState } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import PersonalData from "../core/PersonalData";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./TextArea";

interface PersonalDataProps {
  personalData: PersonalData
  personalDataChange?: (personalData: PersonalData) => void
}

export default function FormPersonalData (props: PersonalDataProps) {
  const {cpf, setCpf, birthDate, setBirthDate, deficiency, setDeficiency, name, email, phone, cep, state, city, district, street, number} = useContext(RegistrationContext)
  const [appearanceDeficiency, setAppearanceDeficiency] = useState(true)
  

  return (
    <div className="">
      <div className="">
      <Input classNameInput="" readOnly={true} textLabel="Nome" typeInput="text" idInput="name" defaultValue={name} />
      <Input readOnly={true} textLabel="E-mail" typeInput="text" idInput="email" defaultValue={email} />
      <Input readOnly={true} textLabel="Telefone" typeInput="text" idInput="phone" defaultValue={phone} />

      <Input readOnly={true} textLabel="CPF" typeInput="text" idInput="cpf" defaultValue={cpf} />
      <Input readOnly={true} textLabel="Data de Nascimento" typeInput="date" idInput="birthDate" defaultValue={birthDate} />

      <Input readOnly={true} textLabel="CEP" typeInput="text" idInput="cep" defaultValue={cep} />
      <Input readOnly={true} textLabel="Estado" typeInput="text" idInput="state" defaultValue={state} />
      <Input readOnly={true} textLabel="Cidade" typeInput="text" idInput="city" defaultValue={city} />
      <Input readOnly={true} textLabel="Bairro" typeInput="text" idInput="district" defaultValue={district} />
      <Input readOnly={true} textLabel="Rua" typeInput="text" idInput="street" defaultValue={street} />
      <Input readOnly={true} textLabel="Número" typeInput="text" idInput="number" defaultValue={number} />
      </div>

      <div className="">
        <Input readOnly={true} textLabel="Número" typeInput="text" idInput="number" defaultValue={number} />
      </div>

      <div>
        <h1>fjdiojios</h1>
      </div>



      <div className="flex flex-col mt-12">
        <Button onClick={() => props.personalDataChange?.(new PersonalData(cpf, new Date(birthDate), deficiency))}>Próximo</Button>
      </div>
    </div>
  )
}