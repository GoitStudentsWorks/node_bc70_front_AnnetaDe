import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = true;
  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); from redux
  return isLoggedIn ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
