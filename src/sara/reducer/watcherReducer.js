import { CHANGE_SELECTED_CRYPTO, SET_CRYPTO_INFORMATION } from "../action/watcherActions";

const initialState = {
    cryptoName: "eth",
};

const watcherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CRYPTO_INFORMATION:
            return {
                ...state,
                cryptoName: "bitcoin",
            }
        case CHANGE_SELECTED_CRYPTO: 
            return {
                ...state,
                cryptoName: action.value,
            }
        default: 
            return state;
    }
}

export default watcherReducer;