import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, Avatar, Space } from 'antd';

import LayoutInternal from '../../utils/layout/LayoutInternal'
import { LOGOUT_USER } from '../../redux/actions/authUserActions'
import { GET_POSTS_REQUEST } from '../../redux/actions/postActions'

import { MessageOutlined, LikeOutlined } from '@ant-design/icons'
import { Comment, Tooltip } from 'antd';

import { Button } from 'antd';


const Comments = () => {
    /*
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postReducer.list)
       

    useEffect(() => {
        dispatch({ type: GET_POSTS_REQUEST })
    }, [])
    */

    return (
        <Comment
            author={<a>Han Solo</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            content={
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully
                    and efficiently.
                </p>
            }
            datetime={
                <span>2017-05-16</span>
            }
        />
    )
}

export default Comments