import React, {useContext} from "react"
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

export default function Home() {
  const {lead, saveLead} = useLeads()
  const {personalData, savePersonalData, backStepOne} = usePersonalData()
  const {address, saveAddress, backStepTwo} = useAddress()
  const {course, getCourse, nextStepFive, backStepThree} = useCourse()
  const {courseResume, nextStepSix, backStepFour} = useCourseResume()

  const {stepOneVisible, stepTwoVisible, stepThreeVisible, stepFourVisible, stepFiveVisible} = useContext(RegistrationContext)

  return (
    <>
    
    {stepOneVisible ? (

      <div id="container" className="flex">
        <div id="main" className="flex flex-col md:flex-row flex-grow">
          <div className="flex-grow w-44">
            <div className="h-32 w-screen bg-[url('/img/mobile.jpg')] block md:hidden" />
            <div className="md:h-screen bg-[url('https://www.ftec.com.br/static/media/uploads/imagens-formas-de-ingresso/transferencia.png')] hidden md:block" />
          </div>
          <div className="bg-gray-100 flex-grow">
            <div className="flex justify-center items-center md:h-screen">
              <div className="flex-row">
                <button className="bg-gray-400 text-white px-28 py-4 rounded-2xl mb-4">
                  Curso outras regras
                </button>
                <div className="flex justify-center items-center">
                  <h1 className="text-2xl font-light m-10 text-cyan-900">Vestibular Uniftec</h1>
                </div>
                <Form 
                  lead={lead} 
                  leadChange={saveLead}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    :
    (
      stepTwoVisible ? (
      <div>
        <div id="container" className="flex flex-col">
          <div id="main" className="flex flex-col md:flex-row flex-grow items-center">
            <Stepper
              classNameStep1={"step-primary"}
            />
            <div className="bg-gray-100 flex-grow max-w-none">
              <div className="flex justify-center items-center md:h-screen">
                <div className="flex-row">
                  <button className="bg-gray-400 text-white px-28 py-4 rounded-2xl mb-4">
                    Curso outras regras
                  </button>
                  <div className="flex justify-center items-center">
                    <h1 className="text-2xl font-light m-10 text-cyan-900">Vestibular</h1>
                  </div>
                  <FormPersonalData
                    personalData={personalData}
                    personalDataChange={savePersonalData}
                    backPage={backStepOne}
                  />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      )
        :
        (
          stepThreeVisible ? (
            <div id="container" className="flex flex-col">
              <div id="main" className="flex flex-col md:flex-row flex-grow items-center">
                <Stepper
                  classNameStep1={"step-primary"}
                  classNameStep2={"step-primary"}
                />
                <div className="bg-gray-100 flex-grow">
                  <div className="flex justify-center items-center md:h-screen">
                    <div className="flex-row">
                      <button className="bg-gray-400 text-white px-28 py-4 rounded-2xl mb-4">
                        Curso outras regras
                      </button>
                      <div className="flex justify-center items-center">
                        <h1 className="text-2xl font-light m-10 text-cyan-900">TELA 3</h1>
                      </div>
                      <FormAddress
                        address={address}
                        addressChange={saveAddress}
                        backPage={backStepTwo}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          :
          ( 
            stepFourVisible ? (
              <div id="container" className="flex flex-col">
                <div id="main" className="flex flex-col md:flex-row flex-grow items-center">
                  <Stepper
                    classNameStep1={"step-primary"}
                    classNameStep2={"step-primary"}
                    classNameStep3={"step-primary"}
                  />
                  <div className="bg-gray-100 flex-grow">
                    <div className="flex justify-center items-center md:h-screen">
                      <div className="flex-row">
                        <button className="bg-gray-400 text-white px-28 py-4 rounded-2xl mb-4">
                          Curso outras regras
                        </button>
                        <div className="flex justify-center items-center">
                          <h1 className="text-2xl font-light m-10 text-cyan-900">Vestibular Uniftec</h1>
                        </div>
                        <FormCourse
                          course={course}
                          courseChange={nextStepFive}
                          backPage={backStepThree}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            :
            (
              stepFiveVisible ? (
                <div>
                  <div id="main" className="flex flex-col md:flex-row flex-grow">
                    <div className="flex-grow w-1/3">
                      <div className="h-32 bg-[url('/img/mobile.jpg')] block md:hidden" />
                      <div className="md:h-screen bg-[url('/img/desktop.jpg')] hidden md:block" />
                    </div>
                    <div className="bg-gray-100 flex-grow align-items justify-center">
                      <div className="flex justify-center items-center md:h-screen">
                        <div className="flex-row">
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
