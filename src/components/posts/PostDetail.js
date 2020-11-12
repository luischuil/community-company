import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { PageHeader, Avatar, Space, Tag, Typography, Row } from 'antd';
import { MessageOutlined, LikeOutlined, DeleteOutlined } from '@ant-design/icons'

import LayoutInternal from '../../utils/layout/LayoutInternal'
import { getPostDetail } from '../../redux/actions/postActions'
import { getComments } from '../../redux/actions/commentActions'
import Comments from '../comments/Comments'

import './PostDetail.css'

const { Paragraph } = Typography;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
)

const Content = ({ children, extraContent }) => {
    return (
        <Row>
            <div style={{ flex: 1 }}>{children}</div>
            <div className="image">{extraContent}</div>
        </Row>
    )
}

const PostDetail = () => {
    const { postId } = useParams()
    const dispatch = useDispatch()

    const post = useSelector(state => state.postReducer.detail)
    const comments = useSelector(state => state.commentReducer.list)
    const authUserId = useSelector(state => state.authUserReducer.id)

    useEffect(() => {
        dispatch(getPostDetail(postId))
        dispatch(getComments(postId))
    }, [])

    return (
        <LayoutInternal>

            <PageHeader
                title={post.title}
                className="site-page-header"
                subTitle={post.date}
                extra={[
                    <Avatar src={post.user.avatar} />,
                    <Tag>{post.user.name}</Tag>
                ]}
                onBack={() => window.history.back()}
            >
                <Content
                    extraContent={
                        <img
                            src={post.image}
                            alt={post.title}
                            width="100%"
                        />
                    }
                >
                    <Paragraph>{post.description}</Paragraph>

                    <div>
                        <IconText icon={LikeOutlined} text={post.likes} key="list-vertical-like-o" />

                        <IconText icon={MessageOutlined} text={post.comments} key="list-vertical-message" />

                        {authUserId === post.userId && <IconText icon={DeleteOutlined} text="" key="list-vertical-delete" />}
                    </div>

                </Content>
            </PageHeader>

            <h3>Comentarios</h3>
            <Comments comments={comments} postId={postId} authUserId={authUserId} />

        </LayoutInternal>
    )
}

export default PostDetail