import { createContext, ReactNode, useState } from "react"

type RegistrationContextProps = {
  children: ReactNode
}

type UserContextType = {
  offerList: any
  setOfferList: (newState: string) => void
  consultantsOptions: any
  setConsultantsOptions: (newState: string) => void

  name: string
  setName: (newState: string) => void
  setSocialName: (newState: string) => void
  socialName: string
  visibleSocialName: boolean
  setVisibleSocialName: (newState: boolean) => void
  email: string
  setEmail: (newState: string) => void
  phone: string
  setPhone: (newState: string) => void
  switchShowSocialName: boolean
  setSwitchShowSocialName: (newState: boolean) => void

  cpf: string
  setCpf: (newState: string) => void
  birthDate: Date
  setBirthDate: (newState: Date) => void
  gender: string
  setGender: (newState: string) => void
  switchShowDeficiency: boolean
  setSwitchShowDeficiency: (newState: boolean) => void
  disabilityRelief: string
  setDisabilityRelief: (newState: string) => void

  cep: string
  setCep: (newState: string) => void
  state: string
  setState: (newState: string) => void
  city: string
  setCity: (newState: string) => void
  district: string
  setDistrict: (newState: string) => void
  street: string
  setStreet: (newState: string) => void
  number: string
  setNumber: (newState: string) => void
  complement: string
  setComplement: (newState: string) => void

  modality: string
  setModality: (newState: string) => void
  unity: string
  setUnity: (newState: string) => void
  entryForm: string
  setEntryForm: (newState: string) => void
  yearEnem: string
  setYearEnem: (newState: string) => void
  codeEnemAndEncceja: string
  setCodeEnemAndEncceja: (newState: string) => void
  objectiveTestGrade: string
  setObjectiveTestGrade: (newState: string) => void
  redactionTestGrade: string
  setRedactionTestGrade: (newState: string) => void
  enemFile: any
  setEnemFile: (newState: any) => void
  nameCourse: string
  setNameCourse: (newState: string) => void
  selectedCourse: string
  setSelectedCourse: (newState: string) => void
  showModalityName: string
  setShowModalityName: (newState: string) => void
  showUnityName: string
  setShowUnityName: (newState: string) => void
  showCourseName: string
  setShowCourseName: (newState: string) => void
  filialCourse: string
  setFilialCourse: (newState: string) => void
  courseShift: string
  setCourseShift: (newState: string) => void
  courseIdShift: string
  setCourseIdShift: (newState: string) => void
  courseMatrix: string
  setCourseMatrix: (newState: string) => void
  courseModality: string
  setCourseModality: (newState: string) => void
  selectedEntranceExam: string
  setSelectedEntranceExam: (newState: string) => void
  entryFormId: string
  setEntryFormId: (newState: string) => void
  externalConsultant: string
  setExternalConsultant: (newState: string) => void
  switchShowExternalConsultant: boolean
  setSwitchShowExternalConsultant: (newState: boolean) => void

  displayStep1: (newState: void) => void
  displayStep2: (newState: void) => void
  displayStep3: (newState: void) => void
  displayStep4: (newState: void) => void
  displayStep5: (newState: void) => void
  displayStep6: (newState: void) => void
  displayStep7: (newState: void) => void

  stepOneVisible: boolean
  stepTwoVisible: boolean
  stepThreeVisible: boolean
  stepFourVisible: boolean
  stepFiveVisible: boolean
  stepSixVisible: boolean
  stepSevenVisible: boolean
}

export const RegistrationContext = createContext<UserContextType>({} as UserContextType)

export const RegistrationContextProvider = ({ children }: RegistrationContextProps) => {
  const [offerList, setOfferList] = useState("")
  const [consultantsOptions, setConsultantsOptions] = useState("")

  const [name, setName] = useState("")
  const [socialName, setSocialName] = useState("")
  const [visibleSocialName, setVisibleSocialName] = useState(false)
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [switchShowSocialName, setSwitchShowSocialName] = useState(false)

  const [cpf, setCpf] = useState("")
  const [birthDate, setBirthDate] = useState(new Date("2000-01-01"))
  const [gender, setGender] = useState("")
  const [switchShowDeficiency, setSwitchShowDeficiency] = useState(false)
  const [disabilityRelief, setDisabilityRelief] = useState("")

  const [cep, setCep] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [district, setDistrict] = useState("")
  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [complement, setComplement] = useState("")

  const [modality, setModality] = useState("")
  const [unity, setUnity] = useState("")
  const [entryForm, setEntryForm] = useState("")
  const [yearEnem, setYearEnem] = useState(null)
  const [codeEnemAndEncceja, setCodeEnemAndEncceja] = useState(null)
  const [objectiveTestGrade, setObjectiveTestGrade] = useState(null)
  const [redactionTestGrade, setRedactionTestGrade] = useState(null)
  const [enemFile, setEnemFile] = useState(null)
  const [nameCourse, setNameCourse] = useState("")
  const [selectedCourse, setSelectedCourse] = useState("")
  const [showModalityName, setShowModalityName] = useState("")
  const [showUnityName, setShowUnityName] = useState("")
  const [showCourseName, setShowCourseName] = useState("")
  const [filialCourse, setFilialCourse] = useState("")
  const [courseShift, setCourseShift] = useState("")
  const [courseIdShift, setCourseIdShift] = useState("")
  const [courseMatrix, setCourseMatrix] = useState("")
  const [courseModality, setCourseModality] = useState("")
  const [selectedEntranceExam, setSelectedEntranceExam] = useState("")
  const [entryFormId, setEntryFormId] = useState("")
  const [externalConsultant, setExternalConsultant] = useState("")
  const [switchShowExternalConsultant, setSwitchShowExternalConsultant] = useState(false)

  const [visible, setVisible] = useState<
    "step1" | "step2" | "step3" | "step4" | "step5" | "step6" | "step7"
  >("step1")

  const displayStep1 = () => setVisible("step1")
  const displayStep2 = () => setVisible("step2")
  const displayStep3 = () => setVisible("step3")
  const displayStep4 = () => setVisible("step4")
  const displayStep5 = () => setVisible("step5")
  const displayStep6 = () => setVisible("step6")
  const displayStep7 = () => setVisible("step7")

  return (
    <RegistrationContext.Provider
      value={{
        offerList,
        setOfferList,
        consultantsOptions,
        setConsultantsOptions,

        name,
        setName,
        socialName,
        setSocialName,
        visibleSocialName,
        setVisibleSocialName,
        email,
        setEmail,
        phone,
        setPhone,
        switchShowSocialName,
        setSwitchShowSocialName,

        cpf,
        setCpf,
        birthDate,
        setBirthDate,
        gender,
        setGender,
        switchShowDeficiency,
        setSwitchShowDeficiency,
        disabilityRelief,
        setDisabilityRelief,

        cep,
        setCep,
        state,
        setState,
        city,
        setCity,
        district,
        setDistrict,
        street,
        setStreet,
        number,
        setNumber,
        complement,
        setComplement,

        modality,
        setModality,
        unity,
        setUnity,
        entryForm,
        setEntryForm,
        yearEnem,
        setYearEnem,
        codeEnemAndEncceja,
        setCodeEnemAndEncceja,
        objectiveTestGrade,
        setObjectiveTestGrade,
        redactionTestGrade,
        setRedactionTestGrade,
        enemFile,
        setEnemFile,
        nameCourse,
        setNameCourse,
        filialCourse,
        setFilialCourse,
        courseShift,
        setCourseShift,
        courseIdShift,
        setCourseIdShift,
        courseMatrix,
        setCourseMatrix,
        courseModality,
        setCourseModality,
        selectedCourse,
        setSelectedCourse,
        selectedEntranceExam,
        setSelectedEntranceExam,
        entryFormId,
        setEntryFormId,
        showModalityName,
        setShowModalityName,
        showUnityName,
        setShowUnityName,
        showCourseName,
        setShowCourseName,
        externalConsultant,
        setExternalConsultant,
        switchShowExternalConsultant,
        setSwitchShowExternalConsultant,

        displayStep1,
        displayStep2,
        displayStep3,
        displayStep4,
        displayStep5,
        displayStep6,
        displayStep7,

        stepOneVisible: visible === "step1",
        stepTwoVisible: visible === "step2",
        stepThreeVisible: visible === "step3",
        stepFourVisible: visible === "step4",
        stepFiveVisible: visible === "step5",
        stepSixVisible: visible === "step6",
        stepSevenVisible: visible === "step7"
      }}
    >
      {children}
    </RegistrationContext.Provider>
  )
}
