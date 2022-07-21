interface ButtonProps {
  notice: any
}

export default function Button(props: ButtonProps) {
  return (
    <div className="flex flex-col mb-2">
      <a
        className="flex justify-center items-center h-7 w-32  py-auto mb-2 ml- border-2 border-blue-600 text-blue-600 hover:bg-grey-100 font-medium text-xs leading-tight uppercase rounded-xl shadow-lg ease-in-out transition duration-400"
        href={`https://inscricao.ftec.com.br/edital/${props.notice}`}
        title="Abrir o Edital"
        target="_blank"
      >
        Veja o Edital
      </a>
    </div>
  )
}
