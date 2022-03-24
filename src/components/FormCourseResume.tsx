import React, { useContext, useState } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import PersonalData from "../core/PersonalData";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import Input from "./Input";
import Textarea from "./TextArea";

interface CourseResumeProps {
  courseResumeChange?: () => void
  backPage?: () => void
}

export default function FormCourseResume (props: CourseResumeProps) {
  const {cpf, setCpf, birthDate, setBirthDate, deficiency, setDeficiency, name, email, phone, cep, state, city, district, street, number} = useContext(RegistrationContext)
  const [appearanceDeficiency, setAppearanceDeficiency] = useState(true)

  return (
    <div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-gray-300 p-16 text-center sm:w-1/3">
            <p>Modalidade</p>
            <p>Presencial</p>
          </div>
          <div className="bg-gray-300 p-16 text-center sm:w-1/3">
            <p>Curso</p>
            <p>Análise e Desenvolvimento de Sistemas</p>
          </div>
          <div className="bg-gray-300 p-16 text-center sm:w-1/3">
            <p>Turno</p>
            <p>Noturno</p>
          </div>
        </div>

        {/* <div className="grid grid-rows-1 grid-flow-col gap-2 mb-10 max-w-full">
          <div className="bg-gray-300 p-10 w-[200px] text-ali">Modalidade</div>
          <div className="bg-gray-300 p-10 w-[200px]">Curso Administração</div>
          <div className="bg-gray-300 p-10 w-[200px]">Turno Noturno</div>
        </div> */}

      <div className="flex flex-col mt-12 max-w-xs m-auto">
        <Button onClick={() => props.courseResumeChange()}>Confirmar inscrição</Button>
      </div>
      <div className="flex flex-col mt-2 max-w-xs m-auto">
        <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
      </div>
    </div>
  )
}