import { Layout } from 'antd'
import HeaderLayout from './HeaderLayout'

import './LayoutInternal.css'

const { Header, Content, Footer } = Layout

const LayoutInternal = (props) => {

    return (
        <Layout className="layout">
            <Header>
                <HeaderLayout />
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