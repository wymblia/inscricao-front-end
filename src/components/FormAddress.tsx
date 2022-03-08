import axios from "axios";
import React, { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Address from "../core/Address";
import PersonalData from "../core/PersonalData";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import Input from "./Input";


interface FormAddressProps {
  address: Address
  addressChange?: (address: Address) => void
  backPage?: () => void
}

export default function FormAddress (props: FormAddressProps) {
  const {cep, state, city, district, street, number, cpf, birthDate, deficiency, setCep, setState, setCity, setDistrict, setStreet, setNumber} = useContext(RegistrationContext)


  function chamarCep(){
    axios
    .get(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => {
        const {data} = response
        setState(data.uf)
        setCity(data.localidade)
        setDistrict(data.bairro)
        setStreet(data.logradouro)
    })
    }


  return (
    <div>
      <Input mask="99999-999" textLabel="CEP" typeInput="text" idInput="cep" defaultValue={cep} onChange={setCep} onBlur={chamarCep} />
      <Input textLabel="Estado" typeInput="text" idInput="state" defaultValue={state} onChange={setState} />
      <Input textLabel="Cidade" typeInput="text" idInput="city" defaultValue={city} onChange={setCity} />
      <Input textLabel="Bairro" typeInput="text" idInput="district" defaultValue={district} onChange={setDistrict} />
      <Input textLabel="Rua" typeInput="text" idInput="street" defaultValue={street} onChange={setStreet} />

      <Input textLabel="Número" typeInput="text" idInput="number" defaultValue={number} onChange={setNumber} />

      <div className="flex flex-col mt-12">
        <Button onClick={() => props.addressChange?.(new Address(cep, state, city, street, number))}>Próximo</Button>
      </div>
      <div className="flex flex-col mt-2">
        <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
      </div>
    </div>
  )
}
