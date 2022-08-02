interface SelectProps {
  textLabel?: string
  idSelect?: string
  value?: string
  children: any
  required?: boolean
  onChange?: (valueInput: any) => void
  onClick?: (valueInput: any) => void
}

export default function Select(props: SelectProps) {
  return (
    <div className="flex flex-col mb-2 text-grey-700 dark:text-grey-50">
      <label className="mb-2 font-light text-sm">{props.textLabel}</label>
      <select
        className="xl:min-w-[480px] max-w-[480px] h-10 mb-2 border border-grey-300 dark:border-grey-500  rounded-2xl focus:outline-none bg-grey-50 dark:bg-grey-700 dark:focus:bg-grey-700 px-4 py-2 focus:bg-white"
        id={props.idSelect}
        value={props.value}
        onChange={props.onChange}
        onClick={props.onClick}
        required={props.required}
        children={props.children}
      />
    </div>
  )
}
