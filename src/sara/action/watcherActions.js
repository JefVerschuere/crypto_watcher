// SAGA 
export const GET_CRYPTO_INFOMRATION = "SAGA_GET_CRYPTO_INFORMATION";

export const getCryptoInformation = () => ({
    type: GET_CRYPTO_INFOMRATION,
})

// REDUCER

export const SET_CRYPTO_INFORMATION = "REDUCER_SET_CRYPTO_INFORMATION";

export const setCryptoInformation = information => ({
    type: SET_CRYPTO_INFORMATION,
    information,
})