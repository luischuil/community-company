import React, { useEffect } from 'react'
import { PageHeader } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Space } from 'antd';

import LayoutInternal from '../../utils/layout/LayoutInternal'
import Comments from '../comments/Comments'
import { LOGOUT_USER } from '../../redux/actions/authUserActions'
import { GET_POSTS_REQUEST } from '../../redux/actions/postActions'

import { MessageOutlined, LikeOutlined, DeleteOutlined } from '@ant-design/icons'
import { Tag, Typography, Row } from 'antd'

import { useParams } from "react-router-dom"

import './PostDetail.css'

const { Paragraph } = Typography;

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const content = (
    <>
        <Paragraph>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
        </Paragraph>

        <div>
            <IconText icon={LikeOutlined} text="25" key="list-vertical-like-o" />

            <IconText icon={MessageOutlined} text="11" key="list-vertical-message" />

            <IconText icon={DeleteOutlined} text="" key="list-vertical-delete" />

        </div>
    </>
);

const Content = ({ children, extraContent }) => {
    return (
        <Row>
            <div style={{ flex: 1 }}>{children}</div>
            <div className="image">{extraContent}</div>
        </Row>
    );
};


const PostDetail = () => {
    //const dispatch = useDispatch()
    //const posts = useSelector(state => state.postReducer.list)

    // useEffect(() => {
    //     dispatch({ type: GET_POSTS_REQUEST })
    // }, [])

    let { postId } = useParams(); // <==== Leer ID URL

    return (
        <LayoutInternal>

            <PageHeader
                title="Title"
                className="site-page-header"
                subTitle="2020-11-03"
                extra={[
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />,
                    <Tag color="blue">Luis Chuil</Tag>
                ]}
                onBack={() => window.history.back()}
            >
                <Content
                    extraContent={
                        <img
                            src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                            alt="content"
                            width="100%"
                        />
                    }
                >
                    {content}
                </Content>
            </PageHeader>
            
            <h3>Comentarios</h3>
            <Comments />

        </LayoutInternal>
    )
}

export default PostDetail