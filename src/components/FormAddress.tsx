import axios from "axios"
import React, { Fragment, useContext } from "react"
import Swal from "sweetalert2"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Address from "../core/Address"
import Button from "./Button"
import ButtonBack from "./ButtonBack"
import Input from "./Input"

interface FormAddressProps {
  address: Address
  addressChange?: (address: Address) => void
  backPage?: () => void
}

export default function FormAddress(props: FormAddressProps) {
  const {
    cep,
    setCep,
    state,
    setState,
    city,
    setCity,
    district,
    setDistrict,
    street,
    setStreet,
    number,
    setNumber,
    complement,
    setComplement
  } = useContext(RegistrationContext)

  function getCep() {
    if (!cep.includes("_")) {
      axios.get(`https://viacep.com.br/ws/${cep}/json`).then((response) => {
        const { data } = response
        if (data.erro) {
          Swal.fire({
            title: "<p>CEP inválido</p>",
            icon: "warning",
            html:
              "Não sabe seu CEP?" +
              '<a href="https://www2.correios.com.br/sistemas/buscacep/buscaCep.cfm" target="_blank"> <br><br> <u>Consulte-o aqui</u></a> ',
            focusConfirm: true,
            confirmButtonText: "Ok"
          })
        } else {
          setState(data.uf)
          setCity(data.localidade)
          setDistrict(data.bairro)
          setStreet(data.logradouro)
        }
      })
    } else {
      Swal.fire({
        title: "CEP incompleto",
        text: "Digite o CEP completo!",
        confirmButtonText: "Ok",
        icon: "warning"
      })
    }
  }

  function FormSubmit(e: any) {
    e.preventDefault()
    props.addressChange?.(new Address(cep, state, city, street, number))
  }

  return (
    <Fragment>
      <form onSubmit={FormSubmit} autoComplete="off">
        <Input
          mask="99999-999"
          textLabel="CEP"
          typeInput="cep"
          idInput="cep"
          valueInput={cep}
          onChange={setCep}
          onBlur={getCep}
          required={true}
        />
        <Input
          textLabel="Estado"
          typeInput="text"
          idInput="state"
          valueInput={state}
          onChange={setState}
          required={true}
        />
        <Input
          textLabel="Cidade"
          typeInput="text"
          idInput="city"
          valueInput={city}
          onChange={setCity}
          required={true}
        />
        <Input
          textLabel="Bairro"
          typeInput="text"
          idInput="district"
          valueInput={district}
          onChange={setDistrict}
          required={true}
        />
        <Input
          textLabel="Rua"
          typeInput="text"
          idInput="street"
          valueInput={street}
          onChange={setStreet}
          required={true}
        />
        <Input
          textLabel="Número"
          typeInput="text"
          idInput="number"
          defaultValue={number}
          onChange={setNumber}
          required={true}
        />
        <Input
          textLabel="Complemento"
          typeInput="text"
          idInput="complement"
          defaultValue={complement}
          onChange={setComplement}
          required={false}
        />
        <div className="flex flex-col mt-12">
          <Button type="submit">Próximo</Button>
        </div>
        <div className="flex flex-col mt-2">
          <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
        </div>
      </form>
    </Fragment>
  )
}
