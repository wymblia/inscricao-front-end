import InputMask from "react-input-mask"

interface InputProps {
  textLabel?: string
  forLabel?: string
  classNameLabel?: string
  idInput?: string
  typeInput?: string
  valueInput?: any
  classNameInput?: any
  onChange?: (valueInput: any) => void
  onClick?: (valueInput: any) => void
  hidden?: boolean
  defaultValue?: any
  accept?: any
  required?: boolean
  placeholder?: string
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col mb-2">
      <label className={`mb-2 font-light text-sm ${props.classNameLabel}`} htmlFor={props.idInput}>
        {props.textLabel}
      </label>
      <InputMask
        placeholder={props.placeholder}
        id={props.idInput}
        type={props.typeInput}
        value={props.valueInput}
        onChange={props.onChange}
        onClick={props.onClick}
        hidden={props.hidden}
        defaultValue={props.defaultValue}
        accept={props.accept}
        required={props.required}
        className={`${props.classNameInput}`}
      />
    </div>
  )
}
