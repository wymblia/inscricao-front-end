import React, { Fragment, useContext } from "react"
import ButtonBack from "./ButtonBack"
import Script from "next/script"
interface CongratulationsProps {
  congratulationsChange?: () => void
  backPage?: () => void
}

export default function FormCongratulations(props: CongratulationsProps) {
  return (
    <Fragment>
      <div className="md:max-w-[450px] m-auto">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-2">
          <div className="flex justify-center text-center border-1 border-gray-300 rounded-t-box p-7 bg-blue-600 text-gray-100">
            <p className="text-3xl font-medium">Parabéns!</p>
          </div>
          <div className="text-center border-1 border-gray-300 rounded-b-box p-7 bg-gradient-to-r bg-blue-100 text-gray-800">
            <div className="text-xl py-6 font-semibold">
              <p className="pl-9 md:pl-0">Sua inscrição foi confirmada!</p>
              <svg
                className="h-12 w-15 text-green-400 -mt-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-lg pb-8">Você deu o primeiro passo para o seu futuro.</p>
            <p className="text-md pb-6">
              Encaminhamos no seu e-mail todas as informações necessárias.
            </p>
          </div>
        </div>
      </div>
      <div className="md:min-w-[550px]">
        <div className="flex flex-col mt-12"></div>
        <div className="flex flex-col mt-2">
          <ButtonBack onClick={() => props.backPage()}>Voltar</ButtonBack>
        </div>
      </div>
      <Script id="facebook-pixel">
        {`
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);
        t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; 
        s.parentNode.insertBefore(t,s)}(window, document,'script', 
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '843519542354455'); fbq('track', 'PageView');
      `}
      </Script>
    </Fragment>
  )
}
