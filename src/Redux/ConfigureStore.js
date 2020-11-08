import {createStore, applyMiddleware} from "redux";
import rootReducer from './Reducer/RootReducer';
import createSagaMiddleware from 'redux-saga';
import SagaConfig from './SagaConfig';

const sagaMiddleware = createSagaMiddleware();
const ReduxStore = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(SagaConfig);

export default ReduxStore;