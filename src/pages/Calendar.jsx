import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

function Calendar() {

  const calendarDays = Array.from({ length: 35 }, (_, index) => index -2);
  return (
    <div className="w-full min-h-screen bg-[#EEF4FA] rounded-2xl p-4 md:p-5">
      <div className="grid grid-cols-1 lg:grid-cols-[208px_minmax(0,1fr)] bg-white rounded-2xl min-h-[850px] overflow-hidden">
        <div className="border-r border-gray-100 p-4">
          <h2 className="text-lg font-semibold">Schedule Overview</h2>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-l text-gray-500">Total All Schedules</p>
            <h3 className="text-l text-gray-500">12</h3>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-l text-gray-500">Staff Schedule</p>
            <h3 className="text-l text-gray-500">5</h3>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-l text-gray-500">Guest Appointment</p>
            <h3 className="text-l text-gray-500">4</h3>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-l text-gray-500">Maintenance Task</p>
            <h3 className="text-l text-gray-500">3</h3>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-5">
            <h3 className="text-sm font-semibold mb-4">Categories</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#2684FF]"></span>
                <p className="text-sm text-gray-600">Staff Schedule</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#B8E600]"></span>
                <p className="text-sm text-gray-600">Guest Appointment</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#FF5555]"></span>
                <p className="text-sm text-gray-600">Maintenance Task</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1 bg-[#EEF4FA] rounded-full p-1">
              <button className="bg-[#D5F000] rounded-full px-6 py-2 text-sm font-medium">
                Month
              </button>

              <button className="rounded-full px-6 py-2 text-sm font-medium hover:bg-white">
                Week
              </button>

              <button className="rounded-full px-6 py-2 text-sm font-medium hover:bg-white">
                Day
              </button>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <ChevronLeft size={18} />
              </button>

              <button className="flex items-center gap-2 font-semibold text-lg">
                March, 2026
              </button>

              <button className="p-1 hover:bg-gray-100 rounded-full">
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <select className="appearance-none bg-[#EEF4FA] rounded-full pl-4 pr-8 py-2 text-sm outline-none">
                  <option>All Category</option>
                  <option>Staff Schedule</option>
                  <option>Guest Appointment</option>
                  <option>Maintenance Task</option>
                </select>

                <ChevronDown
                  size={16}
                  className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>

              <button className="bg-[#D5F000] hover:bg-[#c5df00] rounded-lg px-4 py-2 text-sm font-medium">
                Add new
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 bg-[#EEF4FA] pt-4 rounded-lg mt-8 border-b border-gray-100 pb-4">
            <div className="text-sm text-gray-500 font-medium text-center">Sunday</div>
            <div className="text-sm text-gray-500 font-medium text-center">Monday</div>
            <div className="text-sm text-gray-500 font-medium text-center">Tuesday</div>
            <div className="text-sm text-gray-500 font-medium text-center">Wednesday</div>
            <div className="text-sm text-gray-500 font-medium text-center">Thursday</div>
            <div className="text-sm text-gray-500 font-medium text-center">Friday</div>
            <div className="text-sm text-gray-500 font-medium text-center">Saturday</div>
         
          </div>
             <div className="grid grid-cols-7">
              {calendarDays.map((day, index)=>(
                <div key={index}
                className="min-h-[120px] border-r border-b border-gray-100 p-3">
                  {day > 0 && day <= 31 && (
                    <span className="text-sm font-medium">{day}</span>
                  )}
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
export default Calendar;
