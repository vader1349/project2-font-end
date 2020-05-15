import { Action } from "./actions";

const initialState= {
    loginInfo:{},
    cards:[],
}

function reducer(state=initialState,action){
    switch(action.type){
        case Action.registerLoginInfo:
            return {
                ...state,
                loginInfo:action.payload,
            };
        case Action.saveCards:
            return{
                ...state,
                cards:action.payload,
            };
        case Action.addCard:
            return{
                ...state,
                cards:[action.payload,...state.cards],
            };
        case Action.removeCard:
        return{
            ...state,
            cards:state.cards.filter(card=>card.id!==action.payload),
            };
        default:
            return state;
    }
}

export default reducer;