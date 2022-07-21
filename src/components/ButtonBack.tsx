interface ButtonBackProps {
  children: any
  onClick?: () => void
}

export default function Button(props: ButtonBackProps) {
  return (
    <button
      className="max-w-screen-sm bg-grey-400 shadow-md shadow-grey-300 text-white font-medium rounded-2xl p-3"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}
