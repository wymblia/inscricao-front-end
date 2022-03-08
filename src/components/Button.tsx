interface ButtonProps {
  children: any
  onClick?: () => void
}

export default function Button ( props: ButtonProps ) {
  return (
    <button onClick={ props.onClick } className="bg-[#284fac] shadow-md shadow-gray-300 text-white font-medium rounded-2xl p-3">
      {props.children}
    </button>
  )
}
