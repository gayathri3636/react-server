import * as Types from './types';

export const loginUser = () => {
    return {
        type: Types.LOGIN_USER
    }
}


export const registerUser = (obj) => {
    return {
        type: Types.REGISTER_USER,
        payload:obj
    }
}