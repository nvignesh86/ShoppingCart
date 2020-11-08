export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER"

export const handleLogin = (payload) => {
    return {type: LOGIN_USER,payload:payload}
}

export const handleLogout = () => {
    return {type: LOGOUT_USER}
}
