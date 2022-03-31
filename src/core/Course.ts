export default class Course {
    #modality: string
    #unity: string
    #entryForm: string
    #yearEnem?: string
    #nameCourse: string
  
    constructor(modality: string, unity: string, entryForm: string, yearEnem: string, nameCourse: string) {
      this.#modality = modality
      this.#unity = unity
      this.#entryForm = entryForm
      this.#yearEnem = yearEnem
      this.#nameCourse = nameCourse
    }
  
    static createVoid() {
      return new Course ('', '', '', '' ,'')
    }

    get modality () {
      return this.#modality
    }
  
    get unity () {
      return this.#unity
    }

    get entryForm () {
      return this.#entryForm
    }
  
    get yearEnem () {
      return this.#yearEnem
    }
  
    get nameCourse () {
      return this.#nameCourse
    }
   
  }
