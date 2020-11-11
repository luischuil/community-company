import React from 'react'
import { List, Comment } from 'antd'

const Comments = (props) => {

    const { comments } = props

    return (
        <List
            dataSource={comments}
            header={`${comments.length} ${comments.length > 1 ? 'repuestas' : 'respuesta'}`}
            itemLayout="horizontal"
            renderItem={props => <Comment
                author={props.user.name}
                avatar={props.user.avatar}
                content={props.comment}
                datetime={props.date}
            />}
        />
    )
}

export default Comments