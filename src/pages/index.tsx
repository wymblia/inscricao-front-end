import React, {useContext} from "react"
import Form from "../components/Form"
import FormCourse from "../components/FormCourse"
import FormPersonalData from "../components/FormPersonalData"
import { RegistrationContext } from "../contexts/RegistrationContext"
import useLeads from "../hooks/useLeads"
import usePersonalData from "../hooks/usePersonalData"
import useAddress from "../hooks/useAddress"
import useCourse from "../hooks/useCourse"
import FormAddress from "../components/FormAddress"

export default function Home() {
  const {lead, saveLead, teste} = useLeads()
  const {personalData, savePersonalData} = usePersonalData()
  const {address, saveAddress} = useAddress()
  const {course, saveCourse} = useCourse()

  const {stepOneVisible, stepTwoVisible, stepThreeVisible, stepFourVisible, stepFiveVisible} = useContext(RegistrationContext)

  return (
    <>
    {stepOneVisible ? (

      <div id="container" className="flex flex-col">
        <div id="main" className="flex flex-col md:flex-row flex-grow">
          <div className="flex-grow">
            <div className="h-32 bg-[url('/img/mobile.jpg')] block md:hidden" />
            <div className="md:h-screen bg-[url('/img/desktop.jpg')] hidden md:block" />
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
        <div id="container" className="flex flex-col">
        <div id="main" className="flex flex-col md:flex-row flex-grow">
          <div className="flex-grow">
            <div className="h-32 bg-[url('/img/mobile.jpg')] block md:hidden" />
            <div className="md:h-screen bg-[url('/img/desktop.jpg')] hidden md:block" />
          </div>
          <div className="bg-gray-100 flex-grow">
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
                />
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
            <div id="main" className="flex flex-col md:flex-row flex-grow">
              <div className="flex-grow">
                <div className="h-32 bg-[url('/img/mobile.jpg')] block md:hidden" />
                <div className="md:h-screen bg-[url('/img/desktop.jpg')] hidden md:block" />
              </div>
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
              <div id="main" className="flex flex-col md:flex-row flex-grow">
                <div className="flex-grow">
                  <div className="h-32 bg-[url('/img/mobile.jpg')] block md:hidden" />
                  <div className="md:h-screen bg-[url('/img/desktop.jpg')] hidden md:block" />
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
                      <FormCourse
                        course={course}
                        courseChange={saveCourse}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
            : 
            (
              <h1>dasd</h1>
            )
           )
        )
    )}
    </>
  )
}
