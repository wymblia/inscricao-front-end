import React, { useContext } from "react";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Button from "./Button";
import ButtonBack from "./ButtonBack";
import { FiMonitor, FiClock } from 'react-icons/fi';
import { BsCalendarWeek } from 'react-icons/bs';
import { api } from "../services/api";
import moment from "moment"
import Swal from "sweetalert2";

interface CourseResumeProps {
  courseResumeChange?: () => void
  backPage?: () => void
}


export default function FormCourseResume(props: CourseResumeProps) {

  const { selectedCourse, unity, modality, showModalityName, showCourseName, name, socialName, email, phone, cpf,
    birthDate, providence, cep, state, city, district, street, number, complement, yearEnem, codeEnemAndEncceja, objectiveTestGrade, redactionTestGrade, filialCourse, turnoCourse, matrizCourse, modalidadeCourse, turnoIdCourse, gender, selectedEnrollment, idEntryForm, externConsultant, existsExternConsultant } = useContext(RegistrationContext)

  const firstName = name.split(' ')[0]
  const lastName = name.split(' ').slice(1, 20).join(' ')
  const birthDateFormatBr = moment.utc(birthDate).format('DD/MM/YYYY')

  async function getUfIdBaseFtec() {
    const result = await api.get(`/ufid`)

    let uf = result.data.find(element => element.SIGLA === state)

    const ufId = uf.UF_ID

    return ufId

  }

  async function newEnrollment() {

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Aguarde, estamos confirmando sua inscrição',
      showConfirmButton: false,
      timer: 6800
    })
    const ufId = await getUfIdBaseFtec()
    try {
      let retorno = await api.post('/new-enrollment', {
        nome_contato: firstName,
        sobrenome_contato: lastName,
        nome_social: socialName,
        email_contato: email,
        fone_contato: phone,
        como_chegou: null,
        filial_id: filialCourse,
        forma_ingresso: idEntryForm,
        vestibular_id: selectedEnrollment,
        filial_old: null,
        local_prova_id: null,
        enem_ano: yearEnem,
        enem_inscricao: codeEnemAndEncceja,
        enem_nota_objetiva: objectiveTestGrade,
        enem_nota_redacao: redactionTestGrade,
        modalidade_ensino: modalidadeCourse,
        modalidade: modalidadeCourse,
        opcao_curso: null,
        turno: turnoCourse,
        selected_opcao1: selectedCourse + '#' + turnoIdCourse + '#' + matrizCourse + '#' + showCourseName,
        selected_opcao2: selectedCourse + '#' + turnoIdCourse + '#' + matrizCourse + '#' + showCourseName,
        hidden_curso_id: null,
        hidden_turno_id: null,
        hidden_matriz: null,
        hidden_curso: null,
        opcao1: selectedCourse,
        opcao2: selectedCourse,
        cpf: cpf,
        documento_estrangeiro: null,
        pais: 1,
        nome: firstName,
        sobrenome: lastName,
        sexo: gender,
        data_nascimento: birthDateFormatBr,
        email: email,
        fone1: phone,
        fone2: phone,
        cep: cep,
        uf_id: ufId,
        cidade: city,
        bairro: district,
        logradouro: street,
        numero: number,
        complemento: complement,
        cidade_escola: null,
        atendimento_consultor: existsExternConsultant,
        consultor_usuarioid: externConsultant,
        providencia: providence
      })
      props.courseResumeChange()
    } catch (err) {
      Swal.fire({
        title: 'Candidato já inscrito',
        text: 'O candidato já está inscrito neste processo seletivo. Escolha outro!',
        confirmButtonText: 'Ok',
        icon: 'warning',
      })
    }

    // let retorno = {
    //   nome_contato: firstName,
    //   sobrenome_contato: lastName,
    //   nome_social: socialName,
    //   email_contato: email,
    //   fone_contato: phone,
    //   como_chegou: null,
    //   filial_id: filialCourse,
    //   forma_ingresso: idEntryForm,
    //   vestibular_id: selectedEnrollment,
    //   filial_old: null,
    //   local_prova_id: null,
    //   enem_ano: yearEnem,
    //   enem_inscricao: codeEnemAndEncceja,
    //   enem_nota_objetiva: objectiveTestGrade,
    //   enem_nota_redacao: redactionTestGrade,
    //   modalidade_ensino: modalidadeCourse,
    //   modalidade: modalidadeCourse,
    //   opcao_curso: null,
    //   turno: turnoCourse,
    //   selected_opcao1: selectedCourse+'#'+turnoIdCourse+'#'+matrizCourse+'#'+showCourseName,
    //   selected_opcao2: selectedCourse+'#'+turnoIdCourse+'#'+matrizCourse+'#'+showCourseName,
    //   hidden_curso_id: null,
    //   hidden_turno_id: null,
    //   hidden_matriz: null,
    //   hidden_curso: null,
    //   opcao1: selectedCourse,
    //   opcao2: selectedCourse,
    //   cpf: cpf,
    //   documento_estrangeiro: null,
    //   pais: 1,
    //   nome: firstName,
    //   sobrenome: lastName,
    //   sexo: gender,
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
    //   cidade_escola: null,
    //   atendimento_consultor: existsExternConsultant,
    //   consultor_usuarioid: externConsultant,
    //   providencia: providence
    // }

    // console.log(retorno)
  }

  return (
    <>
      <div className="md:max-w-[450px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <div className="flex justify-center font-light text-lg text-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100 text-gray-700">
            <p>
              <FiMonitor className="m-auto text-4xl mb-3 text-gray-700" />
              {selectedCourse ? showCourseName : 'Volte e selecione um curso!'}
            </p>
          </div>
          <div className="flex justify-center font-light text-lg text-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100 text-gray-700">
            <p>
              <BsCalendarWeek className="m-auto text-4xl mb-3" />
              {modality ? showModalityName : 'Volte e selecione a modalidade!'}
            </p>
          </div>
          <div className="flex justify-center font-light text-lg text-center border-2 border-gray-300 rounded-xl p-6 bg-gray-100 text-gray-700">
            <p>
              <FiClock className="m-auto text-4xl mb-3" />
              {unity ? unity : 'Volte e selecione a unidade!'}
            </p>
          </div>
        </div>
      </div>
      <div className="md:min-w-[550px]">
        <div className="flex flex-col mt-12">
          <Button onClick={newEnrollment}>Confirmar inscrição</Button>
        </div>
        <div className="flex flex-col mt-2">
          <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
        </div>
      </div>
    </>
  )
}