import React from 'react'
import { List, Comment, Form, Input, Button, Popconfirm } from 'antd'

const { TextArea } = Input

const Comments = (props) => {

    const { 
        comments, 
        postId, 
        authUserId,
        authUserComment,
        addComment,
        changeComment,
        deleteSingleComment
     } = props

    return (
        <>
            <List
                dataSource={comments}
                header={`${comments.length} ${comments.length > 1 ? 'repuestas' : 'respuesta'}`}
                itemLayout="horizontal"
                renderItem={props => <Comment
                    actions={(authUserId == props.userId) ? [<Popconfirm
                        title="¿Eliminar comentario?"
                        okText="Si"
                        cancelText="No"
                        onConfirm={() => { deleteSingleComment(props.id) }}
                    >
                        <span>Eliminar</span>
                    </Popconfirm>] : []}
                    key={props.id}
                    author={props.user.name}
                    avatar={props.user.avatar}
                    content={props.comment}
                    datetime={props.date}
                />}
            />

            <Form.Item>
                <TextArea rows={4} value={authUserComment} onChange={changeComment} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary" onClick={ () => {
                    addComment({
                        'date': '2020-06-28T00:05:55.367Z',
                        'comment': authUserComment,
                        'postId': parseInt(postId),
                        'userId': authUserId
                    })
                }}>
                    Agregar comentario
                </Button>
            </Form.Item>
        </>
    )
}

export default Comments