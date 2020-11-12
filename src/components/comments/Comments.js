import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { List, Comment, Form, Input, Button } from 'antd'

import { postComment } from '../../redux/actions/commentActions'

const { TextArea } = Input;

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
                    actions={(authUserId==props.userId)?[<span onClick={ () => {console.log(props.id)}}>Eliminar</span>]:[]}
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