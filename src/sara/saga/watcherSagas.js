import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_CRYPTO_INFOMRATION, setCryptoInformation, setTwitterInformation } from '../action/watcherActions'
import { getCryptoInformation, getTwitterInformation } from '../api/watcherApi';

function* fetchCryptoInformation(action) {
    let response = yield call(getCryptoInformation, action.value)
    let twitterResponse = yield call (getTwitterInformation, action.value);
    
    if(response !== undefined) {
        yield put(setCryptoInformation(response.data[0]));
    }
    if (twitterResponse !== undefined) {
        console.log(twitterResponse);
        yield put(setTwitterInformation(twitterResponse.data));
    }
}

export default function* watcherSaga() {
    yield takeLatest(GET_CRYPTO_INFOMRATION, fetchCryptoInformation)
}