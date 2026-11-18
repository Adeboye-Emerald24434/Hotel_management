import {
  BedDouble,
  Building2,
  CalendarDays,
  ChevronDown,
  FileText,
  LayoutDashboard,
  LogOut,
  Megaphone,
  Package,
  SprayCan,
  Star,
  Wallet,
  Inbox,
  X,
} from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { clearHotelifyUser } from "../auth";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard", end: true },
  { title: "Inbox", icon: Inbox, path: "/message" },
  { title: "Calendar", icon: CalendarDays, path: "/calendar" },
  {
    title: "Campaign",
    icon: Megaphone,
    children: [
      { name: "Reservation", path: "/reservation" },
      { name: "Guest Profile", path: "/guest-profile" },
    ],
  },
  {
    title: "Rooms",
    icon: BedDouble,
    children: [
      { name: "Rooms", path: "/rooms" },
      { name: "Create Room", path: "/create-rooms" },
    ],
  },
  { title: "Housekeeping", icon: SprayCan, path: "/housekeeping" },
  { title: "Inventory", icon: Package, path: "/inventory" },
  {
    title: "Finance",
    icon: Wallet,
    children: [
      { name: "Finance", path: "/finance" },
      { name: "Invoice", path: "/invoice", icon: FileText },
    ],
  },
  { title: "Review", icon: Star, path: "/review", badge: 5 },

];

function Sidebar({ isOpen, onClose }) {
  const { pathname } = useLocation();
  const activeSection = menuItems.find((item) =>
    item.children?.some((child) => child.path === pathname),
  )?.title;
  const [openSection, setOpenSection] = useState(activeSection ?? null);
  const navigate = useNavigate();

  const handleLogout = () => {
    clearHotelifyUser();
    navigate("/login", { replace: true });
  };

  const itemClassName = ({ isActive }) =>
    `flex min-w-0 items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors ${
      isActive
        ? "bg-blue-50 font-semibold text-blue-700"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
    }`;

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 flex h-screen w-72 shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white px-4 py-4 text-gray-700 transition-transform duration-200 lg:fixed lg:z-30 lg:w-64 lg:translate-x-0 lg:py-6 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="mb-4 flex items-center justify-between px-3 lg:mb-8">
        <h1 className="flex items-center gap-4 text-xl font-bold text-slate-900">
          <Building2 size={25} strokeWidth={2} className="text-blue-600" />
          <span>Hotelify</span>
        </h1>
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={onClose}
          className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
        >
          <X size={20} />
        </button>
      </div>

      <nav aria-label="Main navigation" className="min-h-0 flex-1 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const hasChildren = Boolean(item.children?.length);
          const isOpen = openSection === item.title;
          const isActive = item.children?.some((child) => child.path === pathname);

          return (
            <div key={item.title}>
              {hasChildren ? (
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`${item.title.toLowerCase()}-submenu`}
                  onClick={() =>
                    setOpenSection(isOpen ? null : item.title)
                  }
                  className={`${itemClassName({ isActive })} w-full`}
                >
                  <Icon size={19} strokeWidth={1.8} />
                  <span className="min-w-0 flex-1 truncate">{item.title}</span>
                  {item.badge && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 px-1.5 text-xs font-semibold text-white">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown
                    size={16}
                    className={`shrink-0 transition-transform ${
                      isOpen ? "" : "-rotate-90"
                    }`}
                  />
                </button>
              ) : (
                <NavLink
                  to={item.path}
                  end={item.end}
                  onClick={onClose}
                  className={itemClassName}
                >
                  <Icon size={19} strokeWidth={1.8} />
                  <span className="min-w-0 flex-1 truncate">{item.title}</span>
                  {item.badge && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-500 px-1.5 text-xs font-semibold text-white">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              )}
              {hasChildren && isOpen && (
                <div
                  id={`${item.title.toLowerCase()}-submenu`}
                  className="ml-9 mt-1 space-y-1 border-l border-gray-200 pl-3"
                >
                  {item.children.map((child) => (
                    <NavLink
                      key={child.name}
                      to={child.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block w-full rounded-md px-3 py-2.5 text-sm transition-colors ${
                          isActive
                            ? "font-medium text-blue-700"
                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                        }`
                      }
                    >
                      {child.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={handleLogout}
        className="mt-4 flex shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
      >
        <LogOut size={19} strokeWidth={1.8} />
        <span>Log out</span>
      </button>
    </aside>
  );
}

export default Sidebar;
