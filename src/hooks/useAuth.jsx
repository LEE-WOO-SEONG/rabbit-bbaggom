import { useSelector, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

function useAuth() {
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if (token === null) {
    dispatch(push('/preview'));
  }
}

export default useAuth;
