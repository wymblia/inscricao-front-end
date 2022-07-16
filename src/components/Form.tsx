import { Fragment, useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Lead from "../core/Lead"
import Button from "./Button"
import Input from "./Input"
import { useRouter } from "next/router"
import InputMask from "react-input-mask"
import Select from "./Select"
import { api } from "../services/api"
interface FormProps {
  lead: Lead
  leadChange?: (lead: Lead) => any
}

export default function Form(props: FormProps) {
  const {
    socialName,
    setSocialName,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    switchShowSocialName,
    setSwitchShowSocialName,
    switchShowExternalConsultant,
    setSwitchShowExternalConsultant,
    setModality,
    setUnity,
    setSelectedCourse,
    setEntryForm,
    setSelectedEntranceExam,
    setShowCourseName,
    setShowModalityName,
    setFilialCourse,
    setEntryFormId,
    setCourseModality,
    setCourseShift,
    setCourseIdShift,
    setCourseMatrix,
    externalConsultant,
    setExternalConsultant
  } = useContext(RegistrationContext)

  const [consultantsOptionsList, setConsultantsOptionsList] = useState([])
  const [consultantsOptions, setConsultantsOptions] = useState([])

  const router = useRouter()
  let listConsultersArray = []
  if (router.query.completeName != undefined) {
    setCourseMatrix(String(router.query.courseMatrix))
    setCourseShift(String(router.query.courseShift))
    setCourseIdShift(String(router.query.idCourseShift))
    setCourseModality(String(router.query.modalidadeDescricao))
    setFilialCourse(String(router.query.courseFilial))
    setName(String(router.query.completeName))
    setEmail(String(router.query.email))
    setPhone(String(router.query.phone))
    setModality(String(router.query.modality))
    setUnity(String(router.query.unity))
    setSelectedCourse(String(router.query.course))
    setEntryForm(String(router.query.entryForm))
    setEntryFormId(String(router.query.entryFormId))
    setSelectedEntranceExam(String(router.query.selectedEntranceExam))
    setShowCourseName(String(router.query.showCourseName))
    setShowModalityName(String(router.query.showModalityName))
  }

  function firstAndLastNameValidation(e: any) {
    if (name.length >= 1) {
      if (!e.target.value.split(" ")[1])
        Swal.fire({
          icon: "warning",
          text: "Informe nome e sobrenome!"
        })
    }
  }

  function handleSwitchShowSocialName() {
    switchShowSocialName ? setSwitchShowSocialName(false) : setSwitchShowSocialName(true)
  }

  function handleSwitchShowExternalConsultant() {
    switchShowExternalConsultant
      ? (setSwitchShowExternalConsultant(false), setExternalConsultant(""))
      : setSwitchShowExternalConsultant(true)
  }

  useEffect(() => {
    getConsultants()
  }, [switchShowExternalConsultant])

  function getConsultants() {
    api.get("/get-consulters", {}).then((response) => {
      setConsultantsOptionsList(response.data)
    })
    fillConsultantsOptions()
  }

  function fillConsultantsOptions() {
    consultantsOptionsList
      ? (consultantsOptionsList.forEach((consulter) => {
          listConsultersArray.push({
            idConsultor: consulter.usuarioid,
            nomeConsultor: consulter.nome_completo
          })
        }),
        setConsultantsOptions(listConsultersArray))
      : null
  }

  function handleChosenExternalConsultant(e: any) {
    setExternalConsultant(e.target.value)
  }

  function FormSubmit(e: any) {
    e.preventDefault()
    props.leadChange?.(new Lead(name, email, phone))
  }

  return (
    <Fragment>
      <form onSubmit={FormSubmit} autoComplete="off" className="  mx-auto">
        <div className="flex justify-end -mb-4z text-sm">
          <div className="form-check form-switch">
            <input
              defaultChecked={switchShowSocialName}
              className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={handleSwitchShowSocialName}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexSwitchCheckDefault"
            >
              Utilizar um Nome Social
            </label>
          </div>
        </div>
        <div hidden={!switchShowSocialName}>
          <Input
            textLabel="Nome Social"
            typeInput="text"
            idInput="socialName"
            defaultValue={socialName}
            onChange={setSocialName}
          />
        </div>

        <div className="flex flex-col mb-2">
          <label className={`mb-2 font-light text-sm `} htmlFor="name">
            <p className="text-gray-700">Nome completo</p>
          </label>
          <input
            type="text"
            id="name"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={firstAndLastNameValidation}
            required={true}
            className="w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-2">
          <label className={`mb-2 font-light text-sm`} htmlFor="email">
            <p className="text-gray-700">E-mail</p>
          </label>
          <input
            type="email"
            id="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            className="w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white text-gray-700"
          />
        </div>

        <div className="flex flex-col mb-2">
          <label className={`mb-2 font-light text-sm`} htmlFor="phone">
            <p className="text-gray-700">Celular</p>
          </label>
          {router.query.phone ? (
            <input
              type="text"
              id="phone"
              defaultValue={phone}
              onChange={(e) => setPhone(e.target.value)}
              required={true}
              className="xl:w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white text-gray-700"
            />
          ) : (
            <InputMask
              mask="(99) 99999-9999"
              type="text"
              id="phone"
              defaultValue={phone}
              onChange={(e) => setPhone(e.target.value)}
              required={true}
              className="w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white text-gray-700"
            />
          )}
        </div>
        <div className="flex justify-start -mb-4z text-sm">
          <div className="form-check form-switch">
            <input
              className="form-check-input appearance-none w-9 -ml-8 mr-1 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefaultExternalConsultant"
              onClick={handleSwitchShowExternalConsultant}
              defaultChecked={switchShowExternalConsultant}
            />
            <label
              className="form-check-label inline-block text-gray-800 mb-4"
              htmlFor="flexSwitchCheckDefaultExternalConsultant"
            >
              Teve ajuda de consultor externo?
            </label>
          </div>
        </div>

        <div hidden={!switchShowExternalConsultant}>
          <Select
            textLabel="Consultor Comercial"
            onChange={(e) => setExternalConsultant(e.target.value)}
            value={externalConsultant}
            required={switchShowExternalConsultant}
          >
            <option value="">Selecione</option>
            {consultantsOptions.map((option, index) => (
              <option key={index} value={option.idConsultor}>
                {option.nomeConsultor}
              </option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col mt-12">
          <Button type="submit">Próximo</Button>
        </div>
      </form>
    </Fragment>
  )
}
