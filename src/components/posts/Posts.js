import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { List, Avatar, Space } from 'antd'
import LayoutInternal from '../../utils/layout/LayoutInternal'
import { LOGOUT_USER } from '../../redux/actions/authUserActions'
import { GET_POSTS_REQUEST } from '../../redux/actions/postActions'

import { MessageOutlined, LikeOutlined, DeleteOutlined } from '@ant-design/icons'


import { Button } from 'antd';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Post = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postReducer.list)

    const closeSesion = () => {
        dispatch({ type: LOGOUT_USER })
    }

    useEffect(() => {
        dispatch({ type: GET_POSTS_REQUEST })
    }, [])

    return (
        <LayoutInternal>
            <div>
                <Button onClick={() => { closeSesion() }}>Cerrar sesión</Button>
            </div>

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
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text={item.comments} key="list-vertical-message" />,
                            <IconText icon={DeleteOutlined} text="" key="list-vertical-delete" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.image}
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.user.avatar} />}
                            title={<Link to={`/posts/${item.id}`}>{item.title}</Link>}
                            description={item.date}
                        />
                        {item.summary}
                    </List.Item>
                )}
            />
        </LayoutInternal>
    )
}

export default Post