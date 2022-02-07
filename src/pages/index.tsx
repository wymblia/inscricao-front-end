import Input from "../components/Input"

export default function Home() {

  return (
    <div id="container" className="flex flex-col">
      <div id="main" className="flex flex-col md:flex-row flex-grow">
        <div className="flex-grow">
          <div className="h-32 bg-[url('/img/mobile.jpg')] block md:hidden" />
          <div className="md:h-screen bg-[url('/img/desktop.jpg')] hidden md:block" />
        </div>
        <div className="p-4 bg-gray-100 flex-grow">
          <div className="flex justify-center items-center md:h-screen">
            <div className="flex-row">
              <button className="bg-gray-400 text-white px-28 py-4 rounded-2xl mb-4">
                Curso outras regras
              </button>
              <div className="flex justify-center items-center">
                <h1 className="text-2xl font-light m-10 text-cyan-900">Vestibular Uniftec</h1>
              </div>
              <Input textLabel="Nome" typeInput="text" idInput="name" />
              <Input textLabel="E-mail" typeInput="text" idInput="email" />
              <Input textLabel="Telefone" typeInput="text" idInput="phone" />
              <div className="flex flex-col mt-12">
                <button className="bg-blue-500 text-white rounded-2xl p-3">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
