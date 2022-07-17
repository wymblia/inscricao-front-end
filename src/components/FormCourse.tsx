import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { RegistrationContext } from "../contexts/RegistrationContext";
import Course from "../core/Course";
import useCourse from "../hooks/useCourse";
import { api } from "../services/api";
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

export default function FormCourse(props: CourseProps) {
  const { modality, setModality, unity, setUnity, entryForm, setEntryForm, yearEnem, setYearEnem, codeEnemAndEncceja, setCodeEnemAndEncceja, objectiveTestGrade, setObjectiveTestGrade, redactionTestGrade, setRedactionTestGrade, nameCourse, selectedCourse, setSelectedCourse, setShowCourseName, setShowModalityName, setFilialCourse, setTurnoCourse, setTurnoIdCourse, setMatrizCourse, setModalidadeCourse, selectedEnrollment, setSelectedEnrollment, setIdEntryForm, cpf,  modalidadeCourse } = useContext(RegistrationContext)
  const { listOffer } = useCourse()

  const [coursesOptions, setCoursesOptions] = useState([])
  const [selectedEnrollmentEnem] = useState([])
  const [unityOptions, setUnityOptions] = useState([])
  const [listVestibular, setListVestibular] = useState([])
  const [notice, setNotice] = useState([])

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

    if (e.target.value != 'enem-encceja') {
      setYearEnem("")
      setCodeEnemAndEncceja("")
      setObjectiveTestGrade("")
      setRedactionTestGrade("")
    }

    if (e.target.value === 'enem-encceja') {
      setIdEntryForm('2')
    } else {
      setIdEntryForm('1')
    }

    if (e.target.value === 'enem-encceja') {
      setListVestibular(listVestibular.filter(value => value.permitir_nota_enem === '1'))
    } else if (e.target.value === 'transferencia' || e.target.value === 'reingresso') {
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
  let vestibulares = listOffer.find(value => value.CURSO_ID === selectedCourse)

  function vestibularFunction() {

    if (vestibulares) {
      setListVestibular(vestibulares.VESTIBULARES)
    }
  }

  useEffect(() => {
    vestibularFunction()
  }, [selectedCourse])

  function setSelectedEnrollmentEnemFunction() {
    if (modalidadeCourse === 'Presencial' || modalidadeCourse === 'EAD') {
      switch (unity) {
        case 'Caxias do Sul':
          setSelectedEnrollment('1448')
          break
        case 'Bento Gonçalves':
          setSelectedEnrollment('1452')
          break
        case 'Novo Hamburgo':
          setSelectedEnrollment('1456')
          break
        case 'Porto Alegre':
          setSelectedEnrollment('1459')
          break
        case 'IBGEN':
          setSelectedEnrollment('1502')
          break
        case 'Uniftec Caxias do Sul/RS':
          setSelectedEnrollment('1461')
          break
        case 'FTEC Bento Gonçalves/RS':
          setSelectedEnrollment('1464')
          break
        case 'FTEC Novo Hamburgo/RS':
          setSelectedEnrollment('1466')
          break
        case 'FTEC Porto Alegre/RS':
          setSelectedEnrollment('1468')
          break
        case 'FTEC Ibgen':
          setSelectedEnrollment('1470')
          break
        case 'Polo Uniftec Arroio dos Ratos/RS':
          setSelectedEnrollment('1472')
          break
        case 'Polo Infox Informática São Marcos/RS':
          setSelectedEnrollment('1488')
          break
        case 'Polo Master Informática Jaguari/RS':
          setSelectedEnrollment('1484')
          break
        case 'Polo Yázigi - Gravataí/RS':
          setSelectedEnrollment('1482')
          break
        case 'Polo Neuron - Casca/RS':
          setSelectedEnrollment('1474')
          break
        case 'Polo Muçum':
          setSelectedEnrollment('1486')
          break
        case 'Polo Capital do Saber Feliz/RS':
          setSelectedEnrollment('1478')
          break
        case 'Polo Question Flores da Cunha RS':
          setSelectedEnrollment('1480')
          break
        case 'Polo Petrópolis Ensino Cartesiano':
          setSelectedEnrollment('1507')
          break
        case 'Polo Porto Alegre':
          setSelectedEnrollment('1468')
          break
        case 'Polo Arroio dos Ratos':
          setSelectedEnrollment('1472')
          break
        case 'Polo Casca':
          setSelectedEnrollment('1474')
          break
        case 'Polo Infoserv Treinamento- Farroupilha':
          setSelectedEnrollment('1476')
          break
        case 'Polo Feliz':
          setSelectedEnrollment('1478')
          break
        case 'Polo Flores da Cunha':
          setSelectedEnrollment('1480')
          break
        case 'Polo Gravataí/RS':
          setSelectedEnrollment('1482')
          break
        case 'Jaguari':
          setSelectedEnrollment('1484')
          break
        case 'Polo de Muçum':
          setSelectedEnrollment('1486')
          break
        case 'Polo São Marcos':
          setSelectedEnrollment('1488')
          break
        case 'Polo Bento Gonçalves':
          setSelectedEnrollment('1464')
          break
        case 'Polo Caxias do Sul':
          setSelectedEnrollment('1461')
          break
        case 'IBGEN':
          setSelectedEnrollment('1470')
          break
        case 'Polo Novo Hamburgo':
          setSelectedEnrollment('1466')
          break
        case 'Polo Farroupilha/RS':
          setSelectedEnrollment('1476')
          break
      }
    } else if (modalidadeCourse === 'Semi Presencial') {
      switch (unity) {
        case 'FTEC Ibgen':
          setSelectedEnrollment('1497')
          break
        case 'FTEC Porto Alegre ZN':
          setSelectedEnrollment('1495')
          break
        case 'FTEC Novo Hamburgo/RS':
          setSelectedEnrollment('1493')
          break
        case 'Uniftec Caxias do Sul/RS':
          setSelectedEnrollment('1489')
          break
        case 'FTEC Bento Gonçalves/RS':
          setSelectedEnrollment('1491')
          break
        case 'Polo Paideia':
          setSelectedEnrollment('1550')
          break
        case 'Polo Bento Gonçalves':
          setSelectedEnrollment('1491')
          break
        case 'Polo Caxias do Sul':
          setSelectedEnrollment('1489')
          break
        case 'Polo Feliz':
          setSelectedEnrollment('1500')
          break
        case 'Polo Flores da Cunha':
          setSelectedEnrollment('1501')
          break
      }
    }
    return selectedEnrollmentEnem
  }

  function setSelectedEnrollmentFunction(e: any) {
    setNotice(vestibulares.edital)
    if (entryForm != 'enem-encceja') {
      setSelectedEnrollment(e.target.value)
    } else {
      setSelectedEnrollmentEnemFunction()
    }
  }

  function modalityFunction(e: any) {
    setUnity('')
    setSelectedCourse('')
    setEntryForm('')
    setSelectedEnrollment('')

    var btn = document.querySelectorAll(".entry-modality")

    btn.forEach(function (button) {
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
    let fileType = ['application/pdf'];
    let selectedFile = e.target.files[0];
    if ((selectedFile && !fileType.includes(selectedFile.type))) {
      e.target.value = null;
      
      Swal.fire({
        title: '<strong>Selecione um arquivo em formato PDF</strong>',
        html:
          'Caso precise converter o seu documento, ' +
          '<a target="_blank" href="//smallpdf.com/pt/conversor-de-pdf"><b>CLIQUE AQUI</b></a> ',
        confirmButtonText: 'Ok',
        icon: 'info',
      })
    } else {
      if (!e.target.files[0]){
        Swal.fire({
          title: 'Escolha um arquivo!',
          confirmButtonText: 'Ok',
          icon: 'info',
        })
      } else if (((e.target.files[0].size / 1024) / 1024) <= 2) {
        const formData = new FormData()
        formData.append('fileEnem', e.target.files[0])
        formData.append('cpf', cpf)

        await api.post('/upload-enem', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })

      } else if (((e.target.files[0].size / 1024) / 1024) > 2) {
        e.target.value = null;

        Swal.fire({
          title: 'Arquivo muito grande!',
          text: 'Limite máximo de 2MB',
          confirmButtonText: 'Ok',
          icon: 'info',
        })
      }
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
        <div hidden={entryForm === 'enem-encceja'}>
          <Select textLabel="Processo seletivo" onChange={setSelectedEnrollmentFunction} value={selectedEnrollment} required={entryForm != 'enem-encceja'}>
            <option disabled value="">Selecione</option>
            {listVestibular.map((option, index) => (
              <option key={index} value={option.id} >{option.descricao}</option>
            ))}
          </Select>
          {
            notice ?
              (notice.length > 0 ?
                <ButtonOptions classNameButton="h-6 rounded-md" value="S" >
                  <a href={`https://inscricao.ftec.com.br/edital/${notice}`} title="Abrir o Edital" target="_blank">Veja o Edital</a>
                </ButtonOptions>
                : null)
              : null 
          }

        </div>
        <div hidden={entryForm != 'enem-encceja'}>
          <div className="mb-2 font-light text-sm ">
            <Input valueInput={yearEnem || ""} textLabel="Informe o ano do Enem/Encceja" typeInput="text" onChange={setYearEnem} required={entryForm === 'enem-encceja'} />
            <Input valueInput={codeEnemAndEncceja || ""} textLabel="Informe o código da inscrição do Enem/Encceja" typeInput="text" onChange={setCodeEnemAndEncceja} required={entryForm === 'enem-encceja'} />
            <Input valueInput={objectiveTestGrade || ""} textLabel="Informe a nota da prova objetiva" typeInput="text" onChange={setObjectiveTestGrade} required={entryForm === 'enem-encceja'} />
            <Input valueInput={redactionTestGrade || ""} textLabel="Informe a nota da redação" typeInput="text" onChange={setRedactionTestGrade} required={entryForm === 'enem-encceja'} />
            {/* <InputFile valueInput={enemFile || ""} typeInput="file" textLabel="Selecione o comprovante do Enem" onChange={fileValidation} accept="application/pdf" required={entryForm === 'enem-encceja'}/> */}
            <input type="file" accept="application/pdf" onChange={fileValidation} required={(entryForm === 'enem-encceja')} onClick={setSelectedEnrollmentFunction} />
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