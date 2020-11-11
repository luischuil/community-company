import React from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Layout, Form, Input, Button } from 'antd'
import { getAuthUser } from '../../redux/actions/authUserActions'

import './Login.css'

const Login = () => {
    const { Content } = Layout;
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.authUserReducer.isAuthenticated)

    const onFinish = values => {
        dispatch(getAuthUser(values.user_id))
    }

    if (isAuthenticated) {
        return (<Redirect to="/posts" />)
    } else {
        return (
            <Layout className="page-login">
                <Content>
                    <div className="login">
                        <Form
                            name="basic"
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="ID de Usuario"
                                name="user_id"
                                rules={[{ required: true, message: 'Por favor ingrese su ID de Usuario!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Iniciar sesión
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </Layout>
        )
    }

}

export default Login