import { RegistrationContextProvider } from '../contexts/RegistrationContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <RegistrationContextProvider>
    <Component {...pageProps} />
  </RegistrationContextProvider>
  )
}

export default MyApp
