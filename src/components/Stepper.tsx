interface StepperProps {
  classNameStep1?: string
  classNameStep2?: string
  classNameStep3?: string
  
}

export default function Stepper (props: StepperProps) {
  return (
    <div className="flex-grow">
      <ul className="steps steps-horizontal md:steps-vertical">
        <li className={`step step-primary`}>Dados Pessoais</li>
        <li className={`step ${props.classNameStep2}`}>Endereço</li>
        <li className={`step ${props.classNameStep3}`}>Curso</li>
      </ul>
    </div>
  )
}
