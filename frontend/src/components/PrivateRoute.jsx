import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PrivateRoute = ({ children }) => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:10001/api/auth/verify", {
          withCredentials: true, // very important to send cookies
        });
        console.log("User verified ✅", res);
        setAuth(true);
      } catch (error) {
        console.log("Not authenticated ❌", error.response?.data);
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  if (auth === null) return <div>Loading...</div>;
  return auth ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
