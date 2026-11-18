import Navbar from "../Bars/Navbar";
import Sidebar from "../Bars/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout({ darkMode, onToggleTheme }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 lg:flex-row">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {sidebarOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}
      <div className="flex min-h-screen min-w-0 flex-1 flex-col lg:ml-64">
        <Navbar
          darkMode={darkMode}
          onToggleTheme={onToggleTheme}
          onMenuClick={() => setSidebarOpen(true)}
        />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
