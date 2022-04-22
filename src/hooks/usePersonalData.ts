import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import PersonalData from "../core/PersonalData"

export default function usePersonalData () {
  const { displayStep1, displayStep3, displayStep4 } = useContext(RegistrationContext)
  
  const [personalData, setPersonalData] = useState<PersonalData>(PersonalData.createVoid())

  function savePersonalData (personalData: PersonalData) {
    displayStep3()
  }

  function backStepOne () {
    displayStep1()
  }

  return {
    savePersonalData,
    personalData,
    backStepOne
  }
}
