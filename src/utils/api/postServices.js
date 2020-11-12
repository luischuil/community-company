import { axiosService } from './requestService'

export const getPosts = async () => {
    return axiosService.get(`/posts?_expand=user`).then(res => res.data)
}

export const getPostDetail = async (postId) => {
    return axiosService.get(`/posts/${postId}?_expand=user`).then(res => res.data)
}

export const deletePost = async (postId) => {
    return axiosService.delete(`/posts/${postId}`).then(res => res.data)
}