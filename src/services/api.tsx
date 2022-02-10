import axios from 'axios'

export const api = axios.create({ baseURL: 'http://inscricao-dev.ftec.com.br/api' })
