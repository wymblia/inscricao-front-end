import React, { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Course from "../core/Course"
import useCourse from "../hooks/useCourse"
import { api } from "../services/api"
import Button from "./Button"
import ButtonBack from "./ButtonBack"
import ButtonOptions from "./ButtonOptions"
import Input from "./Input"
import InputFile from "./InputFile"
import Select from "./Select"

interface CourseProps {
  course: Course
  courseChange?: (course: Course) => void
  backPage?: () => void
}

export default function FormCourse(props: CourseProps) {
  const {
    nameCourse,
    cpf,
    courseModality,
    modality,
    setModality,
    unity,
    setUnity,
    entryForm,
    setEntryForm,
    yearEnem,
    setYearEnem,
    codeEnemAndEncceja,
    setCodeEnemAndEncceja,
    objectiveTestGrade,
    setObjectiveTestGrade,
    redactionTestGrade,
    setRedactionTestGrade,
    selectedCourse,
    setSelectedCourse,
    selectedEntranceExam,
    setSelectedEntranceExam,
    setShowCourseName,
    setShowModalityName,
    setFilialCourse,
    setCourseShift,
    setCourseIdShift,
    setCourseMatrix,
    setCourseModality,
    setEntryFormId
  } = useContext(RegistrationContext)

  const { offerList } = useCourse()
  const unityList = []
  const coursesList = []
  const [coursesOptions, setCoursesOptions] = useState([])
  const [selectedEntranceExamEnem] = useState([])
  const [unityOptions, setUnityOptions] = useState([])
  const [listVestibular, setListVestibular] = useState([])
  const [notice, setNotice] = useState([])

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

  function handleModality(e: any) {
    setUnity("")
    setSelectedCourse("")
    setEntryForm("")
    setSelectedEntranceExam("")

    var btn = document.querySelectorAll(".entry-modality")

    btn.forEach(function (button) {
      button.classList.remove("bg-[#284fac]")
      button.classList.remove("text-slate-50")
    })

    let classes = e.target.className
    let newClass = classes + " bg-[#284fac] text-slate-50"
    e.target.className = newClass

    setModality(e.target.value)
    setShowModalityName(e.target.innerHTML)
  }

  function fillUnityByModality() {
    offerList.forEach((unity) => {
      unity.MODALIDADE === modality
        ? !unityList.find((value) => value.label === unity.UNIDADE)
          ? unityList.push({
              label: unity["UNIDADE"],
              value: unity["UNIDADE"]
            })
          : null
        : null
    })
    setUnityOptions(unityList)
  }

  useEffect(() => {
    fillUnityByModality()
  }, [modality])

  function fillCourseByModalityAndUnity() {
    offerList.forEach((course) => {
      course.MODALIDADE === modality && course.UNIDADE === unity
        ? !coursesList.find((value) => value.label === course.CURSO)
          ? coursesList.push({
              label: course["CURSO"],
              value: course["CURSO_ID"]
            })
          : null
        : null
    })
    setCoursesOptions(coursesList)
  }

  useEffect(() => {
    fillCourseByModalityAndUnity()
  }, [unity])

  function handleUnity(e) {
    setSelectedCourse("")
    setUnity(e.target.value)
  }

  function handleEntryForms(e: any) {
    setSelectedEntranceExam("")
    setEntryForm(e.target.value)

    if (e.target.value === "enem-encceja") {
      setEntryFormId("2"),
        setListVestibular(listVestibular.filter((value) => value.permitir_nota_enem === "1"))
    } else {
      setEntryFormId("1")
      setYearEnem("")
      setCodeEnemAndEncceja("")
      setObjectiveTestGrade("")
      setRedactionTestGrade("")
      if (e.target.value === "transferencia" || e.target.value === "reingresso") {
        setListVestibular(
          listVestibular.filter((value) =>
            value.descricao
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .includes("transferencia")
          )
        )
      } else handleVestibular()
    }
  }

  function handleCourses(e: any) {
    setEntryForm("")
    setSelectedEntranceExam("")
    setSelectedCourse(e.target.value)
    let selectedCourse = offerList.find((value) => value.CURSO_ID === e.target.value)
    setCourseModality(selectedCourse.MODALIDADE_DESCRICAO)
    setFilialCourse(selectedCourse.FILIAL)
    setCourseShift(selectedCourse.TURNO)
    setCourseIdShift(selectedCourse.TURNO_ID)
    setCourseMatrix(selectedCourse.MATRIZ_APLICADA)
    setShowCourseName(selectedCourse.DESCRICAO_INSCRICAO)
  }

  useEffect(() => {
    handleVestibular()
  }, [selectedCourse])

  let vestibulares = offerList.find((value) => value.CURSO_ID === selectedCourse)

  function handleVestibular() {
    if (vestibulares) {
      setListVestibular(vestibulares.VESTIBULARES)
    }
  }

  function setSelectedEntranceExamEnemFunction() {
    if (courseModality === "Presencial" || courseModality === "EAD") {
      switch (unity) {
        case "Caxias do Sul":
          setSelectedEntranceExam("1448")
          break
        case "Bento Gonçalves":
          setSelectedEntranceExam("1452")
          break
        case "Novo Hamburgo":
          setSelectedEntranceExam("1456")
          break
        case "Porto Alegre":
          setSelectedEntranceExam("1459")
          break
        case "IBGEN":
          setSelectedEntranceExam("1502")
          break
        case "Uniftec Caxias do Sul/RS":
          setSelectedEntranceExam("1461")
          break
        case "FTEC Bento Gonçalves/RS":
          setSelectedEntranceExam("1464")
          break
        case "FTEC Novo Hamburgo/RS":
          setSelectedEntranceExam("1466")
          break
        case "FTEC Porto Alegre/RS":
          setSelectedEntranceExam("1468")
          break
        case "FTEC Ibgen":
          setSelectedEntranceExam("1470")
          break
        case "Polo Uniftec Arroio dos Ratos/RS":
          setSelectedEntranceExam("1472")
          break
        case "Polo Infox Informática São Marcos/RS":
          setSelectedEntranceExam("1488")
          break
        case "Polo Master Informática Jaguari/RS":
          setSelectedEntranceExam("1484")
          break
        case "Polo Yázigi - Gravataí/RS":
          setSelectedEntranceExam("1482")
          break
        case "Polo Neuron - Casca/RS":
          setSelectedEntranceExam("1474")
          break
        case "Polo Muçum":
          setSelectedEntranceExam("1486")
          break
        case "Polo Capital do Saber Feliz/RS":
          setSelectedEntranceExam("1478")
          break
        case "Polo Question Flores da Cunha RS":
          setSelectedEntranceExam("1480")
          break
        case "Polo Petrópolis Ensino Cartesiano":
          setSelectedEntranceExam("1507")
          break
        case "Polo Porto Alegre":
          setSelectedEntranceExam("1468")
          break
        case "Polo Arroio dos Ratos":
          setSelectedEntranceExam("1472")
          break
        case "Polo Casca":
          setSelectedEntranceExam("1474")
          break
        case "Polo Infoserv Treinamento- Farroupilha":
          setSelectedEntranceExam("1476")
          break
        case "Polo Feliz":
          setSelectedEntranceExam("1478")
          break
        case "Polo Flores da Cunha":
          setSelectedEntranceExam("1480")
          break
        case "Polo Gravataí/RS":
          setSelectedEntranceExam("1482")
          break
        case "Jaguari":
          setSelectedEntranceExam("1484")
          break
        case "Polo de Muçum":
          setSelectedEntranceExam("1486")
          break
        case "Polo São Marcos":
          setSelectedEntranceExam("1488")
          break
        case "Polo Bento Gonçalves":
          setSelectedEntranceExam("1464")
          break
        case "Polo Caxias do Sul":
          setSelectedEntranceExam("1461")
          break
        case "IBGEN":
          setSelectedEntranceExam("1470")
          break
        case "Polo Novo Hamburgo":
          setSelectedEntranceExam("1466")
          break
        case "Polo Farroupilha/RS":
          setSelectedEntranceExam("1476")
          break
      }
    } else if (courseModality === "Semi Presencial") {
      switch (unity) {
        case "FTEC Ibgen":
          setSelectedEntranceExam("1497")
          break
        case "FTEC Porto Alegre ZN":
          setSelectedEntranceExam("1495")
          break
        case "FTEC Novo Hamburgo/RS":
          setSelectedEntranceExam("1493")
          break
        case "Uniftec Caxias do Sul/RS":
          setSelectedEntranceExam("1489")
          break
        case "FTEC Bento Gonçalves/RS":
          setSelectedEntranceExam("1491")
          break
        case "Polo Paideia":
          setSelectedEntranceExam("1550")
          break
        case "Polo Bento Gonçalves":
          setSelectedEntranceExam("1491")
          break
        case "Polo Caxias do Sul":
          setSelectedEntranceExam("1489")
          break
        case "Polo Feliz":
          setSelectedEntranceExam("1500")
          break
        case "Polo Flores da Cunha":
          setSelectedEntranceExam("1501")
          break
      }
    }
    return selectedEntranceExamEnem
  }

  function handleSelectedEntranceExam(e: any) {
    setNotice(vestibulares.edital)
    entryForm != "enem-encceja"
      ? setSelectedEntranceExam(e.target.value)
      : setSelectedEntranceExamEnemFunction()
  }

  function FormSubmit(e: any) {
    e.preventDefault()
    props.courseChange?.(new Course(modality, unity, entryForm, yearEnem, nameCourse))
  }

  async function fileValidation(e: any) {
    let fileType = ["application/pdf"]
    let selectedFile = e.target.files[0]
    if (selectedFile && !fileType.includes(selectedFile.type)) {
      e.target.value = null
      Swal.fire({
        title: "<strong>Selecione um arquivo em formato PDF</strong>",
        html:
          "Caso precise converter o seu documento, " +
          '<a target="_blank" href="//smallpdf.com/pt/conversor-de-pdf"><b>CLIQUE AQUI</b></a> ',
        confirmButtonText: "Ok",
        icon: "info"
      })
    } else {
      if (!e.target.files[0]) {
        Swal.fire({
          title: "Escolha um arquivo!",
          confirmButtonText: "Ok",
          icon: "info"
        })
      } else if (e.target.files[0].size / 1024 / 1024 <= 2) {
        const formData = new FormData()
        formData.append("fileEnem", e.target.files[0])
        formData.append("cpf", cpf)

        await api.post("/upload-enem", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      } else if (e.target.files[0].size / 1024 / 1024 > 2) {
        e.target.value = null
        Swal.fire({
          title: "Arquivo muito grande!",
          text: "Limite máximo de 2MB",
          confirmButtonText: "Ok",
          icon: "info"
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
            <ButtonOptions classNameButton="entry-modality" value="S" onClick={handleModality}>
              Semipresencial
            </ButtonOptions>
            <ButtonOptions classNameButton="entry-modality" value="P" onClick={handleModality}>
              Presencial
            </ButtonOptions>
            <ButtonOptions classNameButton="entry-modality" value="E" onClick={handleModality}>
              EAD
            </ButtonOptions>
          </div>
        </div>

        <Select textLabel="Unidade/Polo" onChange={handleUnity} value={unity} required={true}>
          <option disabled value="">
            Selecione
          </option>
          {unityOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>

        <Select textLabel="Curso" onChange={handleCourses} value={selectedCourse} required={true}>
          <option disabled value="">
            Selecione
          </option>
          {coursesOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>

        <Select
          textLabel="Forma de Ingresso"
          onChange={handleEntryForms}
          value={entryForm}
          required={true}
        >
          <option disabled value="">
            Selecione
          </option>
          {entryFormsOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <div hidden={entryForm === "enem-encceja"}>
          <Select
            textLabel="Processo seletivo"
            onChange={handleSelectedEntranceExam}
            value={selectedEntranceExam}
            required={entryForm != "enem-encceja"}
          >
            <option disabled value="">
              Selecione
            </option>
            {listVestibular.map((option, index) => (
              <option key={index} value={option.id}>
                {option.descricao}
              </option>
            ))}
          </Select>
          {notice ? (
            notice.length > 0 ? (
              <ButtonOptions classNameButton="h-6 rounded-md" value="S">
                <a
                  href={`https://inscricao.ftec.com.br/edital/${notice}`}
                  title="Abrir o Edital"
                  target="_blank"
                >
                  Veja o Edital
                </a>
              </ButtonOptions>
            ) : null
          ) : null}
        </div>
        <div hidden={entryForm != "enem-encceja"}>
          <div className="mb-2 font-light text-sm ">
            <Input
              valueInput={yearEnem || ""}
              textLabel="Informe o ano do Enem/Encceja"
              typeInput="text"
              onChange={setYearEnem}
              required={entryForm === "enem-encceja"}
            />
            <Input
              valueInput={codeEnemAndEncceja || ""}
              textLabel="Informe o código da inscrição do Enem/Encceja"
              typeInput="text"
              onChange={setCodeEnemAndEncceja}
              required={entryForm === "enem-encceja"}
            />
            <Input
              valueInput={objectiveTestGrade || ""}
              textLabel="Informe a nota da prova objetiva"
              typeInput="text"
              onChange={setObjectiveTestGrade}
              required={entryForm === "enem-encceja"}
            />
            <Input
              valueInput={redactionTestGrade || ""}
              textLabel="Informe a nota da redação"
              typeInput="text"
              onChange={setRedactionTestGrade}
              required={entryForm === "enem-encceja"}
            />
            <InputFile
              typeInput="file"
              textLabel="Selecione o comprovante do Enem"
              onChange={fileValidation}
              accept="application/pdf"
              required={entryForm === "enem-encceja"}
              onClick={handleSelectedEntranceExam}
            />
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
