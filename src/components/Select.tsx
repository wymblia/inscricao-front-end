interface SelectProps {
    name?: string
    textLabel?: string
    forLabel?: string
    classNameLabel?: string
    idSelect?: string
    classNameSelect?: string
    onChange?: (valueInput: any) => void
    children: any
  }
  
export default function Select (props: SelectProps) {
  return (
    <div className="flex flex-col mb-2">
      <label className={`mb-2 font-light text-sm ${props.classNameLabel}`} htmlFor={props.idSelect}>
        {props.textLabel}
      </label>
      <select
        id = {props.idSelect}
        className = {`h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white ${props.classNameSelect}`}
        onChange = { props.onChange }
        children = {props.children}
      />
    </div>
  )
}