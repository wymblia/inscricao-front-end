import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Course from "../core/Course"
import { api } from "../services/api"

export default function useCourse () {
  const { displayStep3, displayStep5, displayStep6 } = useContext(RegistrationContext)
  
  const [course, setCourse] = useState<Course>(Course.createVoid())

  function saveCourse (course: Course) {
    // api.post('/leads', {
    //   name: lead.name,
    //   email: lead.email,
    //   phone: lead.phone
    // })
    // .then (response => {
    //   console.log(response.data);
    // })
    displayStep5()
  }

  function backStepThree () {
    displayStep3()
  }

  return {
    saveCourse,
    course,
    backStepThree
  }
}
