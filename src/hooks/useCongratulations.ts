import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Course from "../core/Course"
import { api } from "../services/api"

export default function useCongratulations() {
  const { displayStep4, displayStep5, displayStep7 } = useContext(RegistrationContext)

  const [courseResume, setCourseResume] = useState<Course>(Course.createVoid())

  function nextStepSeven() {
    displayStep7()
  }

  function backStepFive() {
    displayStep5()
  }

  return {
    courseResume,
    nextStepSeven,
    backStepFive
  }
}