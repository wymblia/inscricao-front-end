import React, { useContext, useState } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Course from "../core/Course";
import Button from "./Button";
import Input from "./Input";


interface CourseProps {
  course: Course
  courseChange?: (course: Course) => void
}

export default function FormCourse (props: CourseProps) {
  const {entryForm, yearEnem, nameCourse, setEntryForm, setYearEnem, setNameCourse} = useContext(RegistrationContext)

  const [appearanceYearEnem, setAppearanceYearEnem] = useState(true)

  const entryFormsOptions = [
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
      label: "Administração",
      value: "administração"
    },
    {
      label: "Direito",
      value: "vestibular"
    }
  ]

  function EntryFormsFunction(e) {
    setEntryForm(e.target.value)
    appearanceYearEnem ? setAppearanceYearEnem(false) : setAppearanceYearEnem(true)

  }

  function CoursesFunction(e) {
    setEntryForm(e.target.value)
  }

  return (
    <div>

      <div className="flex flex-col  mb-2">
        <label className="mb-2 font-light text-sm">Selecione o Curso</label>
        <div id="couses" className="select-container">
          <div>
          <select className="border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white mb-2 w-full h-10" onChange={CoursesFunction}>
            {coursesOptions.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-2">
        <label className="mb-2 font-light text-sm">Selecione a Forma de Ingresso</label>
        <div id="entryForms" className="select-container">
          <div>
            <select className="border border-gray-300 rounded-2xl focus:outline-none bg-gray-50 px-4 py-2 focus:bg-white mb-2 w-full h-10" onChange={EntryFormsFunction}>
              {entryFormsOptions.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div hidden={appearanceYearEnem}>
        <div className="mb-2 font-light text-sm ">
          <Input textLabel={"Informe o ano do Enem"} typeInput="text"/>
        </div>
      </div>

      <div className="flex flex-col mt-12">
        <Button onClick={() => props.courseChange?.(new Course(entryForm, yearEnem, nameCourse))}>Próximo</Button>
      </div>
    </div>
    
  )
}
