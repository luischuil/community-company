import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Row, Col, Avatar } from 'antd'


const EditProfile = (props) => {

    const { userAuth, onFinish } = props

    return (        
        <Row>
            <Col span={7}></Col>
            <Col span={10}>
                <h2>Editar perfil</h2>

                <Form
                    name="editProfile"
                    onFinish={ (values) => onFinish({
                        userId: userAuth.id,
                        name: values.name,
                        email: values.email
                    })}
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
    )
}

export default EditProfile