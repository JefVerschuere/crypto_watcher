import { die } from 'immer/dist/internal';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* fetchCryptoInformation(action) {
    die;
}


function* watcherSaga() {
    yield takeLatest("GET_CRYPTO_INFOMRATION", fetchCryptoInformation)
}

export default watcherSaga;