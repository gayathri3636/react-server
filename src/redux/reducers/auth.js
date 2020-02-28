import * as Types from '../actions/types';

const initialState = {
    signUpUsersList : [],
    result: {},
    registeredUserDetails: {},
    user: {
        name:'',
        email: ''
    }
}

const loginUserSuccess = (state, action) => {
    console.log("from redux" +JSON.stringify(action))
    let newState = {...state}
    if(action.result !== undefined){
        newState = Object.assign({}, state, {
            signUpUsersList: Object.assign([], action.result)
        })
    }
    return {...newState};
}

const loginUserError = (state, action) => {
    let newState = {...state}
    return {...newState};
}


//Registration details
const registerNewUser = (state, action) => {
    let newState = {...state};
    if(action.payload !== undefined) {
        newState = Object.assign({}, state, {
            registeredUserDetails:Object.assign([], action.payload)
        })
    }
    console.log("STATE" + JSON.stringify(newState));
    return {...newState};
}

const registerUserSuccess = (state, action) => {
    let newState = {...state};
    return {...newState};
}


const registerUserError = (state) => {
    let newState = {...state}
    return {...state}
}


export default (state = initialState, action) => {
    switch(action.type) {
        case Types.LOGIN_USER:
            return state;
        case Types.LOGIN_USER_SUCCESS:
            return loginUserSuccess(state, action)
        case Types.LOGIN_USER_ERROR:
            return loginUserError(state)
        case Types.REGISTER_USER:
            return registerNewUser(state, action);
        case Types.REGISTER_USER_SUCCESS:
            return registerUserSuccess(state, action);
        case Types.REGISTER_USER_ERROR:
            return registerUserError(state);
        default:
            return state;
    }
}