import { useAuth } from 'modules/common/hooks'
import { Login } from 'modules/user/pages'
import React from 'react'

const RequiresLogIn = ({ children }) => {
    const { userInfo, authInfo } = useAuth()

    if (!authInfo && !userInfo) {
        return <Login />
    }

    return children
}

export default RequiresLogIn