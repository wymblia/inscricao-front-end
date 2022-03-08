import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Lead from "../core/Lead"
import { api } from "../services/api"

export default function useLeads () {
  const { displayStep2, displayStep3, formaIngresso } = useContext(RegistrationContext)
  
  const [lead, setLead] = useState<Lead>(Lead.createVoid())

  function saveLead (lead: Lead) {
    // api.post('/leads', {
    //   name: lead.name,
    //   email: lead.email,
    //   phone: lead.phone
    // })
    // .then (response => {
    //   console.log(response.data);
    // })
    console.log(formaIngresso)
    displayStep2()
  }


  return {
    saveLead,
    lead
  }
}
