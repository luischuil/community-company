import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { List, Avatar, Space, Popconfirm } from 'antd'
import LayoutInternal from '../../utils/layout/LayoutInternal'
import { getPosts, deletePost } from '../../redux/actions/postActions'

import { MessageOutlined, LikeOutlined, DeleteOutlined } from '@ant-design/icons'


const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)

const Post = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.postReducer.list)
    const authUserId = useSelector(state => state.authUserReducer.id)

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
                renderItem={item => {

                    let actions = [
                        <IconText icon={LikeOutlined} text={item.likes} key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text={item.comments} key="list-vertical-message" />,
                    ]

                    if (authUserId === item.userId) {
                        actions.push(<Popconfirm
                            title="¿Eliminar post?"
                            okText="Si"
                            cancelText="No"
                            onConfirm={() => {
                                dispatch(deletePost(item.id))
                            }}
                        >
                            <span>
                                <IconText icon={DeleteOutlined} text="" key="list-vertical-delete" />
                            </span>
                        </Popconfirm>)
                    }

                    return (
                        <List.Item
                            key={item.id}
                            actions={actions}
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
                    )
                }}
            />
        </LayoutInternal>
    )
}

export default Post