import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Address from "../core/Address"

export default function useAddress() {
  const { displayStep2, displayStep4 } = useContext(RegistrationContext)

  const [address, setAddress] = useState<Address>(Address.createVoid())

  function saveAddress(address: Address) {
    // displayStep4()
  }

  function backStepTwo() {
    displayStep2()
  }

  return {
    saveAddress,
    address,
    backStepTwo
  }
}
