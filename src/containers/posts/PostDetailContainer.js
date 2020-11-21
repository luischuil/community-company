import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import LayoutInternal from '../../utils/layout/LayoutInternal'
import { getPostDetail } from '../../redux/actions/postActions'
import { getComments, postComment, deleteSingleComment } from '../../redux/actions/commentActions'
import PostDetail from '../../components/posts/PostDetail'

import './PostDetailContainer.css'


const PostDetailContainer = () => {
    const { postId } = useParams()
    const dispatch = useDispatch()
    const [authUserComment, setAuthUserComment] = useState('')

    const post = useSelector(state => state.postReducer.detail)
    const comments = useSelector(state => state.commentReducer.list)
    const authUserId = useSelector(state => state.authUserReducer.id)

    const handleAddComment = (postInfo) => {
        dispatch(postComment(postInfo))
        setAuthUserComment('')
    }

    const handleChangeComment = e => {
        setAuthUserComment(e.target.value)
    }

    const handleDeleteSingleComment = (commentId) => {
        dispatch(deleteSingleComment(commentId))
    }

    useEffect(() => {
        dispatch(getPostDetail(postId))
        dispatch(getComments(postId))
    }, [])

    return (
        <LayoutInternal>
            <PostDetail
                postId={postId}
                post={post}
                comments={comments}
                authUserId={authUserId}
                authUserComment={authUserComment}
                onAddComment={handleAddComment}
                onChangeComment={handleChangeComment}
                onDeleteSingleComment={handleDeleteSingleComment}
            />
        </LayoutInternal>
    )
}

export default PostDetailContainer