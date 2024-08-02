import { Navigate, useLocation } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = false;
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); from redux
  return isLoggedIn ? <Navigate to={location?.state || '/'} /> : children;
};

export default PublicRoute;
