import { axiosService } from './requestService'

export const getAuthUser = async (userId) => {
    return axiosService.get(`/users/${userId}`).then(res => res.data)
}