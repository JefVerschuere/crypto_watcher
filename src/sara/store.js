import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import watcherReducer from '../sara/reducer/watcherReducer';


let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];


const store = configureStore({
  reducer: {
    watcherReducer
  },
  middleware
})

export default store;