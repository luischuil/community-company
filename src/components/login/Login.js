import React from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Layout } from 'antd'
import { Form, Input, Button } from 'antd';
import { GET_AUTH_USER_REQUEST } from '../../redux/actions/authUserActions'

import './Login.css'

const Login = () => {
    const { Content } = Layout;
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.authUserReducer.isAuthenticated)

    const onFinish = values => {
        dispatch({
            type: GET_AUTH_USER_REQUEST,
            payload: values.user_id
        })
    };

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