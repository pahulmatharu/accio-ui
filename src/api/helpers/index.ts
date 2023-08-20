import { AxiosError } from 'axios';
import { logout } from 'store/core/saga-actions';


export const handleUnauthorized = (error: unknown, dispatch: any) => {
  if (error instanceof AxiosError) {
    if (error.response?.status === 401) {
      dispatch(logout());
    }
  }
  throw error;
};
