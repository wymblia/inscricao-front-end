interface TextAreaProps {
  name?: string
  textLabel?: string
  forLabel?: string
  classNameLabel?: string
  idTextarea?: string
  valueTextarea?: any
  classNameInput?: string
}

export default function Textarea (props: TextAreaProps) {
  
  return (
    <div className="flex flex-col mb-2">
      <label className={`mb-2 font-light text-sm ${props.classNameLabel}`} htmlFor={props.idTextarea}>
        {props.textLabel}
      </label>
      <textarea
        id = {props.idTextarea}
        className = {`h-15 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white ${props.classNameInput}`}
      />
    </div>
  )
}
