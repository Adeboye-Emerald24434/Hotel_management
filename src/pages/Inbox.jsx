import { useState } from "react";

import {
  Plus,
  Inbox,
  Star,
  Send,
  FileText,
  ShieldAlert,
  Trash2,
  CircleDot,
  Search,
  MoreHorizontal,
  Reply,
  Forward,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  Link,
  Smile,
  Image,
} from "lucide-react";

function Message() {
  const folders = [
    { name: "Inbox", icon: Inbox, count: 20 },
    { name: "Starred", icon: Star, count: 15 },
    { name: "Sent", icon: Send, count: 31 },
    { name: "Drafts", icon: FileText, count: 2 },
    { name: "Spam", icon: ShieldAlert, count: 1 },
    { name: "Trash", icon: Trash2, count: 5 },
  ];

  const categories = [
    { name: "Guest Inquiry", color: "#2684FF" },
    { name: "Reservation Update", color: "#B8E600" },
    { name: "Internal Notice", color: "#FF5555" },
  ];

  const messages = [
    {
      id: 1,
      name: "Daniel Wong",
      email: "daniel.wong@hotelify.com",
      subject: "Booking Confirmation",
      preview: "Thank you for confirming my reservation...",
      body: "Hello, I would like to confirm that my reservation has been successfully received. Please let me know if there are any additional details I need to provide before my arrival.",
      date: "10:45 AM",
      color: "bg-blue-100 text-blue-600",
      starred: true,
    },
    {
      id: 2,
      name: "Emily Carter",
      email: "emily.carter@hotelify.com",
      subject: "Room Service Delay",
      preview: "I would like to report a delay in my room service...",
      body: "I would like to report a delay in my room service order. I placed my order over an hour ago, but it has not arrived yet. Kindly look into this and let me know when I can expect it.",
      date: "09:30 AM",
      color: "bg-pink-100 text-pink-600",
      starred: true,
    },
    {
      id: 3,
      name: "Samantha Gray",
      email: "samantha.gray@hotelify.com",
      subject: "Reservation Inquiry",
      preview: "I would like to know if you have available rooms...",
      body: "I would like to know if you have available rooms for two guests next weekend. Please share your room options and prices.",
      date: "Yesterday",
      color: "bg-purple-100 text-purple-600",
      starred: false,
    },
    {
      id: 4,
      name: "Liam Johnson",
      email: "liam.johnson@hotelify.com",
      subject: "Payment Confirmation",
      preview: "I have completed my payment for the reservation...",
      body: "I have completed my payment for the reservation. Kindly confirm that the payment has been received and that my booking is secured.",
      date: "Yesterday",
      color: "bg-green-100 text-green-600",
      starred: false,
    },
    {
      id: 5,
      name: "Hotelify System",
      email: "	system@hotelify.com",
      subject: "Monthly Report Available",
      preview: "Your monthly hotel performance report is ready...",
      body: "Your monthly hotel performance report is ready. Log in to your dashboard to review the latest occupancy, revenue, and booking statistics.",
      date: "Mar 12",
      color: "bg-orange-100 text-orange-600",
      starred: false,
    },
    {
      id: 6,
      name: "Hannah Lee",
      email: "hannah.lee@hotelify.com",
      subject: "Special Request",
      preview: "I would like to make a special request for my stay...",
      body: "I would like to make a special request for my upcoming stay. If possible, I would appreciate a room on a higher floor with a nice view.",
      date: "Mar 11",
      color: "bg-yellow-100 text-yellow-600",
      starred: true,
    },
    {
      id: 7,
      name: "Robert Miles",
      email: "robert.miles@hotelify.com",
      subject: "Check-in Information",
      preview: "Could you please provide more information about...",
      body: "Could you please provide more information about your check-in process, including the available check-in time and any documents I need to bring?",
      date: "Mar 10",
      color: "bg-cyan-100 text-cyan-600",
      starred: false,
    },
  ];

  const [selectedMessageId, setSelectedMessageId] = useState(2);

  const selectedMessage = messages.find(
    (message) => message.id === selectedMessageId,
  );

  return (
    <div className="w-full min-h-screen bg-[#EEF4FA] rounded-2xl p-4 md:p-5">
      <div className="grid grid-cols-1 lg:grid-cols-[235px_minmax(0,1fr)_minmax(0,1.1fr)] bg-white rounded-2xl min-h-[850px] overflow-hidden">
        <div className="border-r border-gray-100 p-4">
          <div className="p-4">
            <button className="flex w-full items-center justify-between rounded-lg bg-[#2684FF] px-4 py-3 text-sm font-medium text-white hover:bg-blue-600">
              New Message
              <Plus size={20} />
            </button>

            <div className="mt-4 space-y-1">
              {folders.map((folder) => {
                const Icon = folder.icon;

                return (
                  <div
                    key={folder.name}
                    className={`flex items-center justify-between rounded-lg px-3 py-3 text-sm ${
                      folder.name === "Inbox"
                        ? "bg-[#EAF2FC] text-[#2684FF]"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      <span>{folder.name}</span>
                    </div>

                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-500">
                      {folder.count}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="my-5 border-t border-gray-100"></div>

            <p className="mb-3 text-xs font-medium text-gray-400">Other</p>

            <div className="space-y-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center gap-3 px-3 text-sm text-gray-500"
                >
                  <CircleDot size={13} style={{ color: category.color }} />
                  <span>{category.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-r border-gray-100 p-4">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Messages</h2>
              <button className="text-gray-500">
                <MoreHorizontal size={20} />
              </button>
            </div>

            <div className="mt-4 flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full text-sm outline-none"
              />
            </div>

            <div className="mt-4 space-y-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  onClick={() => setSelectedMessageId(message.id)}
                  className={`rounded-xl p-3 cursor-pointer transition ${
                    selectedMessageId === message.id
                      ? "bg-[#EAF2FC] border border-blue-100"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${message.color}`}
                      >
                        {message.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <h3 className="truncate text-sm font-semibold text-gray-800">
                        {message.name}
                      </h3>
                    </div>

                    <span className="shrink-0 text-xs text-gray-400">
                      {message.date}
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <p className="truncate text-sm font-medium text-gray-700">
                      {message.subject}
                    </p>

                    {message.starred && (
                      <Star
                        size={15}
                        className="shrink-0 fill-yellow-400 text-yellow-400"
                      />
                    )}
                  </div>

                  <p className="mt-1 truncate text-xs text-gray-400">
                    {message.preview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold">Message Preview</h2>

          <div className="flex min-w-0 flex-col">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 text-sm font-bold text-gray-800">
                  {selectedMessage.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {selectedMessage.name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {selectedMessage.email}
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400">Mar 12, 2035 – 09:45 AM</p>

                <div className="mt-2 flex items-center justify-end gap-3 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <CircleDot size={13} className="text-blue-500" />
                    Guest Inquiry
                  </span>

                  <button className="flex items-center gap-1">
                    <Reply size={14} />
                    Reply
                  </button>

                  <button className="flex items-center gap-1">
                    <Forward size={14} />
                    Forward
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-gray-50 p-4">
              <div className="flex h-full flex-col rounded-2xl bg-white p-4">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {selectedMessage.subject}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {selectedMessage.body}
                  </p>

                  <div className="mt-4 space-y-1 text-sm text-gray-700">
                    <p>Thank you,</p>
                    <p className="font-semibold">Emily Carter</p>
                    <p className="text-gray-400">Room 210 – Deluxe Suite</p>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between border-b border-gray-200 px-3 py-3 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <span>To</span>
                      <span className="rounded-md border border-gray-200 px-2 py-1">
                        Emily Carter
                      </span>
                    </div>

                    <div className="flex gap-3">
                      <button>Cc</button>
                      <button>Bcc</button>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 border-b border-gray-200 px-3 py-3 text-gray-500">
                    <span className="text-xs">Aa</span>
                    <Bold size={15} />
                    <Italic size={15} />
                    <Underline size={15} />
                    <AlignLeft size={15} />
                    <Link size={15} />
                    <Smile size={15} />
                    <Image size={15} />
                  </div>

                  <textarea
                    placeholder="Type something"
                    className="min-h-[180px] w-full resize-none p-3 text-sm outline-none"
                  />

                  <div className="p-3">
                    <button className="rounded-lg bg-[#2684FF] px-5 py-3 text-sm font-medium text-white hover:bg-blue-600">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
