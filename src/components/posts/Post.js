import React from 'react'
import { Link } from "react-router-dom"
import { List, Avatar, Space, Popconfirm } from 'antd'

import { MessageOutlined, LikeOutlined, DeleteOutlined } from '@ant-design/icons'


const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)

const Post = (props) => {

    const { post, deletePost, authUserId } = props

    let actions = [
        <IconText icon={LikeOutlined} text={post.likes} key="list-vertical-like-o" />,
        <IconText icon={MessageOutlined} text={post.comments} key="list-vertical-message" />,
    ]

    if (authUserId === post.userId) {
        actions.push(<Popconfirm
            title="¿Eliminar post?"
            okText="Si"
            cancelText="No"
            onConfirm={() => { deletePost(post.id) }}
        >
            <span>
                <IconText icon={DeleteOutlined} text="" key="list-vertical-delete" />
            </span>
        </Popconfirm>)
    }

    return (
        <List.Item
            key={post.id}
            actions={actions}
            extra={
                <img
                    width={272}
                    alt="logo"
                    src={post.image}
                />
            }
        >
            <List.Item.Meta
                avatar={<Avatar src={post.user.avatar} />}
                title={<Link to={`/posts/${post.id}`}>{post.title}</Link>}
                description={post.date}
            />
            {post.summary}
        </List.Item>
    )

}

export default Post