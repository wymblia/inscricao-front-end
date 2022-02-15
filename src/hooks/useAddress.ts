import { useContext, useState } from "react"
import { RegistrationContext } from "../contexts/RegistrationContext"
import Address from "../core/Address"
import { api } from "../services/api"

export default function useAddress () {
  const { displayStep4, displayStep5 } = useContext(RegistrationContext)
  
  const [address, setAddress] = useState<Address>(Address.createVoid())

  function saveAddress (address: Address) {
    // api.post('/leads', {
    //   name: lead.name,
    //   email: lead.email,
    //   phone: lead.phone
    // })
    // .then (response => {
    //   console.log(response.data);
    // })
    displayStep4()
  }

  return {
    saveAddress,
    address
  }
}
