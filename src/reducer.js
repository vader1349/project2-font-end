import { Action } from "./actions";

const initialState= {
    loginInfo:[],
}

function reducer(state=initialState,action){
    switch(action.type){
        case Action.registerLoginInfo:
            return {
                ...state,
                loginInfo:action.payload,
            };
        default:
            return state;
    }
}

export default reducer;