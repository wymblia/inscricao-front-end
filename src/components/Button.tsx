interface ButtonProps {
  children: any
  onClick?: () => void
}

export default function Button ( props: ButtonProps ) {
  return (
    <button onClick={ props.onClick } className="bg-blue-500 text-white rounded-2xl p-3">
      {props.children}
    </button>
  )
}
