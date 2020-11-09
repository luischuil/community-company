import axios from 'axios'

const apiHost = 'http://localhost:9095'

const axiosService = axios.create()

axiosService.defaults.baseURL = apiHost
axiosService.defaults.headers.common['Content-type'] = 'application/json'

export { axiosService }
