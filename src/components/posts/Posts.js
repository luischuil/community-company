import React from 'react'
import LayoutInternal from '../../utils/layout/LayoutInternal'
import { useDispatch } from 'react-redux'
import { LOGOUT_USER } from '../../redux/actions/authUserActions'

import { Button } from 'antd';

const Post = () => {
    const dispatch = useDispatch()

    const cerrarSesion = () => {
        dispatch({ type: LOGOUT_USER })
    }

    return (
        <LayoutInternal>
            <div>
                <Button onClick={() => { cerrarSesion() }}>Cerrar sesión</Button>
            </div>
        </LayoutInternal>
    )
}

export default Post