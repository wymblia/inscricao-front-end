interface StepperProps {
  className?: string
  classNameStep2?: string
  classNameStep3?: string
  classNameStep4?: string

}

export default function Stepper (props: StepperProps) {
  return (
      <div data-theme="corporate">
          <ul className={`steps ${props.className} font-light `} >
              <li data-content="✓" className={`step step-neutral step-primary text-gray-700`}>Dados Pessoais</li>
              <li data-content="✓" className={`step step-neutral mb-50 text-gray-700 ${props.classNameStep2}`}>Endereço</li>
              <li data-content="✓" className={`step step-neutral text-gray-700 ${props.classNameStep3}`}>Curso</li>
              <li data-content="✓" className={`step step-neutral text-gray-700 ${props.classNameStep4}`}>Validação</li>
          </ul>
      </div>
  )
}
