interface TextAreaProps {
  textLabel?: string
  forLabel?: string
  classNameLabel?: string
  idTextarea?: string
  valueTextArea?: string
  classNameInput?: string
  onChange?: (valueInput: any) => void
  required?: boolean
}

export default function Textarea(props: TextAreaProps) {
  return (
    <div className="flex flex-col mb-2 text-gray-700">
      <label
        className={`mb-2 font-light text-sm ${props.classNameLabel}`}
        htmlFor={props.idTextarea}
      >
        {props.textLabel}
      </label>
      <textarea
        id={props.idTextarea}
        value={props.valueTextArea}
        onChange={(e) => props.onChange?.(e.target.value)}
        className={`h-15 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white ${props.classNameInput}`}
        required={props.required}
      />
    </div>
  )
}
