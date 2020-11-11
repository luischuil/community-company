import { Layout, Menu } from 'antd';

import './LayoutInternal.css'

const { Header, Content, Footer } = Layout;

const LayoutInternal = (props) => {

    return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>                
                <div className="site-layout-content">
                    {props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Buho contable ©2020 Created with Ant Design</Footer>
        </Layout>
    )

}

export default LayoutInternal