// SAGA 
export const GET_CRYPTO_INFOMRATION = "SAGA_GET_CRYPTO_INFORMATION";

export const getCryptoInformation = value => ({
    type: GET_CRYPTO_INFOMRATION,
    value,
})

// REDUCER

export const SET_CRYPTO_INFORMATION = "REDUCER_SET_CRYPTO_INFORMATION";
export const SET_TWITTER_INFORMATION = "REDUCER_SET_TWITTER_INFORMATION";

export const setCryptoInformation = value => ({
    type: SET_CRYPTO_INFORMATION,
    value,
})

export const setTwitterInformation = value => ({
    type: SET_TWITTER_INFORMATION,
    value,
})

