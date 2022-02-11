import { createContext, ReactNode, useState } from "react";

type RegistrationContextProps = {
  children: ReactNode
}

type UserContextType = {
  name: string
  email: string
  phone: string
  visibleSocialName: boolean,

  setName: (newState: string) => void 
  setemail: (newState: string) => void 
  setphone: (newState: string) => void 
  setvisibleSocialName: (newState: boolean) => void 
  
  displayStep1: (newState: void) => void 
  displayStep2: (newState: void) => void 
  displayStep3: (newState: void) => void 
  displayStep4: (newState: void) => void

  stepOneVisible: boolean,
  stepTwoVisible: boolean,
  stepThreeVisible: boolean,
  stepFourVisible: boolean,
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  visibleSocialName: false,

  setName: () => {},
  setemail: () => {},
  setphone: () => {}, 
  setvisibleSocialName: () => {},

  displayStep1: () => {},
  displayStep2: () => {},
  displayStep3: () => {},
  displayStep4: () => {},

  stepOneVisible: false,
  stepTwoVisible: false,
  stepThreeVisible: false,
  stepFourVisible: false,
}

export const RegistrationContext = createContext<UserContextType>(initialValues)

export const RegistrationContextProvider = ({ children }: RegistrationContextProps) => {

  const [name, setName] = useState(initialValues.name)
  const [email, setemail] = useState(initialValues.email)
  const [phone, setphone] = useState(initialValues.phone)
  const [visibleSocialName, setvisibleSocialName] = useState(initialValues.visibleSocialName)

  const [visible, setVisible] = useState<'step1' | 'step2' | 'step3' | 'step4'>('step1')

  const displayStep1 = () => setVisible('step1')
  const displayStep2 = () => setVisible('step2')
  const displayStep3 = () => setVisible('step3')
  const displayStep4 = () => setVisible('step4')

  return(
    <RegistrationContext.Provider value={{
      name, 
      email,
      phone,
      visibleSocialName,

      setName,
      setemail,
      setphone,
      setvisibleSocialName,

      displayStep1,
      displayStep2,
      displayStep3,
      displayStep4,
      
      stepOneVisible: visible === 'step1',
      stepTwoVisible: visible === 'step2',
      stepThreeVisible: visible === 'step3',
      stepFourVisible: visible === 'step4',
    }}>
      {children}
    </RegistrationContext.Provider>
  )
}
