import axios from 'axios'

const apiHost = 'http://localhost:9095'

const axiosService = axios.create()

axiosService.defaults.baseURL = apiHost

export { axiosService }
