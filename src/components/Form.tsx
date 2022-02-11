import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Lead from "../core/Lead";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  lead: Lead
  leadChange?: (lead: Lead) => void
}

export default function Form (props: FormProps) {
  const {name, email, phone, setName, setemail, setphone} = useContext(RegistrationContext)
  return (
    <div>
      <Input textLabel="Nome" typeInput="text" idInput="name" valueInput={name} onChange={setName} />
      <Input textLabel="E-mail" typeInput="text" idInput="email" valueInput={email} onChange={setemail} />
      <Input textLabel="Telefone" typeInput="text" idInput="phone" valueInput={phone} onChange={setphone} />
      <div className="flex flex-col mt-12">
        <Button onClick={() => props.leadChange?.(new Lead(name, email, phone))}>Próximo</Button>
      </div>
    </div>
  )
}
