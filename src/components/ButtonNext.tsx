interface ButtonProps {
  children: any
  type?: "submit"
  onClick?: () => any
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="max-w-screen-sm bg-[#4B6BFB] shadow-md shadow-grey-300 dark:shadow-grey-900 text-grey-50 font-medium rounded-2xl p-3"
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
