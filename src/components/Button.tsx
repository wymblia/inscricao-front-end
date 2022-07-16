interface ButtonProps {
  children: any
  onClick?: () => any
  type?: "submit"
}

export default function Button(props: ButtonProps) {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className="max-w-screen-sm bg-[#4B6BFB] shadow-md shadow-gray-300 text-white font-medium rounded-2xl p-3"
    >
      {props.children}
    </button>
  )
}
