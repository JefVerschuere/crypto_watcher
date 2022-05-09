import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_CRYPTO_INFOMRATION } from '../action/watcherActions'

function* fetchCryptoInformation(action) {
    console.log(GET_CRYPTO_INFOMRATION);
}


export default function* watcherSaga() {
    yield takeLatest(GET_CRYPTO_INFOMRATION, fetchCryptoInformation)
}