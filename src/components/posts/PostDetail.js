import React from 'react'
import { PageHeader, Avatar, Space, Tag, Typography, Row } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'
import Comments from '../comments/Comments'


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

const PostDetail = (props) => {

    const {
        postId,
        post,
        comments,
        authUserId,
        authUserComment,
        onAddComment,
        onChangeComment,
        onDeleteSingleComment
    } = props

    return (
        <>
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

                        {authUserId === post.userId && <IconText icon={StarOutlined} text="" key="list-vertical-delete" />}
                    </div>

                </Content>
            </PageHeader>

            <h3>Comentarios</h3>
            <Comments 
                comments={comments} 
                postId={postId} 
                authUserId={authUserId} 
                authUserComment={authUserComment}
                addComment={onAddComment}
                changeComment={onChangeComment}
                deleteSingleComment={onDeleteSingleComment}
            />
        </>
    )
}

export default PostDetail