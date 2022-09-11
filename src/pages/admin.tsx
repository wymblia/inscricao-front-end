import { Fragment } from "react"
import Input from "../components/Input"
import ButtonNext from "../components/ButtonNext"

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <div className="bg-[url('https://burst.shopifycdn.com/photos/three-grad-students-from-behind.jpg?width=925&format=pjpg&exif=1&iptc=1')] bg-cover bg-center">
        <div className="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-12 backdrop-blur-[5px]">
          <div className="max-w-md w-full space-y-8 bg-grey-200 p-6 rounded-xl bg-white/40">
            <div>
              {/* <img
                className="mx-auto h-auto w-auto"
                src="https://www.ftec.com.br/static/front_end/_images/geral/logos.png"
                alt="Workflow"
              /> */}
              <h1 className="mt-6 text-center text-4xl tracking-tight font-medium text-gray-900">
                LOGIN
              </h1>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="shadow-sm -space-y-px">
                <Input
                  placeholder="Usuário"
                  idInput="user"
                  typeInput="user"
                  name="user"
                  autocomplete="user"
                  className="w-full"
                  required
                />

                <Input
                  placeholder="Senha"
                  idInput="password"
                  typeInput="password"
                  name="password"
                  autocomplete="current-password"
                  className="w-full"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Lembrar
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="https://passport.ftec.com.br/esqueci-senha"
                    target="_blank"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Esqueci minha senha
                  </a>
                </div>
              </div>

              <div>
                {/* <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Acessar
              </button> */}
                <ButtonNext type="submit">Autenticar</ButtonNext>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default MyApp
