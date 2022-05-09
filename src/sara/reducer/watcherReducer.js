import { SET_CRYPTO_INFORMATION } from "../action/watcherActions";

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
        default: 
            return state;
    }
}

export default watcherReducer;