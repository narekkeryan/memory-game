import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxThunk)
);

export default store;