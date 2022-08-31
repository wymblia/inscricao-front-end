import { Fragment, useState } from "react"
import Input from "../components/Input"
import ButtonNext from "../components/ButtonNext"

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("")
  const [userCpf, setUserCpf] = useState("")
  const [userEmail, setUserEmail] = useState("")

  return (
    <Fragment>
      <div className="flex justify-center items-center h-screen w-full bg-blue-400">
        <div className="w-2/4 bg-white rounded shadow-2xl p-8 m-4">
          <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
            Cadastro de usuário
          </h1>
          <form action="/" method="post">
            <div className="flex flex-col mb-4">
              <Input
                textLabel="Nome completo"
                idInput="username"
                typeInput="text"
                valueInput={username}
                onChange={setUsername}
                className="w-full"
                required
              />
              <Input
                textLabel="CPF"
                idInput="userCpf"
                typeInput="text"
                valueInput={userCpf}
                onChange={setUserCpf}
                className="w-full"
                existsMask={true}
                mask={"999.999.999-99"}
                required
              />
              <Input
                textLabel="E-mail"
                idInput="userEmail"
                typeInput="email"
                valueInput={userEmail}
                onChange={setUserEmail}
                className="w-full"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg text-gray-900" for="password">
                Password
              </label>
              <input
                className="border py-2 px-3 text-grey-800"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <button
              className="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
              type="submit"
            >
              Create Account
            </button>
          </form>
          <a
            className="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
            href="/login"
          >
            Already have an account?
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default MyApp
