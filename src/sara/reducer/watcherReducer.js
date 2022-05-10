import { CHANGE_SELECTED_CRYPTO, SET_CRYPTO_INFORMATION, SET_TWITTER_INFORMATION } from "../action/watcherActions";

const initialState = {
    cryptoName: "eth",
    cryptoInformation: {},
};

const watcherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CRYPTO_INFORMATION:
            return {
                ...state,
                cryptoInformation: action.value,
            }
        case CHANGE_SELECTED_CRYPTO: 
            return {
                ...state,
                cryptoName: action.value,
            }
        case SET_TWITTER_INFORMATION:
            return {
                ...state,
                twitterInformation: action.value
            }
        default: 
            return state;
    }
}

export default watcherReducer;