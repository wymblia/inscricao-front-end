import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Swal from "sweetalert2";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Lead from "../core/Lead";
import Button from "./Button";
import Input from "./Input";
import { useRouter } from 'next/router';
import InputMask from "react-input-mask"
import Select from "./Select";
import { api } from "../services/api"
import useCourse from "../hooks/useCourseResume";

interface FormProps {
  lead: Lead
  leadChange?: (lead: Lead) => any
}

export default function Form(props: FormProps) {

  const { socialName, name, email, phone, setSocialName, setName, setemail, setphone, appearanceSocialName, setAppearanceSocialName, setModality, setUnity, setSelectedCourse, setEntryForm, setSelectedEnrollment, setShowCourseName, setShowModalityName, setFilialCourse, setIdEntryForm, setModalidadeCourse, setTurnoCourse, setTurnoIdCourse, setMatrizCourse, externConsultant, setExternConsultant, appearanceExternConsultant, setAppearanceExternConsultant, listConsulters, setListConsulters, existsExternConsultant, setExistsExternConsultant } = useContext(RegistrationContext)
  const [listConsultersOptions, setListConsultersOptions] = useState([])
  const router = useRouter()

  let listConsultersArray = []

  if (router.query.completeName != undefined) {
    setMatrizCourse(String(router.query.matrizCourse))
    setTurnoCourse(String(router.query.turnoCourse))
    setTurnoIdCourse(String(router.query.idTurnoCourse))
    setModalidadeCourse(String(router.query.modalidadeDescricao))
    setFilialCourse(String(router.query.courseFilial))
    setName(String(router.query.completeName))
    setemail(String(router.query.email))
    setphone(String(router.query.phone))
    setModality(String(router.query.modality))
    setUnity(String(router.query.unity))
    setSelectedCourse(String(router.query.course))
    setEntryForm(String(router.query.entryForm))
    setIdEntryForm(String(router.query.idEntryForm))
    setSelectedEnrollment(String(router.query.selectedEnrollment))
    setShowCourseName(String(router.query.showCourseName))
    setShowModalityName(String(router.query.showModalityName))
  }

  function setAppearanceSocialNameFunction() {
    appearanceSocialName ? setAppearanceSocialName(false) : setAppearanceSocialName(true)
  }

  function FormSubmit(e: any) {
    e.preventDefault();
    props.leadChange?.(new Lead(name, email, phone))
  }

  function ValidateFirstAndLastName(e: any) {
    if (!e.target.value.split(' ')[1])
      Swal.fire({
        icon: 'error',
        text: 'Informe nome e sobrenome!'
      })
  }


  function functionSetAppearanceExternConsultant(e: any) {
    appearanceExternConsultant ? setAppearanceExternConsultant(false) : setAppearanceExternConsultant(true)
    existsExternConsultant ? setExistsExternConsultant(false) : setExistsExternConsultant(true)
    setExternConsultant("")
  }

  useEffect(() => {
    getConsulters()
  },
  [appearanceExternConsultant])

  function getConsulters() {
    api.get('/get-consulters', {
    })
    .then (response => {
      setListConsulters(response.data)
    })
    setListConsultersOptionsFunction()
  }

  function setListConsultersOptionsFunction() {

    listConsulters ? (
      listConsulters.forEach(consulter => {
        listConsultersArray.push({
          idConsultor: consulter.usuarioid,
          nomeConsultor: consulter.nome_completo
        })
      }),

      setListConsultersOptions(listConsultersArray)

      ) : null
  }

  function setExternConsultantFunction(e: any) {
    if (existsExternConsultant) {
      setExternConsultant(e.target.value)
    } else {
      setExternConsultant("")
    }
  }

  return (
    <div>
      <form onSubmit={FormSubmit} autoComplete="off" className="  mx-auto">
        <div className="flex justify-end -mb-4z text-sm">
          <div className="form-check form-switch">
            <input defaultChecked={appearanceSocialName} className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={setAppearanceSocialNameFunction} />
            <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault">Utilizar um Nome Social</label>
          </div>
        </div>
        <div hidden={!appearanceSocialName}>
          <Input textLabel="Nome Social" typeInput="text" idInput="socialName" defaultValue={socialName} onChange={setSocialName} />
        </div>

        <div className="flex flex-col mb-2">
          <label className={`mb-2 font-light text-sm `} htmlFor="name">
            <p className="text-gray-700">Nome completo</p>
          </label>
          <input type="text" id="name" defaultValue={name} onChange={(e) => setName(e.target.value)} onBlur={ValidateFirstAndLastName} required={true} className='w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white text-gray-700' />
        </div>

        <div className="flex flex-col mb-2">
          <label className={`mb-2 font-light text-sm`} htmlFor="email">
            <p className="text-gray-700">E-mail</p>
          </label>
          <input type="email" id="email" defaultValue={email} onChange={(e) => setemail(e.target.value)} required={true} className='w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white text-gray-700' />
        </div>

        <div className="flex flex-col mb-2">
          <label className={`mb-2 font-light text-sm`} htmlFor='phone'>
            <p className="text-gray-700">Celular</p>
          </label>
          {router.query.phone ?
            <input type="text" id="phone" defaultValue={phone} onChange={(e) => setphone(e.target.value)} required={true} className='xl:w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white text-gray-700' />
            :
            <InputMask mask="(99) 99999-9999" type="text" id="phone" defaultValue={phone} onChange={(e) => setphone(e.target.value)} required={true} className='w-[480px] h-10 mb-2 border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white text-gray-700' />
          }
        </div>

        <div className="form-check form-switch">
          <input className="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault2" onClick={functionSetAppearanceExternConsultant} defaultChecked={appearanceExternConsultant} />
          <label className="form-check-label inline-block text-gray-800" htmlFor="flexSwitchCheckDefault2" defaultChecked={appearanceExternConsultant}>Teve ajuda de consultor externo?</label>
        </div>

        <div hidden={!appearanceExternConsultant}>
          <Select textLabel="Consultor Comercial" onChange={setExternConsultantFunction} value={externConsultant} required={appearanceExternConsultant}>
            <option value="">Selecione</option>
            {listConsultersOptions.map((option, index) => (
              <option key={index} value={option.idConsultor}>{option.nomeConsultor}</option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col mt-12">
          <Button type="submit">Próximo</Button>
        </div>
      </form>
    </div>
  )
}