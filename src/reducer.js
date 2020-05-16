import { Action } from "./actions";

const initialState= {
    isLoading:false,
    loginInfo:{},
    cards:[],
}

function reducer(state=initialState,action){
    switch(action.type){
        case Action.registerLoginInfo:
            return {
                ...state,
                loginInfo:action.payload,
                isLoading:false,
            };
        case Action.saveCards:
            return{
                ...state,
                cards:action.payload,
                isLoading:false,
            };
        case Action.addCard:
            return{
                ...state,
                cards:[action.payload,...state.cards],
                isLoading:false,
            };
        case Action.removeCard:
        return{
            ...state,
            cards:state.cards.filter(card=>card.id!==action.payload),
            isLoading:false,
            };
        case Action.startLoading:
        return{
            ...state,
            isLoading:true,
            };
        default:
            return state;
    }
}

export default reducer;