import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Course from "../core/Course"
import { api } from "../services/api"

export default function useCourse() {
  const { displayStep3, displayStep5, displayStep6, listOffer, setListOffer} = useContext(RegistrationContext)
  const [course, setCourse] = useState<Course>(Course.createVoid())

  function getCourse() {
    api.get('/process', {
    })
    .then (response => {
      setListOffer(response.data);
    })
  }

  function nextStepFive() {
    displayStep5()
  }

  function backStepThree() {
    displayStep3()
    console.log(listOffer)
  }


  return {
    getCourse,
    nextStepFive,
    listOffer,
    course,
    backStepThree
  }
}
