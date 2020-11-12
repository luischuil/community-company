import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { List, Comment, Form, Input, Button, Popconfirm } from 'antd'

import { postComment, deleteSingleComment } from '../../redux/actions/commentActions'

const { TextArea } = Input

const Comments = (props) => {

    const { comments, postId, authUserId } = props

    const [authUserComment, setAuthUserComment] = useState('')

    const dispatch = useDispatch()

    const handleClick = () => {

        dispatch(postComment(
            {
                'date': '2020-06-28T00:05:55.367Z',
                'comment': authUserComment,
                'postId': parseInt(postId),
                'userId': authUserId
            }
        ))
        setAuthUserComment('')
    }

    const handleChange = e => {
        setAuthUserComment(e.target.value)
    };

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
                        onConfirm={() => { dispatch(deleteSingleComment(props.id)) }}
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
                <TextArea rows={4} value={authUserComment} onChange={handleChange} />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" type="primary" onClick={handleClick}>
                    Agregar comentario
                </Button>
            </Form.Item>
        </>
    )
}

export default Comments