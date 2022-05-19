import React, { useContext } from "react"
import Form from "../components/Form"
import FormCourse from "../components/FormCourse"
import FormPersonalData from "../components/FormPersonalData"
import { RegistrationContext } from "../contexts/RegistrationContext"
import useLeads from "../hooks/useLeads"
import usePersonalData from "../hooks/usePersonalData"
import useAddress from "../hooks/useAddress"
import useCourse from "../hooks/useCourse"
import useCourseResume from "../hooks/useCourseResume"
import FormAddress from "../components/FormAddress"
import FormResume from "../components/FormCourseResume"
import Steps from "../components/Steps"
import { Helmet } from "react-helmet"

import Script from 'next/script'

export default function Home() { 
  const { lead, saveLead } = useLeads()
  const { personalData, savePersonalData, backStepOne } = usePersonalData()
  const { address, saveAddress, backStepTwo } = useAddress()
  const { course, nextStepFive, backStepThree } = useCourse()
  const { nextStepSix, backStepFour } = useCourseResume()

  const { stepOneVisible, stepTwoVisible, stepThreeVisible, stepFourVisible, stepFiveVisible } = useContext(RegistrationContext)

  return (
    <>
      <div>
        <Helmet>
          <title>Inscrição</title>
        </Helmet>
      </div>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KMHNNNP');
        `}
      </Script>

      <div hidden>
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMHNNNP" height="0" width="0" ></iframe>
          </noscript>
      </div>

      {stepOneVisible ? (

        <Steps
          form={
            <Form
              lead={lead}
              leadChange={saveLead}
              />
            }
            invisible={"hidden"}
        />
      )
        :
        (
          stepTwoVisible ? (
            <Steps
              form={
                <FormPersonalData
                  personalData={personalData}
                  personalDataChange={savePersonalData}
                  backPage={backStepOne}
                />
              }
            />
          )
            :
            (
              stepThreeVisible ? (
                <Steps
                  form={
                    <FormAddress
                      address={address}
                      addressChange={saveAddress}
                      backPage={backStepTwo}
                    />
                  }
                  classNameStep2={"step-primary"}
                />
              )
                :
                (
                  stepFourVisible ? (
                    <Steps
                      form={
                        <FormCourse
                          course={course}
                          courseChange={nextStepFive}
                          backPage={backStepThree}
                        />
                      }
                      classNameStep2={"step-primary"}
                      classNameStep3={"step-primary"}
                    />
                  )
                    :
                    (
                      stepFiveVisible ? (
                        <Steps
                        form={
                        <FormResume
                          courseResumeChange={nextStepSix}
                          backPage={backStepFour}
                        />
                        }
                        classNameStep2={"step-primary"}
                        classNameStep3={"step-primary"}
                        classNameStep4={"step-primary"}
                      />
                      )
                        : (
                          <h1 className="bg-green-300">uhul</h1>
                        )
                    )
                )
            )
        )}
    </>
  )
}

