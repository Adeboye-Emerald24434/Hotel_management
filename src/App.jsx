import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Bars/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Inbox";
import Calendar from "./pages/Calendar";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import CreateRooms from "./pages/CreateRooms";
import Housekeeping from "./pages/Housekeeping";
import Inventory from "./pages/Inventory";
import Finance from "./pages/Finance";
import Review from "./pages/Review";
import PagePlaceholder from "./pages/PagePlaceholder";
import "react-loading-skeleton/dist/skeleton.css";
import { getHotelifyUser } from "./auth";

function RequireAdmin({ darkMode, onToggleTheme }) {
  return getHotelifyUser() ? (
    <Layout darkMode={darkMode} onToggleTheme={onToggleTheme} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem("hotelify-theme") === "dark",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    document.documentElement.style.colorScheme = darkMode ? "dark" : "light";
    window.localStorage.setItem("hotelify-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<Navigate to={getHotelifyUser() ? "/dashboard" : "/login"} replace />}
        />
        <Route element={<RequireAdmin darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="message" element={<Message />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="reservation" element={<Reservation />} />
          <Route path="guest-profile" element={<Contact />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="create-rooms" element={<CreateRooms />} />
          <Route path="createRooms" element={<Navigate to="/create-rooms" replace />} />
          <Route path="housekeeping" element={<Housekeeping />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="finance" element={<Finance />} />
          <Route path="invoice" element={<PagePlaceholder title="Invoice" />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
