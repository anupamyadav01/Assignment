import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

// Check login status (use cookies if you're using them, else localStorage is fine)
const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home (Protected Route) */}
        <Route
          path="/"
          element={isLoggedIn() ? <Home /> : <Navigate to="/login" replace />}
        />

        {/* Login Route (only for guests) */}
        <Route
          path="/login"
          element={!isLoggedIn() ? <Login /> : <Navigate to="/" replace />}
        />

        {/* Register Route (only for guests) */}
        <Route
          path="/register"
          element={!isLoggedIn() ? <Register /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
