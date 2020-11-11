import { axiosService } from './requestService'

export const getComments = async (postId) => {
    return axiosService.get(`/comments?postId=${postId}&_expand=user`).then(res => res.data)
}
