import React, { useContext } from "react"
import Form from "../components/Form"
import FormCourse from "../components/FormCourse"
import FormPersonalData from "../components/FormPersonalData"
import { RegistrationContext } from "../contexts/RegistrationContext"
import useLeads from "../hooks/useLeads"
import usePersonalData from "../hooks/usePersonalData"
import useAddress from "../hooks/useAddress"
import useCourse from "../hooks/useCourse"
import useCourseResume from "../hooks/useCourseResume"
import FormAddress from "../components/FormAddress"
import FormResume from "../components/FormCourseResume"
import Steps from "../components/Steps"

export default function Home() {
  const { lead, saveLead } = useLeads()
  const { personalData, savePersonalData, backStepOne } = usePersonalData()
  const { address, saveAddress, backStepTwo } = useAddress()
  const { course, nextStepFive, backStepThree } = useCourse()
  const { nextStepSix, backStepFour } = useCourseResume()

  const { stepOneVisible, stepTwoVisible, stepThreeVisible, stepFourVisible, stepFiveVisible } = useContext(RegistrationContext)

  return (
    <>

      {stepOneVisible ? (

        <Steps
          form={
            <Form
              lead={lead}
              leadChange={saveLead}
              />
            }
            invisible={"hidden"}
        />
      )
        :
        (
          stepTwoVisible ? (
            <Steps
              form={
                <FormPersonalData
                  personalData={personalData}
                  personalDataChange={savePersonalData}
                  backPage={backStepOne}
                />
              }
            />
          )
            :
            (
              stepThreeVisible ? (
                <Steps
                  form={
                    <FormAddress
                      address={address}
                      addressChange={saveAddress}
                      backPage={backStepTwo}
                    />
                  }
                  classNameStep2={"step-primary"}
                />
              )
                :
                (
                  stepFourVisible ? (
                    <Steps
                      form={
                        <FormCourse
                          course={course}
                          courseChange={nextStepFive}
                          backPage={backStepThree}
                        />
                      }
                      classNameStep2={"step-primary"}
                      classNameStep3={"step-primary"}
                    />
                  )
                    :
                    (
                      stepFiveVisible ? (
                        <Steps
                        form={
                        <FormResume
                          courseResumeChange={nextStepSix}
                          backPage={backStepFour}
                        />
                        }
                        classNameStep2={"step-primary"}
                        classNameStep3={"step-primary"}
                        classNameStep4={"step-primary"}
                      />
                      )
                        : (
                          <h1 className="bg-green-300">uhul</h1>
                        )
                    )
                )
            )
        )}
    </>
  )
}

