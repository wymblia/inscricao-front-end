import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Course from "../core/Course"
import { api } from "../services/api"

export default function useCourse() {
  const { displayStep3, displayStep5, offerList, setOfferList } = useContext(RegistrationContext)
  const [course] = useState<Course>(Course.createVoid())

  function getCourse() {
    api.get("/process", {}).then((response) => {
      setOfferList(JSON.parse(response.data))
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
    offerList,
    course,
    backStepThree
  }
}
