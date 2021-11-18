const ProtectedRoute = ({ path, children }) => {
  const isAuthenticated = sessionStorage.getItem("token");
  console.log(isAuthenticated);
  if (isAuthenticated) {
    return window.location.pathname === path ? children : null;
  } else {
    window.location.replace("/");
  }
};

export default ProtectedRoute;
