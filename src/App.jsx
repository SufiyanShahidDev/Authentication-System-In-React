import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Dashboard/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return isLoggedIn ? children : <Navigate to="/" replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
              <Home />
          }
        />

        {/* Unknown route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;