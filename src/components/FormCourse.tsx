import React, { useContext, useState } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Course from "../core/Course";
import PersonalData from "../core/PersonalData";
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

  const [appearanceYearEnem, setAppearanceYearEnem] = useState(true)

  const unityOptions = [
    {
      label: "Selecione",
      value: ""
    },
    {
      label: "Caxias do Sul",
      value: "caxiasDoSul"
    },
    {
      label: "Bento Gonçalves",
      value: "bentoGonçalves"
    },
    {
      label: "Novo Hamburgo",
      value: "novoHamburgo"
    },
    {
      label: "Porto Alegre",
      value: "portoAlegre"
    },
    {
      label: "IBGEN",
      value: "ibgen"
    },
    {
      label: "Adicionar polos",
      value: "polo"
    }
  ]

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

  const coursesOptions = [
    {
      label: "Selecione",
      value: ""
    },
    {
      label: "Administração",
      value: "administração"
    },
    {
      label: "Direito",
      value: "direito"
    }
  ]

  function ModalityFunction(e: any) {
    setModality(e.target.value)
  }

  function UnityFunction(e: any) {
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
    if (e.target.value === 'presencial'){
      setEntryForm(e.target.value)
    }else if (e.target.value === 'semipresencial') {
      setEntryForm(e.target.value)
    }else if (e.target.value === 'ead'){
      setEntryForm(e.target.value)
    }
  }



  return (
    <div>
      <div id="modality">
        <label className="font-light text-sm">Modalidade</label>
        <div className="flex mt-2 space-x-2 justify-center">
          <ButtonOptions value="semipresencial" onClick={modalityFunction}>Semipresencial</ButtonOptions>
          <ButtonOptions value="presencial" onClick={modalityFunction}>Presencial</ButtonOptions>
          <ButtonOptions value="ead" onClick={modalityFunction}>EAD</ButtonOptions>
        </div>
      </div>

      <Select textLabel="Unidade/Polo" onChange={UnityFunction}>
        {unityOptions.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}Prezados Coordenadores, boa tarde!

        Segue no e-mail abaixo, as orientações para que os professores possam copiar os conteúdos das suas disciplinas de semestres anteriores para este semestre. Por gentileza, repassem estas orientações aos vossos docentes. 
        
        Grata,
        
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
