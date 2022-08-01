export default class Lead {
  #name: string
  #email: string
  #phone: string

  constructor(name: string, email: string, phone: string) {
    this.#name = name
    this.#email = email
    this.#phone = phone
  }

  static createVoid() {
    return new Lead("", "", "")
  }

  get name() {
    return this.#name
  }

  get email() {
    return this.#email
  }

  get phone() {
    return this.#phone
  }
}
