import { CHANGE_SELECTED_CRYPTO, SET_CRYPTO_INFORMATION, SET_TWITTER_INFORMATION } from "../action/watcherActions";

const initialState = {
    cryptoName: "eth",
    cryptoInformation: {},
    twitterInformation: {},
    isFetched: false,
    isTwitterFetched: false,
};

const watcherReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CRYPTO_INFORMATION:
            return {
                ...state,
                cryptoInformation: action.value,
                isFetched: true,
            }
        case CHANGE_SELECTED_CRYPTO: 
            return {
                ...state,
                cryptoName: action.value,
            }
        case SET_TWITTER_INFORMATION:
            return {
                ...state,
                twitterInformation: action.value,
                isTwitterFetched: true
            }
        default: 
            return state;
    }
}

export default watcherReducer;