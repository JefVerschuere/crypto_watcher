// SAGA 
export const GET_CRYPTO_INFOMRATION = "SAGA_GET_CRYPTO_INFORMATION";

export const getCryptoInformation = cryptoName => ({
    type: GET_CRYPTO_INFOMRATION,
    cryptoName,
})

// REDUCER

