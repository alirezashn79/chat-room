import { Route, Routes } from "react-router-dom";
import Register from "@/pages/auth/Register.tsx";
import AuthLayout from "@/layouts/AuthLayout.tsx";
import Login from "@/pages/auth/Login.tsx";
import RoomPage from "@/pages/room";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<RoomPage />} />
      </Route>
    </Routes>
  );
}
