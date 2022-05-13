import { createContext, ReactNode, useState } from "react";

type RegistrationContextProps = {
  children: ReactNode
}

type UserContextType = {
  listOffer: any
  listConsulters: any

  name: string
  socialName: string
  visibleSocialName: boolean
  email: string
  phone: string
  appearanceSocialName: boolean

  setListOffer: (newState: string) => void 
  setListConsulters: (newState: string) => void 

  setName: (newState: string) => void 
  setSocialName: (newState: string) => void 
  setVisibleSocialName: (newState: boolean) => void 
  setemail: (newState: string) => void 
  setphone: (newState: string) => void 
  setAppearanceSocialName: (newState: boolean) => void 

  cpf: string
  birthDate: Date
  gender: string
  deficiency: string
  invisibleErrorCpf: boolean
  appearanceDeficiency: boolean
  appearanceSwitchDeficiency: boolean
  providence: string

  setCpf: (newState: string) => void
  setBirthDate: (newState: Date) => void
  setGender: (newState: string) => void
  setDeficiency: (newState: string) => void
  setInvisibleErrorCpf: (newState: boolean) => void
  setAppearanceDeficiency: (newState: boolean) => void
  setAppearanceSwitchDeficiency: (newState: boolean) => void
  setProvidence: (newState: string) => void

  cep: string
  state: string
  city: string
  district: string
  street: string
  number: string
  complement: string
  
  setCep: (newState: string) => void
  setState: (newState: string) => void
  setCity: (newState: string) => void
  setDistrict: (newState: string) => void
  setStreet: (newState: string) => void
  setNumber: (newState: string) => void
  setComplement: (newState: string) =>void

  modality: string
  unity: string
  entryForm: string
  yearEnem: string
  codeEnemAndEncceja: string
  objectiveTestGrade: string
  redactionTestGrade: string
  enemFile: any
  nameCourse: string
  selectedCourse: string
  showModalityName: string
  showUnityName: string
  showCourseName: string
  filialCourse: string
  turnoCourse: string
  turnoIdCourse: string
  matrizCourse: string
  modalidadeCourse: string
  selectedEnrollment: string
  idEntryForm: string
  externConsultant: string
  appearanceExternConsultant: boolean
  existsExternConsultant: boolean

  setModality: (newState: string) => void
  setUnity: (newState: string) => void
  setEntryForm: (newState: string) => void
  setYearEnem: (newState: string) => void
  setCodeEnemAndEncceja: (newState: string) => void
  setObjectiveTestGrade: (newState: string) => void
  setRedactionTestGrade: (newState: string) => void
  setEnemFile: (newState: any) => void
  setNameCourse: (newState: string) => void
  setSelectedCourse: (newState: string) => void
  setShowModalityName: (newState: string) => void
  setShowUnityName: (newState: string) => void
  setShowCourseName: (newState: string) => void
  setFilialCourse: (newState: string) => void
  setTurnoCourse: (newState: string) => void
  setTurnoIdCourse: (newState: string) => void
  setMatrizCourse: (newState: string) => void
  setModalidadeCourse: (newState: string) => void
  setSelectedEnrollment: (newState: string) => void
  setIdEntryForm: (newState: string) => void
  setExternConsultant: (newState: string) => void
  setAppearanceExternConsultant: (newState: boolean) => void
  setExistsExternConsultant: (newState: boolean) => void

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
  stepFiveVisible: boolean
  stepSixVisible: boolean
}

const initialValues = {
  listOffer: "",
  listConsulters: "",

  name: "",
  socialName: "",
  visibleSocialName: false,
  email: "",
  phone: "",
  appearanceSocialName: false,

  setListOffer: () => {},
  setListConsulters: () => {},
  
  setName: () => {},
  setSocialName: () => {},
  setVisibleSocialName: () => {},
  setemail: () => {},
  setphone: () => {},
  setAppearanceSocialName: () => {},

  cpf: "",
  birthDate: new Date('2000-01-01'),
  gender: "",
  deficiency: "",
  invisibleErrorCpf: true,
  appearanceDeficiency: false,
  appearanceSwitchDeficiency: true,
  providence: "",

  setCpf: () => {},
  setBirthDate: () => {},
  setGender: () => {},
  setDeficiency: () => {},
  setInvisibleErrorCpf: () => {},
  setAppearanceDeficiency: () => {},
  setAppearanceSwitchDeficiency: () => {},
  setProvidence: () => {},

  cep: "",
  state: "",
  city: "",
  district: "",
  street: "",
  number: "",
  complement: "",

  setCep: () => {},
  setState: () => {},
  setCity: () => {},
  setDistrict: () => {},
  setStreet: () => {},
  setNumber: () => {},
  setComplement: () => {},

  modality: "",
  unity: "",
  entryForm: "",
  yearEnem: null,
  codeEnemAndEncceja: null,
  objectiveTestGrade: null,
  redactionTestGrade: null,
  enemFile: null,
  nameCourse: "",
  selectedCourse: "",
  showModalityName: "",
  showUnityName: "",
  showCourseName: "",
  filialCourse: "",
  turnoCourse: "",
  turnoIdCourse: "",
  matrizCourse: "",
  modalidadeCourse: "",
  selectedEnrollment: "",
  idEntryForm: "",
  externConsultant: "",
  appearanceExternConsultant: false,
  existsExternConsultant: false,

  setModality: () => {},
  setUnity: () => {},
  setEntryForm: () => {},
  setYearEnem: () => {},
  setCodeEnemAndEncceja: () => {},
  setObjectiveTestGrade: () => {},
  setRedactionTestGrade: () => {},
  setEnemFile: () => {},
  setNameCourse: () => {},
  setSelectedCourse: () => {},
  setShowModalityName: () => {},
  setShowUnityName: () => {},
  setShowCourseName: () => {},
  setFilialCourse: () => {},
  setTurnoCourse: () => {},
  setTurnoIdCourse: () => {},
  setMatrizCourse: () => {},
  setModalidadeCourse: () => {},
  setSelectedEnrollment: () => {},
  setIdEntryForm: () => {},
  setExternConsultant: () => {},
  setAppearanceExternConsultant: () => {},
  setExistsExternConsultant: () => {},

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
  stepSixVisible: false

}

export const RegistrationContext = createContext<UserContextType>(initialValues)

export const RegistrationContextProvider = ({ children }: RegistrationContextProps) => {

  const [listOffer, setListOffer] = useState(initialValues.listOffer)
  const [listConsulters, setListConsulters] = useState(initialValues.listConsulters)

  const [name, setName] = useState(initialValues.name)
  const [socialName, setSocialName] = useState(initialValues.socialName)
  const [visibleSocialName, setVisibleSocialName] = useState(initialValues.visibleSocialName)
  const [email, setemail] = useState(initialValues.email)
  const [phone, setphone] = useState(initialValues.phone)
  const [appearanceSocialName, setAppearanceSocialName] = useState(initialValues.appearanceSocialName)

  const [cpf, setCpf] = useState(initialValues.cpf)
  const [birthDate, setBirthDate] = useState(initialValues.birthDate)
  const [gender, setGender] = useState(initialValues.gender)
  const [deficiency, setDeficiency] = useState(initialValues.deficiency)
  const [invisibleErrorCpf, setInvisibleErrorCpf] = useState(initialValues.invisibleErrorCpf)
  const [appearanceDeficiency, setAppearanceDeficiency] = useState(initialValues.appearanceDeficiency)
  const [appearanceSwitchDeficiency, setAppearanceSwitchDeficiency] = useState(initialValues.appearanceSwitchDeficiency)
  const [providence, setProvidence] = useState(initialValues.providence)

  const [cep, setCep] = useState(initialValues.cep)
  const [state, setState] = useState(initialValues.state)
  const [city, setCity] = useState(initialValues.city)
  const [district, setDistrict] = useState(initialValues.district)
  const [street, setStreet] = useState(initialValues.street)
  const [number, setNumber] = useState(initialValues.number)
  const [complement, setComplement] = useState(initialValues.number)

  const [modality, setModality] = useState(initialValues.modality)
  const [unity, setUnity] = useState(initialValues.unity)
  const [entryForm, setEntryForm] = useState(initialValues.entryForm)
  const [yearEnem, setYearEnem] = useState(initialValues.yearEnem)
  const [codeEnemAndEncceja, setCodeEnemAndEncceja] = useState(initialValues.codeEnemAndEncceja)
  const [objectiveTestGrade, setObjectiveTestGrade] = useState(initialValues.objectiveTestGrade)
  const [redactionTestGrade, setRedactionTestGrade] = useState(initialValues.redactionTestGrade)
  const [enemFile, setEnemFile] = useState(initialValues.enemFile)
  const [nameCourse, setNameCourse] = useState(initialValues.nameCourse)
  const [selectedCourse, setSelectedCourse] = useState(initialValues.selectedCourse)
  const [showModalityName, setShowModalityName] = useState(initialValues.showModalityName)
  const [showUnityName, setShowUnityName] = useState(initialValues.showUnityName)
  const [showCourseName, setShowCourseName] = useState(initialValues.showCourseName)
  const [filialCourse, setFilialCourse] = useState(initialValues.filialCourse)
  const [turnoCourse, setTurnoCourse] = useState(initialValues.turnoCourse)
  const [turnoIdCourse, setTurnoIdCourse] = useState(initialValues.turnoIdCourse)
  const [matrizCourse, setMatrizCourse] = useState(initialValues.matrizCourse)
  const [modalidadeCourse, setModalidadeCourse] = useState(initialValues.modalidadeCourse)
  const [selectedEnrollment, setSelectedEnrollment] = useState(initialValues.selectedEnrollment)
  const [idEntryForm, setIdEntryForm] = useState(initialValues.idEntryForm)
  const [externConsultant, setExternConsultant] = useState(initialValues.externConsultant) 
  const [appearanceExternConsultant, setAppearanceExternConsultant] = useState(initialValues.appearanceExternConsultant) 
  const [existsExternConsultant, setExistsExternConsultant] = useState(initialValues.existsExternConsultant) 

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
      listConsulters,

      name,
      socialName,
      visibleSocialName,
      email,
      phone,
      appearanceSocialName,

      setListOffer,
      setListConsulters,
      setName,
      setSocialName,
      setVisibleSocialName,
      setemail,
      setphone,
      setAppearanceSocialName,

      cpf,
      birthDate,
      gender,
      deficiency,
      appearanceDeficiency,
      appearanceSwitchDeficiency,
      providence,

      setCpf,
      setBirthDate,
      setGender,
      setDeficiency,
      setAppearanceDeficiency,
      setAppearanceSwitchDeficiency,
      setProvidence,
      
      cep,
      state,
      city,
      district,
      street,
      number,
      complement,
      invisibleErrorCpf,

      setCep,
      setState,
      setCity,
      setDistrict,
      setStreet,
      setNumber,
      setComplement,
      setInvisibleErrorCpf,

      modality,
      unity,
      entryForm,
      yearEnem,
      codeEnemAndEncceja,
      objectiveTestGrade,
      redactionTestGrade,
      enemFile,
      nameCourse,
      filialCourse,
      turnoCourse,
      turnoIdCourse,
      matrizCourse,
      modalidadeCourse,
      selectedEnrollment,
      idEntryForm,
      selectedCourse,
      showModalityName,
      showUnityName,
      showCourseName,
      externConsultant,
      appearanceExternConsultant,
      existsExternConsultant,
    
      setModality,
      setUnity,
      setEntryForm,
      setYearEnem,
      setCodeEnemAndEncceja,
      setObjectiveTestGrade,
      setRedactionTestGrade,
      setEnemFile,
      setNameCourse,
      setSelectedCourse,
      setShowModalityName,
      setShowUnityName,
      setShowCourseName,
      setFilialCourse,
      setTurnoCourse,
      setTurnoIdCourse,
      setMatrizCourse,
      setModalidadeCourse,
      setSelectedEnrollment,
      setIdEntryForm,
      setExternConsultant,
      setAppearanceExternConsultant,
      setExistsExternConsultant,

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
      stepSixVisible: visible === 'step6'

    }}>
      {children}
    </RegistrationContext.Provider>
  )
}
