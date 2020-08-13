import { createActions, handleActions } from 'redux-actions';

const options = {
  prefix: 'rabbit-bbaggom/rabbit',
};

// action + action creator
export const { start, success, fail } = createActions(
  {
    SUCCESS: rabbits => ({ rabbits }),
  },
  'START',
  'FAIL',
  options
);

// initialstate
const initialState = {
  loading: false,
  error: null,
  rabbits: null,
};

// action handler
const rabbitReducer = handleActions(
  {
    START: () => ({
      loading: true,
      error: null,
      rabbits: null,
    }),
    SUCCESS: (state, action) => ({
      loading: false,
      error: null,
      rabbits: action.payload.rabbits,
    }),
    FAIL: (state, action) => ({
      loading: false,
      error: action.payload,
      rabbits: null,
    }),
  },
  initialState,
  options
);

export default rabbitReducer;
