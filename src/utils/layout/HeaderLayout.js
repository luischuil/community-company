import { Menu, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../../redux/actions/authUserActions'


const HeaderLayout = () => {

    const dispatch = useDispatch()

    const authUser = useSelector(state => state.authUserReducer)

    const menu = (
        <Menu>
            <Menu.Item key="1">
                <Link to={{ pathname: '/profile' }}>
                    Editar perfil
                </Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={() => { closeSesion() }}>
                Cerrar sesión
          </Menu.Item>
        </Menu>
    )

    const closeSesion = () => {
        dispatch(logoutUser())
    }

    return (
        <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
            {authUser.name}
        </Dropdown.Button>
    )
}

export default HeaderLayout