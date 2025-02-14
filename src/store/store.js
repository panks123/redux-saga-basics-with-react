import { createStore, applyMiddleware} from 'redux';
import { userReducer } from './reducer';
import createSagaMiddleware from 'redux-saga';
import { watchUserSaga } from '../state/saga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(watchUserSaga);

export default store;