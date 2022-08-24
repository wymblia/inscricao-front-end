import InputMask from "react-input-mask"

interface InputProps {
  textLabel?: string
  name?: string
  placeholder?: string
  idInput?: string
  typeInput?: string
  valueInput?: string
  autocomplete?: string
  required?: boolean
  existsMask?: boolean
  mask?: string
  className?: string
  onChange?: (valueInput: any) => void
  onBlur?: (valueInput: any) => void
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col mb-2">
      <label
        className="mb-2 font-light text-sm text-grey-700 dark:text-grey-50"
        htmlFor={props.idInput}
      >
        {props.textLabel}
      </label>
      {props.existsMask ? (
        <InputMask
          className="w-[480px] h-10 mb-2 border border-grey-300 dark:border-grey-500 rounded-2xl focus:outline-none bg-grey-50 dark:bg-grey-700 px-4 py-2 focus:bg-white text-grey-700 dark:text-grey-50 focus:border-blue-300 dark:focus:border-blue-700 hover:border-blue-300 dark:hover:border-blue-700 dark:focus:bg-grey-600"
          id={props.idInput}
          type={props.typeInput}
          value={props.valueInput}
          onChange={(e) => props.onChange?.(e.target.value)}
          onBlur={props.onBlur}
          required={props.required}
          mask={props.mask}
        />
      ) : (
        <input
          className={`h-10 mb-2 border border-grey-300 dark:border-grey-500 rounded-2xl focus:outline-none bg-grey-50 dark:bg-grey-700 px-4 py-2 focus:bg-white text-grey-700 dark:text-grey-50 focus:border-blue-300 dark:focus:border-blue-700 hover:border-blue-300 dark:hover:border-blue-700 dark:focus:bg-grey-600 ${
            props.className ? props.className : "w-[480px]"
          }`}
          id={props.idInput}
          type={props.typeInput}
          value={props.valueInput}
          onChange={(e) => props.onChange?.(e.target.value)}
          onBlur={props.onBlur}
          required={props.required}
          placeholder={props.placeholder}
          autoComplete={props.autocomplete}
          name={props.name}
        />
      )}
    </div>
  )
}
