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

  return (
    <div>
      <a href="#" className="flex justify-end text-sm" onClick={setAppearanceSocialNameFunction}> Utilizar um Nome Social</a>
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