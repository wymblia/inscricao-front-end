import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Course from "../core/Course"
import { api } from "../services/api"

export default function useCourse() {
  const { displayStep3, displayStep5, listOffer, setListOffer, setListConsulters } = useContext(RegistrationContext)
  const [course] = useState<Course>(Course.createVoid())

  function getCourse() {
    api.get('/process', {
    })
    .then (response => {
      setListOffer(JSON.parse(response.data))
    })
  }

  function getConsulters() {
    api.get('/get-consulters', {
    })
    .then (response => {
      setListConsulters(response.data)
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
    getConsulters,
    nextStepFive,
    listOffer,
    course,
    backStepThree
  }
}
