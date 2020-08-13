import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reducer from '../redux/modules/reducer';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const preLoadedState = {
  auth: {
    loading: false,
    error: null,
    token: null, // 로컬스토리지에서 받아서 넣어줘야함
    user: null,
  },
  rabbit: {
    loading: false,
    error: null,
    rabbits: null,
  },
};

export default function create() {
  const store = createStore(
    reducer(history),
    preLoadedState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );

  // sagaMiddleware.run(rootSaga);
  return store;
}
