import { combineReducers } from 'redux';
import sessionReducer from './session/sessionReducer';
import globalReducers from './global/globalReducers';
import financeReducers from './finance/financeReducers';

const rootReducer = combineReducers({
  session: sessionReducer,
  global: globalReducers,
  finance: financeReducers,
});

export default rootReducer;
