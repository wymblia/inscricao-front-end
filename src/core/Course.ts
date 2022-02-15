export default class Course {
    #entryForm: string
    #yearEnem?: string
    #nameCourse: string
  
    constructor(entryForm: string, yearEnem: string, nameCourse: string) {
      this.#entryForm = entryForm
      this.#yearEnem = yearEnem
      this.#nameCourse = nameCourse
    }
  
    static createVoid() {
      return new Course ('', null ,'')
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
