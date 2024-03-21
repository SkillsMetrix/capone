
import {combineReducers} from 'redux'
import CounterReducer from './CounterReducer'

const rootReducer= combineReducers({
    cr:CounterReducer
})
export default rootReducer