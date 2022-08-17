import InputMask from "react-input-mask"

interface InputProps {
  textLabel?: string
  idInput?: string
  typeInput?: string
  valueInput?: any
  accept?: string
  required?: boolean
  onChange?: (valueInput: any) => void
  onClick?: (valueInput: any) => void
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col mb-2">
      <label className="mb-2 font-light text-sm" htmlFor={props.idInput}>
        {props.textLabel}
      </label>
      <InputMask
        id={props.idInput}
        type={props.typeInput}
        value={props.valueInput}
        onChange={props.onChange}
        onClick={props.onClick}
        accept={props.accept}
        required={props.required}
      />
    </div>
  )
}
