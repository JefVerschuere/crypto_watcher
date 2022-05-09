// SAGA 
export const GET_CRYPTO_INFOMRATION = "SAGA_GET_CRYPTO_INFORMATION";

export const getCryptoInformation = () => ({
    type: GET_CRYPTO_INFOMRATION,
})

// REDUCER

export const SET_CRYPTO_INFORMATION = "REDUCER_SET_CRYPTO_INFORMATION";
export const CHANGE_SELECTED_CRYPTO = "REDUCER_CHANGE_SELECETED_CRYPTO";

export const setCryptoInformation = information => ({
    type: SET_CRYPTO_INFORMATION,
    information,
})

export const changeSelectedCrypto = value => ({
    type: CHANGE_SELECTED_CRYPTO,
    value,
})

