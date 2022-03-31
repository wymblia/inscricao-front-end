import { createContext, ReactNode, useState } from "react";

type RegistrationContextProps = {
  children: ReactNode
}

type UserContextType = {
  listOffer: any

  name: string
  socialName: string
  visibleSocialName: boolean
  email: string
  phone: string
  formaIngresso: string

  setListOffer: (newState: string) => void 

  setName: (newState: string) => void 
  setSocialName: (newState: string) => void 
  setvisibleSocialName: (newState: boolean) => void 
  setemail: (newState: string) => void 
  setphone: (newState: string) => void 
  setFormaIngresso: (newState: string) => void 

  cpf: string
  birthDate: Date
  deficiency: string
  invisibleErrorCpf: boolean

  setCpf: (newState: string) => void
  setBirthDate: (newState: Date) => void
  setDeficiency: (newState: string) => void
  setInvisibleErrorCpf: (newState: boolean) => void

  cep: string
  state: string
  city: string
  district: string
  street: string
  number: string
  
  setCep: (newState: string) => void
  setState: (newState: string) => void
  setCity: (newState: string) => void
  setDistrict: (newState: string) => void
  setStreet: (newState: string) => void
  setNumber: (newState: string) => void

  modality: string
  unity: string
  entryForm: string
  yearEnem: string
  nameCourse: string

  setModality: (newState: string) => void
  setUnity: (newState: string) => void
  setEntryForm: (newState: string) => void
  setYearEnem: (newState: string) => void
  setNameCourse: (newState: string) => void


  displayStep1: (newState: void) => void 
  displayStep2: (newState: void) => void 
  displayStep3: (newState: void) => void 
  displayStep4: (newState: void) => void
  displayStep5: (newState: void) => void
  displayStep6: (newState: void) => void

  stepOneVisible: boolean,
  stepTwoVisible: boolean,
  stepThreeVisible: boolean,
  stepFourVisible: boolean,
  stepFiveVisible: boolean,
  stepSixVisible: boolean,
}

const initialValues = {
  listOffer: "",

  name: "",
  socialName: "",
  visibleSocialName: false,
  email: "",
  phone: "",
  formaIngresso: "",

  setListOffer: () => {},
  
  setName: () => {},
  setSocialName: () => {},
  setvisibleSocialName: () => {},
  setemail: () => {},
  setphone: () => {}, 
  setFormaIngresso: () => {},

  cpf: "",
  birthDate: new Date('2000-01-01T12:00:00'),
  deficiency: "",
  invisibleErrorCpf: true,

  setCpf: () => {},
  setBirthDate: () => {},
  setDeficiency: () => {},
  setInvisibleErrorCpf: () => {},

  cep: "",
  state: "",
  city: "",
  district: "",
  street: "",
  number: "",

  setCep: () => {},
  setState: () => {},
  setCity: () => {},
  setDistrict: () => {},
  setStreet: () => {},
  setNumber: () => {},

  modality: "",
  unity: "",
  entryForm: "",
  yearEnem: "",
  nameCourse: "",

  setModality: () => {},
  setUnity: () => {},
  setEntryForm: () => {},
  setYearEnem: () => {},
  setNameCourse: () => {},


  displayStep1: () => {},
  displayStep2: () => {},
  displayStep3: () => {},
  displayStep4: () => {},
  displayStep5: () => {},
  displayStep6: () => {},

  stepOneVisible: false,
  stepTwoVisible: false,
  stepThreeVisible: false,
  stepFourVisible: false,
  stepFiveVisible: false,
  stepSixVisible: false,
}

export const RegistrationContext = createContext<UserContextType>(initialValues)

export const RegistrationContextProvider = ({ children }: RegistrationContextProps) => {

  const [listOffer, setListOffer] = useState(initialValues.listOffer)

  const [name, setName] = useState(initialValues.name)
  const [socialName, setSocialName] = useState(initialValues.socialName)
  const [visibleSocialName, setvisibleSocialName] = useState(initialValues.visibleSocialName)
  const [email, setemail] = useState(initialValues.email)
  const [phone, setphone] = useState(initialValues.phone)
  const [formaIngresso, setFormaIngresso] = useState(initialValues.formaIngresso)

  const [cpf, setCpf] = useState(initialValues.cpf)
  const [birthDate, setBirthDate] = useState(initialValues.birthDate)
  const [deficiency, setDeficiency] = useState(initialValues.deficiency)
  const [invisibleErrorCpf, setInvisibleErrorCpf] = useState(initialValues.invisibleErrorCpf)

  const [cep, setCep] = useState(initialValues.cep)
  const [state, setState] = useState(initialValues.state)
  const [city, setCity] = useState(initialValues.city)
  const [district, setDistrict] = useState(initialValues.district)
  const [street, setStreet] = useState(initialValues.street)
  const [number, setNumber] = useState(initialValues.number)

  const [modality, setModality] = useState(initialValues.modality)
  const [unity, setUnity] = useState(initialValues.unity)
  const [entryForm, setEntryForm] = useState(initialValues.entryForm)
  const [yearEnem, setYearEnem] = useState(initialValues.yearEnem)
  const [nameCourse, setNameCourse] = useState(initialValues.nameCourse)





  const [visible, setVisible] = useState<'step1' | 'step2' | 'step3' | 'step4' | 'step5' | 'step6'>('step1')

  const displayStep1 = () => setVisible('step1')
  const displayStep2 = () => setVisible('step2')
  const displayStep3 = () => setVisible('step3')
  const displayStep4 = () => setVisible('step4')
  const displayStep5 = () => setVisible('step5')
  const displayStep6 = () => setVisible('step6')

  return(
    <RegistrationContext.Provider value={{
      listOffer,

      name,
      socialName,
      email,
      phone,
      visibleSocialName,
      formaIngresso,

      setListOffer,
      setName,
      setSocialName,
      setemail,
      setphone,
      setvisibleSocialName,
      setFormaIngresso,

      cpf,
      birthDate,
      deficiency,

      setCpf,
      setBirthDate,
      setDeficiency,
      
      cep,
      state,
      city,
      district,
      street,
      number,
      invisibleErrorCpf,

      setCep,
      setState,
      setCity,
      setDistrict,
      setStreet,
      setNumber,
      setInvisibleErrorCpf,

      modality,
      unity,
      entryForm,
      yearEnem,
      nameCourse,
    
      setModality,
      setUnity,
      setEntryForm,
      setYearEnem,
      setNameCourse,

      displayStep1,
      displayStep2,
      displayStep3,
      displayStep4,
      displayStep5,
      displayStep6,
      
      stepOneVisible: visible === 'step1',
      stepTwoVisible: visible === 'step2',
      stepThreeVisible: visible === 'step3',
      stepFourVisible: visible === 'step4',
      stepFiveVisible: visible === 'step5',
      stepSixVisible: visible === 'step6',

    }}>
      {children}
    </RegistrationContext.Provider>
  )
}
