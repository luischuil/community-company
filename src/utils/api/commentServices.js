import { axiosService } from './requestService'

export const getComments = async (postId) => {
    return axiosService.get(`/comments?postId=${postId}&_expand=user`).then(res => res.data)
}

export const postComment = async (data) => {    
    return axiosService.post(`/comments`, data={...data}).then(res => res.data)
}

export const deleteSingleComment = async (postId) => {
    return axiosService.delete(`/comments/${postId}`).then(res => res.data)
}