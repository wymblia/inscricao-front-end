import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Course from "../core/Course"
import { api } from "../services/api"

export default function useCourse() {
  const { displayStep3, displayStep5, displayStep6, unity, modality } = useContext(RegistrationContext)

  const [course, setCourse] = useState<Course>(Course.createVoid())

  function getCourse() {
    console.log(unity, modality)
    api.post('/process', {
      filial: unity,
      modalidade: modality
    })
  }

  function nextStepFive() {
    displayStep5()
  }

  function backStepThree() {
    displayStep3()
  }

  return {
    getCourse,
    nextStepFive,
    course,
    backStepThree
  }
}
