import { useState } from "react";

export default function useVisiblePart () {
  const [visible, setVisible] = useState<'step1' | 'step2' | 'step3' | 'step4'>('step1')
  
  const displayStep1 = () => setVisible('step1')
  const displayStep2 = () => setVisible('step2')
  const displayStep3 = () => setVisible('step3')
  const displayStep4 = () => setVisible('step4')

  return {
    stepOneVisible: visible === 'step1',
    stepTwoVisible: visible === 'step2',
    stepThreeVisible: visible === 'step3',
    stepFourVisible: visible === 'step4',
    displayStep1,
    displayStep2,
    displayStep3,
    displayStep4,
  }
}
