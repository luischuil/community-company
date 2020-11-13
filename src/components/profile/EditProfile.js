import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Row, Col, Avatar } from 'antd'
import LayoutInternal from '../../utils/layout/LayoutInternal'
import { updateUserProfile } from '../../redux/actions/authUserActions'


const EditProfile = () => {

    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.authUserReducer)

    const onFinish = (values) => {
        dispatch(updateUserProfile({
            userId: userAuth.id,
            name: values.name,
            email: values.email
        }))
    }

    return (
        <LayoutInternal>
            <Row>
                <Col span={7}></Col>
                <Col span={10}>
                    <h2>Editar perfil</h2>

                    <Form
                        name="editProfile"
                        onFinish={onFinish}
                        layout="vertical"
                        fields={[
                            {
                                name: ['name'],
                                value: userAuth.name
                            },
                            {
                                name: ['email'],
                                value: userAuth.email
                            }
                        ]}
                    >
                        <Form.Item>
                            <Avatar size="large" src={userAuth.avatar} />
                        </Form.Item>
                        <Form.Item
                            label="Nombre"
                            name="name"
                            rules={[{ required: true, message: 'Nombre requerido!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ type: 'email', required: true, message: 'Email requerido!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            <Button>
                                <Link to={{ pathname: '/posts' }}>
                                    Cancelar
                                </Link>                                
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Guardar
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={7}></Col>
            </Row>
        </LayoutInternal>
    )
}

export default EditProfile