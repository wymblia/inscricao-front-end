import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Course from "../core/Course"
import { api } from "../services/api"

export default function useCourse() {
  const { displayStep4, displayStep5, displayStep6, unity, modality } = useContext(RegistrationContext)

  const [courseResume, setCourseResume] = useState<Course>(Course.createVoid())

  function nextStepSix() {
    displayStep6()
  }

  function backStepFour() {
    displayStep4()
  }

  return {
    courseResume,
    nextStepSix,
    backStepFour
  }
}
