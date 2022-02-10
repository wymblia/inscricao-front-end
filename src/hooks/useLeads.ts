import { useState } from "react"
import Lead from "../core/Lead"
import { api } from "../services/api"
import useVisiblePart from "./useVisiblePart"

export default function useLeads () {

  const {
    stepOneVisible,
    stepTwoVisible,
    stepThreeVisible,
    stepFourVisible,
    displayStep1,
    displayStep2,
    displayStep3,
    displayStep4,
  } = useVisiblePart()
  
  const [lead, setLead] = useState<Lead>(Lead.createVoid())

  function saveLead (lead: Lead) {
    api.post('/leads', {
      name: lead.name,
      email: lead.email,
      phone: lead.phone
    })
    .then (response => {
      console.log(response.data);
    })
    displayStep2()
  }

  return {
    saveLead,
    lead,
    stepOneVisible, 
    stepTwoVisible, 
    stepThreeVisible, 
    stepFourVisible,
    displayStep1
  }
}
