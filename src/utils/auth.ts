import { selectUser } from 'store/core/selectors';
import { useSelector } from 'react-redux';

export const useAuthHandler = (): boolean => {
  const user = useSelector(selectUser);
  const isAuthenticated = user !== undefined;
  return isAuthenticated;
};
