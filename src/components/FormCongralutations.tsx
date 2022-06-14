import React, { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import { FiMonitor, FiClock } from 'react-icons/fi';
import { BsCalendarWeek } from 'react-icons/bs';
import { api } from "../services/api";
import moment from "moment"
import Swal from "sweetalert2";

interface CongratulationsProps {
  congratulationsChange?: () => void
  backPage?: () => void
}


export default function FormCongratulations(props: CongratulationsProps) {

  const { selectedCourse, unity, modality, showModalityName, showCourseName, name, socialName, email, phone, cpf,
    birthDate, providence, cep, state, city, district, street, number, complement, yearEnem, codeEnemAndEncceja, objectiveTestGrade, redactionTestGrade, filialCourse, turnoCourse, matrizCourse, modalidadeCourse, turnoIdCourse, gender, selectedEnrollment, idEntryForm, externConsultant, existsExternConsultant } = useContext(RegistrationContext)

  return (
    <>
      <div className="md:max-w-[450px] m-auto">
    {/* <img className="w-full" src={'https://www.ftec.com.br/static/media/uploads/NEW_VESTIBULAR/uniftec11.png'}/> */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
          <div className="flex justify-center text-center border-1 border-gray-300 rounded-t-box p-7 bg-gradient-to-r  from-green-300 to-blue-400 text-gray-700">
            <p className="text-3xl ">
              Parabéns!
            </p>
          </div>
          <div className="flex mx-10 justify-center text-center border-2 border-gray-300 rounded-2xl p-3 bg-gradient-to-r from-green-200 to-blue-300 text-gray-700">
          <p className="text-xl">
              Sua inscrição foi confirmada
            </p>
          </div>
          <div className="flex mx-16 justify-center font-medium text-lg text-center border-2 border-gray-300 rounded-3xl p-6	bg-gradient-to-br from-green-300 to-blue-400 text-black">
            <p>
              Você deu o primeiro passo para o seu futuro
            </p>
          </div>
        </div>
      </div>
      <div className="md:min-w-[550px]">
        <div className="flex flex-col mt-12">
        </div>
        <div className="flex flex-col mt-2">
          <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
        </div>
      </div>
    </>
  )
}