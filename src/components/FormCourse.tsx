import React, { useContext, useEffect, useState } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Course from "../core/Course";
import useCourse from "../hooks/useCourse";
import { api } from "../services/api";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import ButtonOptions from "./ButtonOptions";
import Input from "./Input";
import InputFile from "./InputFile";

import Select from "./Select";

interface CourseProps {
  course: Course
  courseChange?: (course: Course) => void
  backPage?: () => void
}

export default function FormCourse(props: CourseProps) {
  const { modality, setModality, unity, setUnity, entryForm, setEntryForm, yearEnem, setYearEnem, codeEnemAndEncceja, setCodeEnemAndEncceja, objectiveTestGrade, setObjectiveTestGrade, redactionTestGrade, setRedactionTestGrade, nameCourse, selectedCourse, setSelectedCourse, setShowCourseName, setShowModalityName, setFilialCourse, setTurnoCourse, setTurnoIdCourse, setMatrizCourse, setModalidadeCourse, selectedEnrollment,setSelectedEnrollment, setIdEntryForm, enemFile, setEnemFile, cpf} = useContext(RegistrationContext)
  const { listOffer } = useCourse()

  const [coursesOptions, setCoursesOptions] = useState([])
  const [unityOptions, setUnityOptions] = useState([])
  const [listVestibular, setListVestibular] = useState([])
  const [arquivoEnem, setArquivoEnem] = useState([])

  let unityOptionsArray = []
  let coursesOptionsArray = []

  const entryFormsOptions = [
    {
      label: "Vestibular",
      value: "vestibular",
      idFormFtec: 1
    },
    {
      label: "Enem/Encceja",
      value: "enem-encceja",
      idFormFtec: 2
    },
    {
      label: "Transferência",
      value: "transferencia",
      idFormFtec: 1
    },
    {
      label: "Reingresso",
      value: "reingresso",
      idFormFtec: 1
    },
    {
      label: "Segunda Graduação",
      value: "segunda-graduacao",
      idFormFtec: 1
    }
  ]

  function unityForModality() {

    listOffer.forEach(unity => {

      if (unity.MODALIDADE === modality) {

        let exists = unityOptionsArray.find(value => value.label === unity.UNIDADE)

        if (!exists) {
          unityOptionsArray.push({
            label: unity['UNIDADE'],
            value: unity['UNIDADE']
          })
        }
      }

    })

    setUnityOptions(unityOptionsArray)
  }

  useEffect(() => {
    unityForModality()
  }, [modality]);

  function courseForModalityAndUnity() {
    listOffer.forEach(course => {

      if (course.MODALIDADE === modality && course.UNIDADE === unity) {
        coursesOptionsArray.push({
          label: course['CURSO'],
          value: course['CURSO_ID']
        })
      }
    })

    setCoursesOptions(coursesOptionsArray)

  }

  useEffect(() => {
    courseForModalityAndUnity()
  }, [unity])

  function UnityFunction(e) {
    setSelectedCourse('')
    setUnity(e.target.value)
  }

  function EntryFormsFunction(e: any) {
    setSelectedEnrollment('')
    setEntryForm(e.target.value)

    if(e.target.value != 'enem-encceja') {
      setYearEnem("")
      setCodeEnemAndEncceja("")
      setObjectiveTestGrade("")
      setRedactionTestGrade("")
    }

    if(e.target.value === 'enem-encceja') {
      setIdEntryForm('2')
    } else {
      setIdEntryForm('1')
    }

    if(e.target.value === 'enem-encceja') {
      setListVestibular(listVestibular.filter(value => value.permitir_nota_enem === '1'))
    } else if(e.target.value === 'transferencia' || e.target.value === 'reingresso') {
      setListVestibular(listVestibular.filter(value => value.descricao.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes('transferencia')))
    } else {
      vestibularFunction()
    }

  }

  function CoursesFunction(e: any) {
    setEntryForm('')
    setSelectedEnrollment('')
    let curseSelected = listOffer.find(value => value.CURSO_ID === e.target.value)
    setModalidadeCourse(curseSelected.MODALIDADE_DESCRICAO)
    setFilialCourse(curseSelected.FILIAL)
    setTurnoCourse(curseSelected.TURNO)
    setTurnoIdCourse(curseSelected.TURNO_ID)
    setMatrizCourse(curseSelected.MATRIZ_APLICADA)
    setShowCourseName(curseSelected.DESCRICAO_INSCRICAO)
    setSelectedCourse(e.target.value)
  }

  function vestibularFunction() {
    let vestibulares = listOffer.find(value => value.CURSO_ID === selectedCourse)

    if (vestibulares) {
      setListVestibular(vestibulares.VESTIBULARES)
    }
  }

  useEffect(() => {
    vestibularFunction()
  }, [selectedCourse])

  function setSelectedEnrollmentFunction(e: any) {
    setSelectedEnrollment(e.target.value)
  }

  function modalityFunction(e: any) {

    setUnity('')
    setSelectedCourse('')
    setEntryForm('')
    setSelectedEnrollment('')

    var btn = document.querySelectorAll(".entry-modality")

    btn.forEach(function(button) {
      button.classList.remove("bg-[#284fac]")
      button.classList.remove("text-slate-50")
    });

    
    let classes = e.target.className
    let teste = classes + ' bg-[#284fac] text-slate-50'
    e.target.className = teste
    
    setModality(e.target.value)
    setShowModalityName(e.target.innerHTML)
  }
  
  function FormSubmit(e: any) {
    e.preventDefault();
    props.courseChange?.(new Course(modality, unity, entryForm, yearEnem, nameCourse))
  }

  async function fileValidation(e: any) {

    if(((e.size / 1024) / 1024) <= 2) {
      const formData = new FormData()
      formData.append('fileEnem', e)
      formData.append('cpf', cpf)

      await api.post('/upload-enem',formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

    } else {
      alert('Arquivo muito grande! Limite máximo 2MB')
    }

  }

  return (
    <div>
      <form onSubmit={FormSubmit}>
        <div id="modality">
          <label className="font-light text-sm">Modalidade</label>
          <div className="flex mt-2 space-x-2 justify-center">
            <ButtonOptions classNameButton="entry-modality" value="S" onClick={modalityFunction}>Semipresencial</ButtonOptions>
            <ButtonOptions classNameButton="entry-modality" value="P" onClick={modalityFunction}>Presencial</ButtonOptions>
            <ButtonOptions classNameButton="entry-modality" value="E" onClick={modalityFunction}>EAD</ButtonOptions>
          </div>
        </div>

        <Select textLabel="Unidade/Polo" onChange={UnityFunction} value={unity} required={true}>
          <option disabled value="">Selecione</option>
          {unityOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </Select>

        <Select textLabel="Curso" onChange={CoursesFunction} value={selectedCourse} required={true}>
          <option disabled value="">Selecione</option>
          {coursesOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </Select>

        <Select textLabel="Forma de Ingresso" onChange={EntryFormsFunction} value={entryForm} required={true}>
          <option disabled value="">Selecione</option>
          {entryFormsOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </Select>

        <Select textLabel="Processo seletivo" onChange={setSelectedEnrollmentFunction} value={selectedEnrollment} required={true}>
          <option disabled value="">Selecione</option>
          {listVestibular.map((option, index) => (
            <option key={index} value={option.id} >{option.descricao}</option>
          ))}
        </Select>

        <div hidden={entryForm != 'enem-encceja'}>

        <div className="mb-2 font-light text-sm ">
          <Input valueInput={yearEnem || ""} textLabel="Informe o ano do Enem/Encceja" typeInput="text" onChange={setYearEnem} required={entryForm === 'enem-encceja'}/>
          <Input valueInput={codeEnemAndEncceja || ""} textLabel="Informe o código da inscrição do Enem/Encceja" typeInput="text" onChange={setCodeEnemAndEncceja} required={entryForm === 'enem-encceja'}/>
          <Input valueInput={objectiveTestGrade || ""} textLabel="Informe a nota da prova objetiva" typeInput="text" onChange={setObjectiveTestGrade} required={entryForm === 'enem-encceja'}/>
          <Input valueInput={redactionTestGrade || ""} textLabel="Informe a nota da redação" typeInput="text" onChange={setRedactionTestGrade} required={entryForm === 'enem-encceja'}/>
          {/* <InputFile valueInput={enemFile || ""} typeInput="file" textLabel="Selecione o comprovante do Enem" onChange={fileValidation} accept="application/pdf" required={entryForm === 'enem-encceja'}/> */}
          <input type="file" accept="application/pdf" onChange={(e) => fileValidation(e.target.files[0])}></input>
        </div>

        </div>

        <div className="flex flex-col mt-12">
          <Button type="submit">Próximo</Button>
        </div>
        <div className="flex flex-col mt-2">
          <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
        </div>
      </form>
    </div>
  )
}
function cpf(arg0: string, cpf: any) {
  throw new Error("Function not implemented.");
}

