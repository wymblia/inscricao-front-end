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

  onBlur?: (valueInput: any) => void
  hidden?: boolean
  readOnly?: boolean
  mask?: string
  defaultValue?: any
  accept?: any
  required?: boolean
  placeholder?: string
}

export default function Input (props: InputProps) {
  return (
    <div className="flex flex-col mb-2">
      <label className={`mb-2 font-light text-sm text-gray-700 ${props.classNameLabel}`} htmlFor={props.idInput}>
        {props.textLabel}
      </label>
      <InputMask
        mask = { props.mask }
        placeholder = { props.placeholder }
        id = { props.idInput }
        type = { props.typeInput }
        value = { props.valueInput }
        onChange = { (e => props.onChange?.(e.target.value)) }
        onBlur = { e => props.onBlur?.(e.target.value) }
        hidden = { props.hidden }
        defaultValue = { props.defaultValue }
        accept = { props.accept }
        required = { props.required }
        className = {`xl:w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white text-gray-700 ${props.readOnly ? 'bg-gray-200 focus:bg-gray-200' : null} ${props.classNameInput}`}
      />
    </div>
  )
}
