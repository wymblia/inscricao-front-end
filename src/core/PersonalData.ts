export default class PersonalData {
  #cpf: string
  #birthDate: Date
  #disabilityRelief: string

  constructor(cpf: string, birthDate: Date, disabilityRelief: string) {
    this.#cpf = cpf
    this.#birthDate = birthDate
    this.#disabilityRelief = disabilityRelief
  }

  static createVoid() {
    return new PersonalData("", null, "")
  }

  get cpf() {
    return this.#cpf
  }

  get birthDate() {
    return this.#birthDate
  }

  get providence() {
    return this.#disabilityRelief
  }
}
