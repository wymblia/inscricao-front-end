import React, { Fragment, useContext } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import ButtonNext from "./ButtonNext"
import ButtonBack from "./ButtonBack"
import { FiMonitor, FiClock } from "react-icons/fi"
import { BsCalendarWeek } from "react-icons/bs"
import { api } from "../services/api"
import moment from "moment"
import Swal from "sweetalert2"

interface CourseResumeProps {
  courseResumeChange?: () => void
  backPage?: () => void
}

export default function FormCourseResume(props: CourseResumeProps) {
  const {
    name,
    socialName,
    email,
    phone,
    CPF,
    birthDate,
    disabilityRelief,
    cep,
    state,
    city,
    district,
    street,
    number,
    complement,
    yearEnem,
    codeEnemAndEncceja,
    objectiveTestGrade,
    redactionTestGrade,
    filialCourse,
    courseShift,
    courseMatrix,
    courseModality,
    courseIdShift,
    gender,
    selectedEntranceExam,
    entryForm,
    entryFormId,
    externalConsultant,
    switchShowExternalConsultant,
    selectedCourse,
    unity,
    modality,
    showModalityName,
    showCourseName
  } = useContext(RegistrationContext)

  const firstName = name.split(" ")[0]
  const lastName = name.split(" ").slice(1, 20).join(" ")
  const birthDateFormatBr = moment.utc(birthDate).format("DD/MM/YYYY")

  // async function getUfIdBaseFtec() {
  //   const result = await api.get(`/ufid`)
  //   let uf = result.data.find((element) => element.SIGLA === state)
  //   const ufId = uf.UF_ID
  //   return ufId
  // }

  function newEnrollment() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Aguarde, estamos confirmando sua inscrição",
      showConfirmButton: false,
      timer: 6800
    })
    // const ufId = await getUfIdBaseFtec()
    // try {
    //   await api.post("/new-enrollment", {
    //     nome_contato: firstName,
    //     sobrenome_contato: lastName,
    //     nome_social: socialName,
    //     email_contato: email,
    //     fone_contato: phone,
    //     como_chegou: null,
    //     filial_id: filialCourse,
    //     forma_ingresso: entryFormId,
    //     vestibular_id:
    //       entryForm.value === "enem-encceja" ? selectedEntranceExam : selectedEntranceExam.value,
    //     filial_old: null,
    //     local_prova_id: null,
    //     enem_ano: yearEnem,
    //     enem_inscricao: codeEnemAndEncceja,
    //     enem_nota_objetiva: objectiveTestGrade,
    //     enem_nota_redacao: redactionTestGrade,
    //     modalidade_ensino: courseModality,
    //     modalidade: courseModality,
    //     opcao_curso: null,
    //     turno: courseShift,
    //     selected_opcao1:
    //       selectedCourse.value + "#" + courseIdShift + "#" + courseMatrix + "#" + showCourseName,
    //     selected_opcao2:
    //       selectedCourse.value + "#" + courseIdShift + "#" + courseMatrix + "#" + showCourseName,
    //     hidden_curso_id: null,
    //     hidden_turno_id: null,
    //     hidden_matriz: null,
    //     hidden_curso: null,
    //     opcao1: selectedCourse.value,
    //     opcao2: selectedCourse.value,
    //     cpf: CPF,
    //     documento_estrangeiro: null,
    //     pais: 1,
    //     nome: firstName,
    //     sobrenome: lastName,
    //     sexo: gender.value,
    //     data_nascimento: birthDateFormatBr,
    //     email: email,
    //     fone1: phone,
    //     fone2: phone,
    //     cep: cep,
    //     uf_id: ufId,
    //     cidade: city,
    //     bairro: district,
    //     logradouro: street,
    //     numero: number,
    //     complemento: complement,
    //     cidade_escola: null,
    //     atendimento_consultor: switchShowExternalConsultant,
    //     consultor_usuarioid: externalConsultant.value,
    //     providencia: disabilityRelief
    //   })
    props.courseResumeChange()
    // } catch (err) {
    //   Swal.fire({
    //     title: "Candidato já inscrito",
    //     text: "O candidato já está inscrito neste processo seletivo. Escolha outro!",
    //     confirmButtonText: "Ok",
    //     icon: "warning"
    //   })
    // }

    // let retorno = {
    //   nome_contato: firstName,
    //   sobrenome_contato: lastName,
    //   nome_social: socialName,
    //   email_contato: email,
    //   fone_contato: phone,
    //   como_chegou: null,
    //   filial_id: filialCourse,
    //   forma_ingresso: entryFormId,
    //   vestibular_id:
    //     entryForm.value === "enem-encceja"
    //       ? selectedEntranceExam
    //       : selectedEntranceExam.value,
    //   filial_old: null,
    //   local_prova_id: null,
    //   enem_ano: yearEnem,
    //   enem_inscricao: codeEnemAndEncceja,
    //   enem_nota_objetiva: objectiveTestGrade,
    //   enem_nota_redacao: redactionTestGrade,
    //   modalidade_ensino: courseModality,
    //   modalidade: courseModality,
    //   opcao_curso: null,
    //   turno: courseShift,
    //   selected_opcao1:
    //     selectedCourse.value +
    //     "#" +
    //     courseIdShift +
    //     "#" +
    //     courseMatrix +
    //     "#" +
    //     showCourseName,
    //   selected_opcao2:
    //     selectedCourse.value +
    //     "#" +
    //     courseIdShift +
    //     "#" +
    //     courseMatrix +
    //     "#" +
    //     showCourseName,
    //   hidden_curso_id: null,
    //   hidden_turno_id: null,
    //   hidden_matriz: null,
    //   hidden_curso: null,
    //   opcao1: selectedCourse.value,
    //   opcao2: selectedCourse.value,
    //   cpf: CPF,
    //   documento_estrangeiro: null,
    //   pais: 1,
    //   nome: firstName,
    //   sobrenome: lastName,
    //   sexo: gender.value,
    //   data_nascimento: birthDateFormatBr,
    //   email: email,
    //   fone1: phone,
    //   fone2: phone,
    //   cep: cep,
    //   uf_id: ufId,
    //   cidade: city,
    //   bairro: district,
    //   logradouro: street,
    //   numero: number,
    //   complemento: complement,
    //   cidade_escola: null,
    //   atendimento_consultor: switchShowExternalConsultant,
    //   consultor_usuarioid: externalConsultant.value,
    //   providencia: disabilityRelief,
    // }
    // console.log(retorno)
  }

  return (
    <Fragment>
      <div className="md:max-w-[450px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <div className="flex justify-center font-light text-lg text-center border-2 border-grey-300 dark:border-grey-500 rounded-xl p-6 bg-grey-100 dark:bg-grey-700 text-grey-700 dark:text-grey-50">
            <p>
              <FiMonitor className="m-auto text-4xl mb-3" />
              {showCourseName}
            </p>
          </div>
          <div className="flex justify-center font-light text-lg text-center border-2 border-grey-300 dark:border-grey-500 rounded-xl p-6 bg-grey-100 dark:bg-grey-700 text-grey-700 dark:text-grey-50">
            <p>
              <BsCalendarWeek className="m-auto text-4xl mb-3" />
              {showModalityName}
            </p>
          </div>
          <div className="flex justify-center font-light text-lg text-center border-2 border-grey-300 dark:border-grey-500 rounded-xl p-6 bg-grey-100 dark:bg-grey-700 text-grey-700 dark:text-grey-50">
            <p>
              <FiClock className="m-auto text-4xl mb-3" />
              {unity.label}
            </p>
          </div>
        </div>
      </div>
      <div className="md:min-w-[550px]">
        <div className="flex flex-col mt-12">
          <ButtonNext onClick={newEnrollment}>Confirmar inscrição</ButtonNext>
        </div>
        <div className="flex flex-col mt-2">
          <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
        </div>
      </div>
    </Fragment>
  )
}
