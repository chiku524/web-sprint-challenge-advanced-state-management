import redux from 'redux';
import {combineReducers} from 'redux';
import {dataReducer} from './dataReducer'
import {smurfReducer} from './smurfReducer';

const rootReducer = combineReducers({dataReducer, smurfReducer})

export default rootReducer;