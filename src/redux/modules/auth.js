import { createActions, handleActions } from 'redux-actions';

const options = {
  prefix: 'rabbit-bbaggom/auth',
};

// action + action creator
export const { start, success, fail } = createActions(
  {
    SUCCESS: (user, token) => ({ user, token }),
  },
  'START',
  'FAIL',
  options
);

// initialstate
const initialState = {
  loading: true,
  error: null,
  token: null,
  user: null,
};

// action handler
const authReducer = handleActions(
  {
    START: () => ({
      loading: true,
      error: null,
      token: null,
      user: null,
    }),
    SUCCESS: (state, action) => ({
      loading: false,
      error: null,
      token: action.payload.token,
      user: action.payload.user,
    }),
    FAIL: (state, action) => ({
      loading: false,
      error: action.payload,
      token: null,
      user: null,
    }),
  },
  initialState,
  options
);

export default authReducer;
