import { useContext } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Stepper from "./Stepper"

interface StepsProps {
  form?: any
  classNameStep2?: string
  classNameStep3?: string
  classNameStep4?: string
  invisible?: string
}

export default function Steps(props: StepsProps) {
  const {
    stepOneVisible,
    stepTwoVisible,
    stepThreeVisible,
    stepFourVisible,
    stepFiveVisible,
    stepSixVisible
  } = useContext(RegistrationContext)

  return (
    <div id="container" className="flex m-2 md:m-0 dark">
      <div id="main" className="flex flex-col xl:flex-row flex-grow dark:bg-grey-800">
        <div className="flex-grow md:max-w-[50%]">
          <div className="h-60 bg-[url('https://www.ftec.com.br/static/media/uploads/NEW_VESTIBULAR/vestibular-mobile1.png')] block xl:hidden bg-cover bg-center md:w-screen" />
          <div className="xl:h-screen bg-[url('https://www.ftec.com.br/static/media/uploads/NEW_VESTIBULAR/vestibular11.png')] hidden xl:block bg-cover bg-center" />
        </div>
        <div
          className={`flex flex-grow justify-start items-center md:max-w-[12%] md:min-w-[12%] xl:h-screen ${props.invisible} p-5`}
        >
          <Stepper
            className={"hidden 2xl:block steps-vertical"}
            classNameStep2={props.classNameStep2}
            classNameStep3={props.classNameStep3}
            classNameStep4={props.classNameStep4}
          />
        </div>
        <div
          className={`flex-grow ${
            stepOneVisible ? "flex justify-center items-center xl:max-w-[50%]" : "xl:max-w-[26%]"
          }`}
        >
          <div className="flex justify-center items-center md:h-screen">
            <div className="flex-row">
              <Stepper
                className={`mb-11
                ${stepOneVisible ? "hidden" : "2xl:hidden steps-horizontal"}
                ${stepTwoVisible ? "lg:mt-7 md:mt-44" : null},
                ${stepThreeVisible ? "lg:mt-80 md:mt-[500px]" : null}
                ${stepFourVisible ? "lg:mt-56 md:mt-96" : null}
                ${stepFiveVisible ? "lg:mt-36 md:mt-64" : null}
                ${stepSixVisible ? "lg:mt-0 md:mt-16" : null}
              `}
                classNameStep2={props.classNameStep2}
                classNameStep3={props.classNameStep3}
                classNameStep4={props.classNameStep4}
              />
              <div className="flex justify-center items-center">
                <h1
                  className={`${
                    stepSixVisible ? "hidden" : "text-3xl font-normal mb-10 mt-10 text-[#4B6BFB]"
                  }`}
                >
                  Inscreva-se
                </h1>
              </div>
              {props.form}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
