import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Lead from "../core/Lead"
import { api } from "../services/api"

export default function useLeads () {
  const { displayStep2, displayStep3, formaIngresso } = useContext(RegistrationContext)
  
  const [lead, setLead] = useState<Lead>(Lead.createVoid())

  function saveLead (lead: Lead) {

    const firstName = lead.name.split(' ')[0];

    const lastName = lead.name.split(' ').slice(1, 20).join(' ');

    api.post('/leads', {
      nome: firstName,
      sobrenome: lastName,
      email: lead.email,
      telefone: lead.phone,
      filial_id: 1
    })
    .then (response => {
      console.log(response.data);
    })
    console.log(formaIngresso)
    displayStep2()
  }


  return {
    saveLead,
    lead
  }
}
