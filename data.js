import {createStore,applyMiddleware,compose} from 'redux'
 import rootReducers from './reducers'
 import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const appStore= createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)) )
export default appStore
