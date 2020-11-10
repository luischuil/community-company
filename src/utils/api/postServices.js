import { axiosService } from './requestService'

export const getPosts = async () => {
    return axiosService.get(`/posts?_expand=user`).then(res => res.data)
}