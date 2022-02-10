import { useState } from "react";
import Lead from "../core/Lead";
import useLeads from "../hooks/useLeads";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
  lead: Lead
  leadChange?: (lead: Lead) => void
}

export default function Form (props: FormProps) {
  const [name, setName] = useState(props.lead?.name ?? '')
  const [email, setEmail] = useState(props.lead?.email ?? '')
  const [phone, setPhone] = useState(props.lead?.phone ?? '')
  
  return (
    <div>
      <Input textLabel="Nome" typeInput="text" idInput="name" valueInput={name} onChange={setName} />
      <Input textLabel="E-mail" typeInput="text" idInput="email" valueInput={email} onChange={setEmail} />
      <Input textLabel="Telefone" typeInput="text" idInput="phone" valueInput={phone} onChange={setPhone} />
      <div className="flex flex-col mt-12">
        <Button onClick={() => props.leadChange?.(new Lead(name, email, phone))}>Próximo</Button>
      </div>
    </div>
  )
}