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
import Stepper from "../components/Stepper"
import Fundo from "../components/imgs/fundo.webp"
import Image from 'next/image'
import Steps from "../components/Steps"


export default function Home() {
  const { lead, saveLead } = useLeads()
  const { personalData, savePersonalData, backStepOne } = usePersonalData()
  const { address, saveAddress, backStepTwo } = useAddress()
  const { course, getCourse, nextStepFive, backStepThree } = useCourse()
  const { courseResume, nextStepSix, backStepFour } = useCourseResume()

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
                        <div>
                          <div id="main" className="flex flex-col md:flex-row flex-grow">
                            <div className="flex-grow md:max-w-[40%]">
                              <div className="h-32 bg-[url('/img/mobile.jpg')] block md:hidden" />
                              <div className="md:h-screen bg-[url('https://www.ftec.com.br/static/media/uploads/imagens-formas-de-ingresso/transferencia.png')] hidden md:block bg-cover bg-center" />
                            </div>
                            <div className="bg-gray-100 flex-grow md:max-w-[60%]">
                              <div className="flex justify-center items-center md:h-screen">
                                <Stepper
                                  className={"hidden md:block steps-vertical"}
                                  classNameStep1={"step-primary"}
                                  classNameStep2={"step-primary"}
                                  classNameStep3={"step-primary"}
                                  classNameStep4={"step-primary"}
                                />
                                <div className="flex-row">
                                  <Stepper
                                    className={"steps-horizontal md:hidden"}
                                    classNameStep1={"step-primary"}
                                    classNameStep2={"step-primary"}
                                    classNameStep3={"step-primary"}
                                    classNameStep4={"step-primary"}
                                  />
                                  <div className="flex justify-center items-center">
                                    <h1 className="text-2xl font-light m-10 text-cyan-900">Vestibular Uniftec</h1>
                                  </div>
                                  <FormResume
                                    courseResumeChange={nextStepSix}
                                    backPage={backStepFour}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                        : (
                          <h1>jfosdfi</h1>
                        )
                    )
                )
            )
        )}
    </>
  )
}
