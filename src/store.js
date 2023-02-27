import { createStore,combineReducers,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import  "./App.css";
import {todoreducers} from './reducers/todoReducers'

const reducers = combineReducers({
  Todo : todoreducers ,
    // all the reducers
});

const InitialeState = [];

const middleware = [thunk];

  const store = createStore(
    reducers,
    InitialeState,
    composeWithDevTools( applyMiddleware(...middleware))
)
export default store    ;