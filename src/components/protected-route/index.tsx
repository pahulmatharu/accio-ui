import { Navigate } from 'react-router-dom';

export type Props = {
  isAuthenticated: boolean;
  children: JSX.Element;
};

const ProtectedRoute = ({ isAuthenticated, children }: Props) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
