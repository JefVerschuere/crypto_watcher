import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watcherReducer from '../sara/reducer/watcherReducer';
import watcherSaga from "./saga/watcherSagas";


let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


const store = configureStore({
  reducer: {
    watcherReducer
  },
  middleware
})

sagaMiddleware.run(watcherSaga);

export default store;