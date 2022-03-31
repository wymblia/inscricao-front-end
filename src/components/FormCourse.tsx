import { Console } from "console";
import React, { useContext, useEffect, useState } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Course from "../core/Course";
import useCourse from "../hooks/useCourse";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import ButtonOptions from "./ButtonOptions";
import Input from "./Input";
import Select from "./Select";


interface CourseProps {
  course: Course
  courseChange?: (course: Course) => void
  backPage?: () => void
}

export default function FormCourse (props: CourseProps) {
  const {modality, unity, entryForm, yearEnem, nameCourse, setModality, setUnity, setEntryForm, setYearEnem, setNameCourse, cpf, birthDate, deficiency} = useContext(RegistrationContext)
  const {getCourse, listOffer} = useCourse()
  const [appearanceYearEnem, setAppearanceYearEnem] = useState(true)

  const [coursesOptions, setCoursesOptions] = useState([])
  const [unityOptions, setUnityOptions] = useState([])

  let unityOptionsArray = []
  let coursesOptionsArray = []

  const entryFormsOptions = [
    {
      label: "Selecione",
      value: ""
    },
    {
      label: "Vestibular",
      value: "vestibular"
    },
    {
      label: "Enem",
      value: "enem"
    },
    {
      label: "Encceja",
      value: "encceja"
    }
  ]


  function unityForModality() {

    listOffer.forEach(unity => {

      if(unity.MODALIDADE === modality) {
        unityOptionsArray.push({
            label: unity['UNIDADE'],
            value: unity['UNIDADE']
        })
        
          // if(unityOptionsArray != (unity.UNIDADE)) {
          //   unityOptionsArray.push({
          //     label: unity['UNIDADE'],
          //     value: unity['UNIDADE']
          //   })

          // }
      }

    })
    
    setUnityOptions(unityOptionsArray)
  }



  useEffect(() => {
    unityForModality()
  }, [modality]);



  function courseForModalityAndUnity() {

   listOffer.forEach(course => {

      if(course.MODALIDADE === modality && course.UNIDADE === unity) {
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
    setUnity(e.target.value)
  }

  function EntryFormsFunction(e: any) {
    setEntryForm(e.target.value)
    if (e.target.value === 'enem'){
      appearanceYearEnem ? setAppearanceYearEnem(false) : setAppearanceYearEnem(true)
    }else {
      setAppearanceYearEnem(true)
    }
  }

  function CoursesFunction(e: any) {
    // setEntryForm(e.target.value)
  }

  function modalityFunction(e: any) {
    setModality(e.target.value)
  }


  return (
    <div>
      <div id="modality">
        <label className="font-light text-sm">Modalidade</label>
        <div className="flex mt-2 space-x-2 justify-center">
          <ButtonOptions value="S" onClick={modalityFunction}>Semipresencial</ButtonOptions>
          <ButtonOptions value="P" onClick={modalityFunction}>Presencial</ButtonOptions>
          <ButtonOptions value="E" onClick={modalityFunction}>EAD</ButtonOptions>
        </div>
      </div>

      <Select textLabel="Unidade/Polo" onChange={UnityFunction}>
        {unityOptions.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </Select>

      <Select textLabel="Curso" onChange={CoursesFunction}>
        {coursesOptions.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </Select>

      <Select textLabel="Forma de Ingresso" onChange={EntryFormsFunction}>
        {entryFormsOptions.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </Select>

      <div hidden={appearanceYearEnem}>
        <div className="mb-2 font-light text-sm ">
          <Input textLabel={"Informe o ano do Enem"} typeInput="text"/>
        </div>
      </div>

      <div className="flex flex-col mt-12">
        <Button onClick={() => props.courseChange?.(new Course(modality, unity, entryForm, yearEnem, nameCourse))}>Próximo</Button>
      </div>
      <div className="flex flex-col mt-2">
        <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
      </div>
    </div>
  )
}
