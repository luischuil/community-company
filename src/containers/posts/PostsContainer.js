import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'antd'
import LayoutInternal from '../../utils/layout/LayoutInternal'
import { getPosts, deletePost } from '../../redux/actions/postActions'
import Post from '../../components/posts/Post'


const PostContainer = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postReducer.list)
    const authUserId = useSelector(state => state.authUserReducer.id)

    const handleDeletePost = (postId) => {
        dispatch(deletePost(postId))
    }

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    return (
        <LayoutInternal>
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={posts}
                renderItem={item => (
                    <Post 
                        post={item}
                        deletePost={handleDeletePost} 
                        authUserId={authUserId}
                    />                    
                )}
            />
        </LayoutInternal>
    )
}

export default PostContainer