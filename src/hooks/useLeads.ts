import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Lead from "../core/Lead"
import { api } from "../services/api"
import useCourse from "../hooks/useCourse"

export default function useLeads() {
  const { displayStep2, socialName } = useContext(RegistrationContext)
  const { getCourse } = useCourse()
  const [lead] = useState<Lead>(Lead.createVoid())

  function saveLead(lead: Lead) {
    api.post("/leads", {
      complete_name: lead.name,
      social_name: socialName,
      email: lead.email,
      phone: lead.phone
    })
    getCourse()
    displayStep2()
  }

  return {
    saveLead,
    lead
  }
}
