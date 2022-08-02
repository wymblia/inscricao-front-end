interface ButtonProps {
  value: string
  id: string
  name: string
  className?: string
  htmlFor: string
  label: string
  onClick?: (valueInput: any) => void
}

export default function Button(props: ButtonProps) {
  return (
    <ul className="justify-center">
      <li className="relative">
        <input
          className={props.className}
          type="radio"
          value={props.value}
          name={props.name}
          id={props.id}
          onClick={props.onClick}
        />
        <label
          className="flex py-auto flex-col mb-3 md:w-[153px] w-32 h-16 bg-white dark:bg-grey-700  border border-blue-600 rounded-xl cursor-pointer focus:outline-none hover:bg-grey-50 dark:hover:bg-grey-600  focus:shadow-2xl peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-2 font-medium justify-center items-center text-blue-600 dark:text-blue-300 text-xs uppercase transition duration-400"
          htmlFor={props.htmlFor}
        >
          {props.label}
        </label>
      </li>
    </ul>
  )
}
