// SAGA 
export const GET_CRYPTO_INFOMRATION = "SAGA_GET_CRYPTO_INFORMATION";

export const getCryptoInformation = value => ({
    type: GET_CRYPTO_INFOMRATION,
    value,
})

// REDUCER

export const SET_CRYPTO_INFORMATION = "REDUCER_SET_CRYPTO_INFORMATION";
export const CHANGE_SELECTED_CRYPTO = "REDUCER_CHANGE_SELECETED_CRYPTO";
export const SET_TWITTER_INFORMATION = "REDUCER_SET_TWITTER_INFORMATION";

export const setCryptoInformation = value => ({
    type: SET_CRYPTO_INFORMATION,
    value,
})

export const changeSelectedCrypto = value => ({
    type: CHANGE_SELECTED_CRYPTO,
    value,
})

export const setTwitterInformation = value => ({
    type: SET_TWITTER_INFORMATION,
    value,
})

