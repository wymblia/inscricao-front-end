import { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import FormPersonalData from "./FormPersonalData";
import Stepper from "./Stepper";

interface StepsProps {
  teste?: any
  teste1?: any
  teste2?: any
  form?: any
  steppers?: any
  classNameStep2?: string
  classNameStep3?: string
  classNameStep4?: string
  invisible?: string
}

export default function Steps(props: StepsProps) {
  const { stepOneVisible } = useContext(RegistrationContext)

  return (
    <div id="container" className="flex">
      <div id="main" className="flex flex-col md:flex-row flex-grow">
        <div className="flex-grow md:max-w-[50%]">
          <div className="bg-[url('/img/mobile.jpg')] block md:hidden" />
          <div className="md:h-screen bg-[url('https://www.ftec.com.br/static/media/uploads/imagens-formas-de-ingresso/transferencia.png')] hidden md:block bg-cover bg-center" />
        </div>
        <div className={`flex flex-grow justify-start items-center md:max-w-[12%] md:min-w-[12%] md:h-screen ${props.invisible} p-5`}>
          <Stepper
            className={"hidden md:block steps-vertical"}
            classNameStep2={props.classNameStep2}
            classNameStep3={props.classNameStep3}
            classNameStep4={props.classNameStep4}
          />
        </div>
        <div className={`flex-grow ${stepOneVisible ? 'md:max-w-[50%]' : 'md:max-w-[38%]'} `}>
          <div className="flex justify-left items-center md:h-screen">
            <div className="flex-row">
              <Stepper
                className={"steps-horizontal md:hidden"}
              />
              <div className="flex justify-center items-center">
                <h1 className="text-2xl font-light m-10 text-cyan-900">Vestibular Uniftec</h1>
              </div>
              {props.form}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
