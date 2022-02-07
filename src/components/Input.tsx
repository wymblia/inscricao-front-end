interface InputProps {
  textLabel?: string
  forLabel?: string
  classNameLabel?: string
  idInput?: string
  typeInput?: string
  valueInput?: any
  classNameInput?: string
}

export default function Input (props: InputProps) {
  return (
    <div className="flex flex-col mb-2">
      <label className={`mb-2 font-light text-sm ${props.classNameLabel}`} htmlFor={props.idInput}>
        {props.textLabel}
      </label>
      <input 
        id={props.idInput}
        type={props.typeInput}
        value={props.valueInput}
        className={`border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white ${props.classNameInput}`}
      />
    </div>
  )
}