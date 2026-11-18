import { Search, Bell, Menu, Moon, Sun } from "lucide-react";
import { useLocation } from "react-router-dom";
import { getHotelifyUser } from "../auth";

const pageTitles = {
  "/dashboard": "Dashboard",
  "/message": "Inbox",
  "/calendar": "Calendar",
  "/reservation": "Reservation",
  "/guest-profile": "Guest Profile",
  "/rooms": "Rooms",
  "/create-rooms": "Create Room",
  "/housekeeping": "Housekeeping",
  "/inventory": "Inventory",
  "/finance": "Finance",
  "/invoice": "Invoice",
  "/review": "Review",
};

function Navbar({ darkMode, onToggleTheme, onMenuClick }) {
  const { pathname } = useLocation();
  const user = getHotelifyUser();

  return (
    <nav className="flex w-full min-w-0 flex-wrap items-center justify-between gap-3 border-b border-gray-200 bg-white px-3 py-3 sm:px-6 sm:py-4">
      <div className="flex min-w-0 items-center gap-2 sm:gap-3">
        <button
          type="button"
          aria-label="Open navigation menu"
          onClick={onMenuClick}
          className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
        >
          <Menu size={21} />
        </button>
        <h1 className="truncate text-lg font-semibold text-slate-800 sm:text-2xl">
          {pageTitles[pathname] ?? "Hotelify"}
        </h1>
      </div>

      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
        <div className="hidden min-w-0 items-center gap-2 rounded-lg border border-gray-200 bg-white p-2 sm:flex sm:px-3 sm:py-2">
          <Search size={20} className="shrink-0 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-24 min-w-0 bg-transparent text-sm outline-none md:w-32"
          />
        </div>

        <button
          type="button"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={onToggleTheme}
          className="shrink-0 rounded-lg border border-gray-200 p-2 text-gray-600 hover:bg-gray-100"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          type="button"
          aria-label="Notifications"
          className="relative shrink-0 rounded-lg border border-gray-200 p-2"
        >
          <Bell size={20} className="text-gray-600" />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 shadow-inner sm:h-10 sm:w-10">
            <span className="text-sm font-semibold tracking-wider text-white">
              SA
            </span>
          </div>

          <div className="hidden min-w-0 sm:flex sm:flex-col">
            <span className="truncate text-sm font-semibold text-gray-900">
              {user?.name ?? "Super Admin"}
            </span>
            <span className="truncate text-xs text-gray-500">
              {user?.email}
            </span>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;