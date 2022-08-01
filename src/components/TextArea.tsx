interface TextAreaProps {
  textLabel?: string
  forLabel?: string
  idTextarea?: string
  valueTextArea?: string
  required?: boolean
  onChange?: (valueInput: any) => void
}

export default function Textarea(props: TextAreaProps) {
  return (
    <div className="flex flex-col mb-2 text-grey-700">
      <label className="mb-2 font-light text-sm" htmlFor={props.idTextarea}>
        {props.textLabel}
      </label>
      <textarea
        id={props.idTextarea}
        value={props.valueTextArea}
        onChange={(e) => props.onChange?.(e.target.value)}
        className="h-15 mb-2 border border-grey-300 rounded-2xl focus:outline-none bg-grey-50 px-4 py-2 focus:bg-white"
        required={props.required}
      />
    </div>
  )
}
