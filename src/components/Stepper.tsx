interface StepperProps {
  className?: string
  classNameStep2?: string
  classNameStep3?: string
  classNameStep4?: string

  
}

export default function Stepper (props: StepperProps) {
  return (
    <html data-theme="corporate">
        <ul className={`steps ${props.className}`}>
            <li data-content="✓" className={`step step-neutral step-primary`}>Dados Pessoais</li>
            <li data-content="✓" className={`step step-neutral mb-50 ${props.classNameStep2}`}>Endereço</li>
            <li data-content="✓" className={`step step-neutral ${props.classNameStep3}`}>Curso</li>
            <li data-content="✓" className={`step step-neutral ${props.classNameStep4}`}>Validação</li>
        </ul>
    </html>
  )
}
