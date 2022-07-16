interface ButtonBackProps {
  children: any
  onClick?: () => void
}

export default function Button(props: ButtonBackProps) {
  return (
    <button
      onClick={props.onClick}
      className="max-w-screen-sm bg-gray-400 shadow-md shadow-gray-300 text-white font-medium rounded-2xl p-3"
    >
      {props.children}
    </button>
  )
}
