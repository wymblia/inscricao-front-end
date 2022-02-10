import React from "react"
import Button from "../components/Button"
import Form from "../components/Form"
import useLeads from "../hooks/useLeads"

export default function Home() {
  const {stepOneVisible, lead, saveLead, displayStep1} = useLeads()

  return (
    <>
    {stepOneVisible ? (
      <div id="container" className="flex flex-col">
        <div id="main" className="flex flex-col md:flex-row flex-grow">
          <div className="flex-grow">
            <div className="h-32 bg-[url('/img/mobile.jpg')] block md:hidden" />
            <div className="md:h-screen bg-[url('/img/desktop.jpg')] hidden md:block" />
          </div>
          <div className="p-4 bg-gray-100 flex-grow">
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
    ) : (
      <div>
        <h1>teste</h1>
        <div className="flex flex-col mt-12">
          <Button onClick={displayStep1}>Enviar</Button>
        </div>
      </div>
    )}
    </>
  )
}
