import { CalendarDays, LogIn, LogOut, MoreHorizontal, MessageSquare, UserRound, Check, CircleDollarSign} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useState } from "react";

const revenueData = [
  { month: "Jan", revenue: 270000 },
  { month: "Feb", revenue: 170000 },
  { month: "Mar", revenue: 310000 },
  { month: "Apr", revenue: 220000 },
  { month: "May", revenue: 250000 },
  { month: "Jun", revenue: 340000 },
];

const occupancyData = [
  { day: "12 Jun", occupied: 68, available: 32 },
  { day: "13 Jun", occupied: 45, available: 55 },
  { day: "14 Jun", occupied: 58, available: 42 },
  { day: "15 Jun", occupied: 72, available: 28 },
  { day: "16 Jun", occupied: 62, available: 38 },
  { day: "17 Jun", occupied: 67, available: 33 },
  { day: "18 Jun", occupied: 54, available: 46 },
];

const bookingData = [
  { name: "Direct Website", value: 42 },
  { name: "Online Travel Agencies", value: 33 },
  { name: "Walk-in Guests", value: 15 },
  { name: "Corporate Partnerships", value: 10 },
];

const bookingColors = ["#2684FF", "#9CCAFF", "#D5F000", "#303238"];

const ratingData = [
  { name: "Rating", value: 4.7 },
  { name: "Remaining", value: 0.3 },
];

const ratingCategories = [
  { name: "Cleanliness", value: 4.8 },
  { name: "Comfort", value: 4.6 },
  { name: "Service / Staff", value: 4.9 },
  { name: "Facilities / Amenities", value: 4.5 },
  { name: "Value for Money", value: 4.6 },
  { name: "Location", value: 4.7 },
];

const bookingListData = [
  {
    id: "LSD-267",
    guestName: "Faruq Adeboye",
    roomType: "Executive",
    roomNumber: "207",
    duration: "3 nights",
    checkIn: "15-10-2026",
    checkOut: "18-10-2026",
    status: "Checked-In",
  },
  {
    id: "BDG-124",
    guestName: "Lawa Sodiq",
    roomType: "Deluxe",
    roomNumber: "127",
    duration: "2 nights",
    checkIn: "05-10-2026",
    checkOut: "07-10-2026",
    status: "Pending",
  },
  {
    id: "PDF-061",
    guestName: "Sarah Lydia",
    roomType: "Classic",
    roomNumber: "201",
    duration: "1 nights",
    checkIn: "15-10-2026",
    checkOut: "15-10-2026",
    status: "Checked-Out",
  },
  {
    id: "JBK-022",
    guestName: "Sarah Lydia",
    roomType: "Deluxe",
    roomNumber: "109",
    duration: "1 nights",
    checkIn: "15-10-2026",
    checkOut: "15-10-2026",
    status: "Checked-In",
  },
  {
    id: "FMC-117",
    guestName: "Amirah Sule",
    roomType: "Executive",
    roomNumber: "317",
    duration: "2 nights",
    checkIn: "19-10-2026",
    checkOut: "21-10-2026",
    status: "Checked-Out",
  },
  {
    id: "GHF-010",
    guestName: "Sarah Lydia",
    roomType: "Classic",
    roomNumber: "51",
    duration: "2 nights",
    checkIn: "10-10-2026",
    checkOut: "12-10-2026",
    status: "Pending",
  },
];

const roomAvailabilityData = [
  {
    type: "Deluxe",
    available: 12,
    occupied: 12,
    notReady: 4,
    reserved: 2,
    total: 30,
  },
  {
    type: "Executive",
    available: 0,
    occupied: 13,
    notReady: 0,
    reserved: 2,
    total: 15,
  },
  {
    type: "Classic",
    available: 3,
    occupied: 7,
    notReady: 10,
    reserved: 0,
    total: 20,
  },
  {
    type: "Compact",
    available: 19,
    occupied: 14,
    notReady: 2,
    reserved: 0,
    total: 35,
  },
];

const totalRooms = roomAvailabilityData.reduce(
  (sum, room) => sum + room.total,
  0,
);
const totalOccupied = roomAvailabilityData.reduce(
  (sum, room) => sum + room.occupied,
  0,
);
const totalAvailable = roomAvailabilityData.reduce(
  (sum, room) => sum + room.available,
  0,
);
const totalReserved = roomAvailabilityData.reduce(
  (sum, room) => sum + room.reserved,
  0,
);
const totalNotReady = roomAvailabilityData.reduce(
  (sum, room) => sum + room.notReady,
  0,
);

const recentActivities = [
  {
    title: "Front Desk Admin",
    description: "Checked in Emily Carter to Room 210 (Deluxe Suite).",
    time: "09:45 AM",
    icon: "message",
    color: "bg-lime-400",
  },
  {
    title: "Housekeeping Team",
    description: "Marked Room 305 as Clean & Ready.",
    time: "09:20 AM",
    icon: "user",
    color: "bg-blue-500",
  },
  {
    title: "Manager approved",
    description: "Checked in Emily Carter to Room 210 (Deluxe Suite).",
    time: "08:50 AM",
    icon: "check",
    color: "bg-lime-400",
  },
  {
    title: "Reservation Staff",
    description:
      "Confirmed corporate booking for TechVision Ltd., 5 rooms reserved.",
    time: "08:30 AM",
    icon: "calendar",
    color: "bg-blue-500",
  },
  {
    title: "System Update – Revenue report",
    description: "For March 2035 successfully generated and saved.",
    time: "08:00 AM",
    icon: "system",
    color: "bg-lime-400",
  },
  {
    title: "System Update – Booking report",
    description: "For March 2035 successfully generated and saved.",
    time: "07:50 AM",
    icon: "system",
    color: "bg-lime-400",
  },
  {
    title: "Housekeeping Team",
    description: "Marked Room 216 as Clean & Ready.",
    time: "07:20 AM",
    icon: "user",
    color: "bg-blue-500",
  },
  // {
  //   title: "Front Desk Admin",
  //   description: "Checked in Robert Dew to Room 118 (Standard Suite).",
  //   time: "06:00 AM",
  //   icon: "message",
  //   color: "bg-lime-400",
  // },
];

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingSearch, setBookingSearch] = useState("");
  const [bookingStatus, setBookingStatus] = useState("all");
  const bookingsPerPage = 3;

  const filteredBookings = bookingListData.filter((booking) => {
    const searchText = bookingSearch.trim().toLowerCase();
    const matchesSearch =
      searchText === "" ||
      [
        booking.id,
        booking.guestName,
        booking.roomType,
        booking.roomNumber,
        booking.duration,
        booking.checkIn,
        booking.checkOut,
        booking.status,
      ].some((value) => value.toLowerCase().includes(searchText));
    const matchesStatus =
      bookingStatus === "all" || booking.status.toLowerCase() === bookingStatus;

    return matchesSearch && matchesStatus;
  });
  const lastBookingIndex = currentPage * bookingsPerPage;
  const firstBookingIndex = lastBookingIndex - bookingsPerPage;

  const currentBookings = filteredBookings.slice(
    firstBookingIndex,
    lastBookingIndex,
  );
  const totalPages = Math.max(
    1,
    Math.ceil(filteredBookings.length / bookingsPerPage),
  );
  return (
    <div className="min-h-screen bg-[#f4f4f4] p-5">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-5 xl:grid-cols-[65fr_30fr]">
        <div className="flex min-w-0 flex-col gap-5">
          <section className="grid grid-cols-1 gap-4 rounded-xl bg-white p-3 sm:grid-cols-2 xl:grid-cols-[1.35fr_1fr_1fr_1fr]">
            <div className="flex min-h-36 flex-col justify-between rounded-xl p-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">
                  Hi, Faruq
                </h2>
                <h1 className="mt-1 mb-2 text-bold text-black-200">
                  Thursday, 15 October 2026
                </h1>
              </div>
              <div className="rounded-lg bg-blue-500 p-3 text-white">
                <p className="text-xs">Total Earnings</p>
                <div className="mt-1 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xl font-bold">₦58,240,000</span>
                  <span className="rounded bg-lime-300 px-2 py-1 text-xs font-semibold text-gray-800">
                     +15.6%
                  </span>
                </div>
                <p className="mt-1 text-right text-[10px] text-blue-100">
                  from last week
                </p>
              </div>
            </div>

            <div className="flex min-h-36 flex-col justify-between rounded-xl bg-[#EDF3FA] p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white">
                <CalendarDays size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-800">New Reservations</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-800">128</h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full px-2 py-0.5 text-semibold font-medium text-gray-800">
                     +12.4%
                  </span>
                  <span className="text-[10px] text-black-400">
                    from last week
                  </span>
                </div>
              </div>
            </div>

            <div className="flex min-h-36 flex-col justify-between rounded-xl bg-[#EDF3FA] p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white">
                <LogIn size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-800">Guests Checked In</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-800">94</h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full px-2 py-0.5 text-semibold font-medium text-black-400">
                     +8.7%
                  </span>
                  <span className="text-[10px] text-black-400">
                    week-over-week
                  </span>
                </div>
              </div>
            </div>

            <div className="flex min-h-36 flex-col justify-between rounded-xl bg-[#EDF3FA] p-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500 text-white">
                <LogOut size={18} />
              </div>
              <div>
                <p className="text-xs text-gray-800">Guests Checked Out</p>
                <h3 className="mt-1 text-2xl font-bold text-gray-800">76</h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full px-2 py-0.5 text-semibold font-medium text-red-600">
                     -3.2%
                  </span>
                  <span className="text-[10px] text-black-400">
                    from previous week
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="min-h-64 rounded-xl bg-white p-5">
              <div className="chart-header">
                Revenue
                <select name="filter" id="month" className="filter">
                  <option value="last-6-month">Last 6 Months</option>
                  <option value="last-3-month">Last 3 Months</option>
                  <option value="last-month">Last Month</option>
                </select>
              </div>
              <div className="chart-body">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `₦${value / 1000}K`} />
                    <Tooltip
                      formatter={(value) =>
                        `₦${Number(value).toLocaleString()}`
                      }
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#2684FF"
                      strokeWidth={2}
                      fill="#E8F8A5"
                      fillOpacity={0.5}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="min-h-64 rounded-xl bg-white p-5">
              <div className="chart-header">
                <h3 className="text-base font-semibold text-gray-800">
                  Occupancy Trend
                </h3>
                <select name="filter" id="month" className="filter">
                  <option value="last-6-month">Last 7 Days</option>
                  <option value="last-3-month">Last 14 Days</option>
                  <option value="last-month">Last 21 Days</option>
                </select>
              </div>

              <div className="chart-body">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={occupancyData}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="occupied"
                      fill="#2684FF"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="available"
                      fill="#E8EDF4"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="min-w-0 min-h-64 rounded-xl bg-white p-5">
              <h3 className="mb-2 text-base font-semibold text-gray-800">
                Overall Rating
              </h3>
              <div className="rating-content">
                <div className="rating-gauge">
                  <div className="gauge-chart">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={ratingData}
                          dataKey="value"
                          startAngle={180}
                          endAngle={0}
                          cx="50%"
                          cy="88%"
                          innerRadius="62%"
                          outerRadius="90%"
                          stroke="none"
                        >
                          <Cell fill="#2684FF" />
                          <Cell fill="#EDF2F8" />
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="rating-summary">
                    <strong>4.7 / 5.0</strong>
                    <span>Total Review</span>
                    <small>1,248 Guests</small>
                  </div>
                </div>

                <div className="rating-indicators">
                  {ratingCategories.map((item) => (
                    <div className="rating-item" key={item.name}>
                      <div className="rating-label">
                        <span>{item.name}</span>
                        <strong>{item.value.toFixed(1)} ★</strong>
                      </div>

                      <div className="rating-track">
                        <div
                          className="rating-fill"
                          style={{ width: `${(item.value / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="min-w-0 min-h-64 rounded-xl bg-white p-5">
              <h3 className="mb-2 text-base font-semibold text-gray-800">
                Booking Source
              </h3>
              <div className="booking-source-content">
                <div className="booking-doughnut">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={bookingData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius="55%"
                        outerRadius="78%"
                        paddingAngle={3}
                        stroke="none"
                      >
                        {bookingData.map((entry, index) => (
                          <Cell key={entry.name} fill={bookingColors[index]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="booking-doughnut-summary">
                    <strong>4</strong>
                    <span>Channels</span>
                  </div>
                </div>

                <div className="booking-indicators">
                  {bookingData.map((item, index) => (
                    <div className="indicator-item" key={item.name}>
                      <div className="indicator-label">
                        <span>{item.name}</span>
                        <strong>{item.value}%</strong>
                      </div>

                      <div className="indicator-track">
                        <div
                          className="indicator-fill"
                          style={{
                            width: `${item.value}%`,
                            backgroundColor: bookingColors[index],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-80 rounded-xl bg-white p-5">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-gray-800">
                Booking List
              </h3>

              <div className="flex items-center gap-2">
                <input
                  type="search"
                  value={bookingSearch}
                  onChange={(event) => {
                    setBookingSearch(event.target.value);
                    setCurrentPage(1);
                  }}
                  placeholder="Search guest, status, room etc"
                  className="w-52 rounded-full bg-gray-50 px-4 py-2 text-xs outline-none"
                />
                <select
                  value={bookingStatus}
                  onChange={(event) => {
                    setBookingStatus(event.target.value);
                    setCurrentPage(1);
                  }}
                  className="rounded-full bg-[#EDF3FA] px-4 py-2 text-xs outline-none"
                >
                  <option value="all">All Status</option>
                  <option value="checked-in">Checked In</option>
                  <option value="pending">Pending</option>
                  <option value="reserved">Reserved</option>
                  <option value="checked-out">Checked Out</option>
                </select>
              </div>
            </div>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead className="bg-[#EDF3FA] text-gray-500">
                  <tr>
                    <th className="px-4 py-4 font-medium">Booking ID & Name</th>
                    <th className="px-4 py-4 font-medium">Room Type</th>
                    <th className="px-4 py-4 font-medium">Room Number</th>
                    <th className="px-4 py-4 font-medium">Duration</th>
                    <th className="px-4 py-4 font-medium">
                      Check-in & Check-out
                    </th>
                    <th className="px-4 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {currentBookings.length > 0 ? (
                    currentBookings.map((booking) => (
                      <tr key={booking.id} className="border-b border-gray-100">
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold text-gray-800">
                              {booking.id}
                            </span>
                            <span className="text-sm text-gray-500">
                              {booking.guestName}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {booking.roomType}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {booking.roomNumber}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {booking.duration}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-gray-800">
                              {booking.checkIn}
                            </span>
                            <span className="text-sm text-gray-800">
                              {booking.checkOut}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          <span
                            className={`rounded-full px-3 py-1 ${
                              booking.status === "Checked-In"
                                ? "bg-green-100 text-green-700"
                                : booking.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {booking.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={6}
                        className="px-4 py-8 text-center text-sm text-gray-500"
                      >
                        No bookings match your search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <button
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border px-4 py-2 text-xs disabled:opacity-40"
              >
                Previous
              </button>
              <span className="text-xs text-gray-500">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((page) => Math.min(totalPages, page + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-lg border px-4 py-2 text-xs disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </section>
        </div>

        <aside className="flex min-w-0 flex-col gap-5">
          <section className="min-h-52 rounded-xl bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-800">
                Room Availability
              </h3>
              <button className="text-gray">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs text-gray-400">Total All Rooms</span>
              <span className="text-2xl font-semibold text-gray-800">
                {totalRooms}
              </span>
            </div>
            <div
              className="mt-4 flex h-12 gap-[2px] overflow-hidden"
              aria-label={`${totalOccupied} occupied, ${totalAvailable} available, ${totalReserved} reserved, ${totalNotReady} not ready`}
            >
              {[
                { count: totalOccupied, color: "bg-blue-500" },
                { count: totalAvailable, color: "bg-lime-400" },
                { count: totalReserved, color: "bg-yellow-300" },
                { count: totalNotReady, color: "bg-gray-200" },
              ].map((item, index) =>
                Array.from({ length: item.count }).map((_, roomIndex) => (
                  <div
                    key={`${index}-${roomIndex}`}
                    className={`min-w-0 flex-1 rounded-full ${item.color}`}
                  />
                )),
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                <span className="text-xs text-gray-500">
                  Occupied({totalOccupied})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-lime-400"></span>
                <span className="text-xs text-gray-500">
                  Available({totalAvailable})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-yellow-300"></span>
                <span className="text-xs text-gray-500">
                  Reserved({totalReserved})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-gray-200"></span>
                <span className="text-xs text-gray-500">
                  Not ready({totalNotReady})
                </span>
              </div>
            </div>
          </section>

          <section className="min-h-72 rounded-xl bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-800">Tasks</h3>
              <button className="text-gray">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div>
              {[
                {
                  title: "Confirm Group Booking for VIP Guests",
                  date: "10-10-2026",
                },
                {
                  title: "Update Room Maintainance Schedule",
                  date: "13-10-2026",
                },
                { title: "Review Monthly Revenue Report", date: "14-10-2026" },
                {
                  title: "Coordinate Staff Shift Assignment",
                  date: "18-10-2026",
                },
                { title: "Team Meeting", date: "19-10-2026" },
              ].map((task, index) => (
                <div key={index} className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300"
                  />
                  <div className="min-w-0 flex-1 rounded-lg bg-gray-50 px-3 py-3">
                    <p className="text-xs font-semibold text-gray-700">
                      {task.title}
                    </p>
                    <p className="mt-1 text-[10px] text-gray-400">
                      {task.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="min-h-96 rounded-xl bg-white p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-800">
                Recent Activities
              </h2>
              <button className="text-gray-400">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="flex flex-col">
              {recentActivities.map((activity, index) => (
                <div key={index} className="relative flex gap-3 pb-4">
                  {index !== recentActivities.length - 1 && (
                    <div className="absolute left-[11px] top-6 h-full w-px bg-gray-200" />
                  )}

                  <div
                    className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${activity.color} text-white`}
                  >
                    {activity.icon === "message" && <MessageSquare size={11} />}
                    {activity.icon === "user" && <UserRound size={11} />}
                    {activity.icon === "check" && <Check size={12} />}
                    {activity.icon === "calendar" && <CalendarDays size={11} />}
                    {activity.icon === "system" && (
                      <CircleDollarSign size={11} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[11px] font-semibold text-gray-700">
                      {activity.title}
                    </h3>
                    <p className="mt-0.5 text-[9px] leading-relaxed text-gray-400">
                      {activity.description}
                    </p>
                    <p className="mt-1 text-[9px] text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;
