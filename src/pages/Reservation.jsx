import { useState } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import {
  CalendarDays,
  Clock3,
  BadgeCheck,
  CalendarX,
  MoreHorizontal,
  Hotel,
  Search,
  Eye,
  Pencil,
} from "lucide-react";

const reservationTrendData = [
  { month: "Jan", confirmed: 75, cancelled: 45 },
  { month: "Feb", confirmed: 65, cancelled: 35 },
  { month: "Mar", confirmed: 70, cancelled: 60 },
  { month: "Apr", confirmed: 53, cancelled: 35 },
  { month: "May", confirmed: 68, cancelled: 45 },
  { month: "Jun", confirmed: 92, cancelled: 63 },
];

const mostBookedData = [
  { name: "Deluxe Suite", bookings: 225, color: "#2684FF" },
  { name: "Superior Room", bookings: 182, color: "#D5F000" },
  { name: "Executive Suite", bookings: 156, color: "#F1F0A0" },
  { name: "Standard Room", bookings: 128, color: "#E8EDF2" },
  { name: "Premium Deluxe", bookings: 104, color: "#D9DDE2" },
  { name: "Family Suite", bookings: 70, color: "#8BBEFF" },
];

const reservations = [
  {
    id: "#BKG-1024",
    guest: "Emily Carter",
    roomType: "Deluxe Suite",
    room: "208",
    request: "Extra Pillows",
    duration: "4 nights",
    dates: "Mar 12 – Mar 15, 2035",
    status: "Cancelled",
    source: "Website",
    payment: "Paid",
  },
  {
    id: "#BKG-2032",
    guest: "Daniel Wong",
    roomType: "Superior Room",
    room: "315",
    request: "Late Check-In",
    duration: "2 nights",
    dates: "Mar 13 – Mar 15, 2035",
    status: "Pending",
    source: "Booking.com",
    payment: "Unpaid",
  },
  {
    id: "#BKG-2033",
    guest: "Hannah Lee",
    roomType: "Executive Suite",
    room: "205",
    request: "High Floor",
    duration: "5 nights",
    dates: "Mar 10 – Mar 15, 2035",
    status: "Confirmed",
    source: "Walk-In",
    payment: "Paid",
  },
  {
    id: "#BKG-1027",
    guest: "Liam Johnson",
    roomType: "Executive Suite",
    room: "410",
    request: "-",
    duration: "1 nights",
    dates: "Mar 13 – Mar 14, 2035",
    status: "Cancelled",
    source: "Agoda",
    payment: "Paid",
  },
  {
    id: "#BKG-1028",
    guest: "Sophia Miles",
    roomType: "Standard Room",
    room: "108",
    request: "Sea View",
    duration: "4 nights",
    dates: "Mar 11 – Mar 15, 2035",
    status: "Confirmed",
    source: "Website",
    payment: "Unpaid",
  },
  {
    id: "#BKG-1029",
    guest: "Robert Miles",
    roomType: "Deluxe Suite",
    room: "502",
    request: "Extra Bed",
    duration: "3 nights",
    dates: "Mar 12 – Mar 15, 2035",
    status: "Pending",
    source: "Corporate",
    payment: "Unpaid",
  },
  {
    id: "#BKG-1030",
    guest: "Isabella Chen",
    roomType: "Superior Room",
    room: "318",
    request: "Connecting Room",
    duration: "2 nights",
    dates: "Mar 14 – Mar 16, 2035",
    status: "Confirmed",
    source: "Expedia",
    payment: "Paid",
  },
  {
    id: "#BKG-1031",
    guest: "Ethan Brown",
    roomType: "Deluxe Suite",
    room: "212",
    request: "Airport",
    duration: "3 nights",
    dates: "Mar 15 – Mar 18, 2035",
    status: "Confirmed",
    source: "Website",
    payment: "Paid",
  },
];

function Reservation() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const filteredReservations = reservations.filter((reservation) => {
    const matchesSearch =
      reservation.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reservation.status.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "All Status" || reservation.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });
  return (
    <div className="w-full min-h-screen bg-[#EEF4FA] rounded-2xl p-4 md:p-5">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.1fr_1fr] gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 min-h-[120px]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">42</h2>
              <div className="bg-blue-500 text-white p-1.5 rounded-full">
                <CalendarDays size={18} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Total Reservations Today
            </p>
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-[#D5F000] rounded-full px-2 py-0.5 text-sm font-semibold">
                ↗ +9.3%
              </span>
              <span className="text-xs text-gray-400">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 min-h-[120px]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">3.6</h2>
              <div className="bg-blue-500 text-white p-1.5 rounded-full">
                <Clock3 size={18} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Average Stay Duration</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-[#D5F000] rounded-full px-2 py-0.5 text-sm font-semibold">
                ↗ +12.5%
              </span>
              <span className="text-xs text-gray-400">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 min-h-[120px]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">80%</h2>
              <div className="bg-blue-500 text-white p-1.5 rounded-full">
                <BadgeCheck size={18} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Confirmed Rate</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-[#D5F000] rounded-full px-2 py-0.5 text-sm font-semibold">
                ↗ +3.3%
              </span>
              <span className="text-xs text-gray-400">from last month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 min-h-[120px]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">4.8%</h2>
              <div className="bg-blue-500 text-white p-1.5 rounded-full">
                <CalendarX size={18} />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">Cancellation Rate</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="bg-[#D5F000] rounded-full px-2 py-0.5 text-sm font-semibold">
                ↘ -2.2%
              </span>
              <span className="text-xs text-gray-400">from last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 min-h-[258px]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-base">Reservation Trend</h3>
            <MoreHorizontal size={20} className="text-gray-600" />
          </div>

          <ResponsiveContainer width="100%" height={190}>
            <BarChart
              data={reservationTrendData}
              barGap={5}
              margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                vertical={false}
                stroke="#E5E7EB"
              />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#999999" }}
              />

              <YAxis
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#999999" }}
              />

              <Tooltip />

              <Bar
                dataKey="confirmed"
                fill="#2684FF"
                barSize={15}
                radius={[3, 3, 0, 0]}
              />

              <Bar
                dataKey="cancelled"
                fill="#D5F000"
                barSize={15}
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-4 min-h-[258px]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-base">Most Booked</h3>
            <MoreHorizontal size={20} className="text-gray-600" />
          </div>

          <div className="flex items-center">
            <div className="w-[55%] h-[190px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mostBookedData}
                    dataKey="bookings"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={48}
                    outerRadius={68}
                    paddingAngle={2}
                    stroke="white"
                    strokeWidth={2}
                  >
                    {mostBookedData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Hotel size={34} className="text-blue-500" />
              </div>
            </div>

            <div className="w-[45%] flex flex-col gap-3">
              {mostBookedData.map((room) => (
                <div
                  key={room.name}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: room.color }}
                    ></span>

                    <span className="text-xs text-gray-500 truncate">
                      {room.name}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-gray-700">
                    {room.bookings}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 mt-5 min-h-[600px]">
        {/* Table heading and controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 mb-4">
          <h3 className="font-medium text-base">Reservation</h3>

          <div className="flex items-center gap-2 w-full md:w-auto">
            {/* Search field */}
            <div className="flex items-center gap-2 bg-[#F7F7F7] rounded-full px-3 py-2 flex-1 md:w-[220px]">
              <Search size={15} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search guest, status, etc"
                className="w-full bg-transparent outline-none text-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Status filter */}
            <select
              className="bg-[#EEF4FA] rounded-full px-3 py-2 text-xs outline-none"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>All Status</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        {/* Table wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] text-left">
            {/* Table headings */}
            <thead>
              <tr className="bg-[#EEF4FA] text-gray-500 text-[11px]">
                <th className="p-4 font-medium rounded-l-lg">
                  Booking ID & Guest Name
                </th>
                <th className="p-4 font-medium">Room Type</th>
                <th className="p-4 font-medium">Room</th>
                <th className="p-4 font-medium">Request</th>
                <th className="p-4 font-medium">Duration</th>
                <th className="p-4 font-medium">Check-In & Check-Out</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Source</th>
                <th className="p-4 font-medium">Payment</th>
                <th className="p-4 font-medium rounded-r-lg">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredReservations.map((reservation) => (
                <tr
                  key={reservation.id}
                  className="border-b border-gray-200 text-xs text-gray-700"
                >
                  {/* Booking ID and Guest Name */}
                  <td className="px-4 py-3">
                    <p className="font-medium">{reservation.id}</p>
                    <p className="text-[10px] text-gray-500 mt-1">
                      {reservation.guest}
                    </p>
                  </td>

                  {/* Room Type */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                      {reservation.roomType}
                    </div>
                  </td>

                  {/* Room */}
                  <td className="px-4 py-3">{reservation.room}</td>

                  {/* Request */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    {reservation.request}
                  </td>

                  {/* Duration */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    {reservation.duration}
                  </td>

                  {/* Check-in and Check-out */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    {reservation.dates}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <span
                      className={`rounded-full px-2 py-1 text-[10px] whitespace-nowrap ${
                        reservation.status === "Confirmed"
                          ? "bg-blue-100 text-gray-800"
                          : reservation.status === "Pending"
                            ? "bg-[#F2F3A8] text-gray-800"
                            : "bg-red-100 text-gray-800"
                      }`}
                    >
                      {reservation.status}
                    </span>
                  </td>

                  {/* Source */}
                  <td className="px-4 py-3 whitespace-nowrap">
                    {reservation.source}
                  </td>

                  {/* Payment */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          reservation.payment === "Paid"
                            ? "bg-blue-500"
                            : "bg-red-500"
                        }`}
                      ></span>
                      {reservation.payment}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      <button className="p-1.5 rounded-md bg-gray-50 hover:bg-gray-100">
                        <Eye size={15} className="text-gray-500" />
                      </button>

                      <button className="p-1.5 rounded-md bg-gray-50 hover:bg-gray-100">
                        <Pencil size={15} className="text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Reservation;
