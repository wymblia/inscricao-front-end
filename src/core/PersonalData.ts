export default class PersonalData {
    #cpf: string
    #birthDate: Date
    #deficiency: string
  
    constructor(cpf: string, birthDate: Date, deficiency: string) {
      this.#cpf = cpf
      this.#birthDate = birthDate
      this.#deficiency = deficiency
    }
  
    static createVoid() {
      return new PersonalData ('', null ,'')
    }
  
    get cpf () {
      return this.#cpf
    }
  
    get birthDate () {
      return this.#birthDate
    }
  
    get deficiency () {
      return this.#deficiency
    }
   
  }
  