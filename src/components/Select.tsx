interface SelectProps {
    name?: string
    textLabel?: string
    forLabel?: string
    classNameLabel?: string
    idSelect?: string
    classNameSelect?: string
    onChange?: (valueInput: any) => void
    children: any
    onClick?: (valueInput: any) => void
    defaultValue?: string
    value?: string
    required?: boolean
  }
  
export default function Select (props: SelectProps) {
  return (
    <div className="flex flex-col mb-2 text-gray-700">
      <label className={`mb-2 font-light text-sm ${props.classNameLabel}`} htmlFor={props.idSelect}>
        {props.textLabel}
      </label>
      <select
        id = {props.idSelect}
        className = {`xl:w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white ${props.classNameSelect}`}
        onChange = { props.onChange }
        onClick = { props.onClick }
        children = {props.children}
        defaultValue = {props.defaultValue}
        value={ props.value }
        required={ props.required }
      />
    </div>
  )
}