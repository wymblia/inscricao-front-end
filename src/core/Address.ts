export default class Address {
    #cep: string
    #state: string
    #city: string
    #street: string
    #number: string

  
    constructor(cep: string, state: string, city: string, street: string, number: string) {
      this.#cep = cep
      this.#state = state
      this.#city = city
      this.#street = street
      this.#number = number
    }
  
    static createVoid() {
      return new Address ('','','','','')
    }
  
    get cep () {
      return this.#cep
    }
  
    get state () {
      return this.#state
    }
  
    get city () {
      return this.#city
    }

    get street () {
        return this.#street
      }

    get number () {
        return this.#number
    }
   
  }
  