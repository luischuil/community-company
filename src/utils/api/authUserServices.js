import { axiosService } from './requestService'

export const getAuthUser = async (userId) => {
    return axiosService.get(`/users/${userId}`).then(res => res.data)
}

export const editUserProfile = async (userId, userInfo) => {
    return axiosService.patch(`/users/${userId}`, { ...userInfo }).then(res => res.data)
}