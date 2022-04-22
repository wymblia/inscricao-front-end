import { useContext } from "react";
import Swal from "sweetalert2";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Lead from "../core/Lead";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  lead: Lead
  leadChange?: (lead: Lead) => any
}

export default function Form (props: FormProps) {
  const {socialName, name, email, phone, setSocialName, setName, setemail, setphone, appearanceSocialName, setAppearanceSocialName} = useContext(RegistrationContext)

  function setAppearanceSocialNameFunction() {
    appearanceSocialName ? setAppearanceSocialName(false) : setAppearanceSocialName(true)
  }

  function FormSubmit(e: any) {
    e.preventDefault();
    props.leadChange?.(new Lead(name, email, phone))
  }

  function ValidateFirstAndLastName(e: any){
    if(!e.split(' ')[1])
      Swal.fire({
        icon: 'error',
        text: 'Informe nome e sobrenome!'
      })
  }

  return (
    <div>
       <form onSubmit={FormSubmit} autoComplete="off">
        <div className="flex justify-end -mb-4z text-sm">
          <div className="form-check form-switch">
            <input defaultChecked={appearanceSocialName} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={setAppearanceSocialNameFunction}/>
            <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault">Utilizar um Nome Social</label>
          </div>
        </div>
        <div hidden={!appearanceSocialName}>
        <Input textLabel="Nome Social" typeInput="text" idInput="socialName" defaultValue={socialName} onChange={setSocialName} />
        </div>
        <Input textLabel="Nome completo" typeInput="text" idInput="name" defaultValue={name} onChange={setName} onBlur={ValidateFirstAndLastName} required={true} />
        <Input textLabel="E-mail" typeInput="text" idInput="email" defaultValue={email} onChange={setemail} required={true}/>
        <Input mask="(99) 99999-9999" textLabel="Celular" typeInput="text" idInput="phone" defaultValue={phone} onChange={setphone} required={true}/>
        <div className="flex flex-col mt-12">
          <Button type="submit">Próximo</Button>
        </div>
      </form>
    </div>

    
  )
}