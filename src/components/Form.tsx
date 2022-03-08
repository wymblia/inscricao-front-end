import { useContext, useState } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Lead from "../core/Lead";
import Button from "./Button";
import Input from "./Input";


interface FormProps {
  lead: Lead
  leadChange?: (lead: Lead) => void
}

export default function Form (props: FormProps) {
  const {socialName, name, email, phone, setSocialName, setName, setemail, setphone, setFormaIngresso} = useContext(RegistrationContext)
  const [appearanceSocialName ,setAppearanceSocialName] = useState(true)

  function setAppearanceSocialNameFunction() {
    appearanceSocialName ? setAppearanceSocialName(false) : setAppearanceSocialName(true)
  }

  <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>


  return (
    <div>

      <div className="flex justify-end -mb-4z text-sm">
        <div className="form-check form-switch">
          <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={setAppearanceSocialNameFunction}/>
          <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault">Utilizar um Nome Social</label>
        </div>
      </div>
      <div hidden={appearanceSocialName}>
        <Input textLabel="Nome Social" typeInput="text" idInput="socialName" defaultValue={socialName} onChange={setSocialName} />
      </div>
      
      <Input textLabel="Nome" typeInput="text" idInput="name" defaultValue={name} onChange={setName} />
      <Input textLabel="E-mail" typeInput="text" idInput="email" defaultValue={email} onChange={setemail} />
      <Input mask="(99) 99999-9999" textLabel="Telefone" typeInput="text" idInput="phone" defaultValue={phone} onChange={setphone} />
      <div className="flex flex-col mt-12">
        <Button onClick={() => props.leadChange?.(new Lead(name, email, phone))}>Próximo</Button>
      </div>
    </div>

    
  )
}