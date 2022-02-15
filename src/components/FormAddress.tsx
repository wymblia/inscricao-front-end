import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Address from "../core/Address";
import Button from "./Button";
import Input from "./Input";


interface FormAddressProps {
  address: Address
  addressChange?: (address: Address) => void
}

export default function FormAddress (props: FormAddressProps) {
  const {cep, state, city, street, number, setCep, setState, setCity, setStreet, setNumber} = useContext(RegistrationContext)

  function chamarCep(){
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(data => {
        setState(data.uf)
        setCity(data.localidade)
        setStreet(data.logradouro)
    })
    .catch(error  => {});    
  }

  return (
    <div>
      <Input mask="99999-999" textLabel="CEP" typeInput="text" idInput="cep" defaultValue={cep} onChange={setCep} onBlur={chamarCep} />
      <Input textLabel="Estado" typeInput="text" idInput="state" defaultValue={state} onChange={setState} />
      <Input textLabel="Cidade" typeInput="text" idInput="city" defaultValue={city} onChange={setCity} />
      <Input textLabel="Rua" typeInput="text" idInput="street" defaultValue={street} onChange={setStreet} />
      <Input textLabel="Número" typeInput="text" idInput="number" defaultValue={number} onChange={setNumber} />

      <div className="flex flex-col mt-12">
        <Button onClick={() => props.addressChange?.(new Address(cep, state, city, street, number))}>Próximo</Button>
      </div>
    </div>
  )
}
