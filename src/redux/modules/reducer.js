import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import rabbit from './rabbit';
import auth from './auth';

const reducer = history =>
  combineReducers({
    auth,
    rabbit,
    router: connectRouter(history),
  });

export default reducer;
