import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_CRYPTO_INFOMRATION, setCryptoInformation } from '../action/watcherActions'
import { getCryptoInformation } from '../api/watcherApi';

function* fetchCryptoInformation(action) {
    let response = yield call(getCryptoInformation, action.value)
    if(response !== undefined) {
        yield put(setCryptoInformation(response.data[0]));
    }
    
}

export default function* watcherSaga() {
    yield takeLatest(GET_CRYPTO_INFOMRATION, fetchCryptoInformation)
}