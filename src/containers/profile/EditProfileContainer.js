import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LayoutInternal from '../../utils/layout/LayoutInternal'
import { updateUserProfile } from '../../redux/actions/authUserActions'
import EditProfile from  '../../components/profile/EditProfile'


const EditProfileContainer = () => {

    const dispatch = useDispatch()
    const userAuth = useSelector(state => state.authUserReducer)

    const handleOnFinish = (formValues) => {
        dispatch(updateUserProfile(formValues))
    }

    return (
        <LayoutInternal>
            <EditProfile 
                userAuth={userAuth}
                onFinish={handleOnFinish}
            />
        </LayoutInternal>
    )
}

export default EditProfileContainer