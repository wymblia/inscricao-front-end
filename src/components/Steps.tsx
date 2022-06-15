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
  const { stepOneVisible, stepSixVisible } = useContext(RegistrationContext)

  return (
    <div id="container" className="flex m-2 md:m-0">
      <div id="main" className="flex flex-col md:flex-row flex-grow">
        <div className="flex-grow md:max-w-[50%]">
          <div className="h-60 bg-[url('https://www.ftec.com.br/static/media/uploads/NEW_VESTIBULAR/vestibular-mobile.png')] block md:hidden bg-cover bg-center" />
          <div className="md:h-screen bg-[url('https://www.ftec.com.br/static/media/uploads/NEW_VESTIBULAR/vestibular1.png')] hidden md:block bg-cover bg-center" />
        </div>
        <div className={`flex flex-grow justify-start items-center md:max-w-[12%] md:min-w-[12%] md:h-screen ${props.invisible} p-5`}>
          <Stepper
            className={"hidden md:block steps-vertical"}
            classNameStep2={props.classNameStep2}
            classNameStep3={props.classNameStep3}
            classNameStep4={props.classNameStep4}
          />
        </div>
        <div className={`flex-grow ${stepOneVisible ? 'flex justify-center items-center md:max-w-[50%]' : 'md:max-w-[38%]'}`}>
          <div className="flex justify-left items-center md:h-screen">
            <div className="flex-row">
              <Stepper
                  className={`md:hidden steps-horizontal ${stepOneVisible ? 'invisible' : null}`}
                  classNameStep2={props.classNameStep2}
                  classNameStep3={props.classNameStep3}
                  classNameStep4={props.classNameStep4}
              />
              <div className="flex justify-center items-center">
                <h1 className={`${stepSixVisible ? 'hidden' : 'text-3xl font-normal mb-10 text-[#4B6BFB]'}`}>Inscreva-se</h1>
              </div>
              {props.form}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
