import { useState } from "react";
import { BellIcon } from "@heroicons/react/solid";

const NotificationDropdown = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="relative">
      <BellIcon
        className="w-6 h-6 text-darkblue-500  cursor-pointer transform hover:scale-110 transition-transform duration-200"
        onClick={() => setShowNotifications(!showNotifications)}
      />
      <span
        className="absolute cursor-pointer top-0 right-0 bg-red-600 text-xs rounded-full w-4 h-4 flex items-center justify-center"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        1
      </span>

      {showNotifications && (
        <div className="absolute right-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg p-4 z-10">
          <div className="flex justify-between mb-2">
            <span className="font-bold">
              Unread Notifications <span className="text-red-600">1</span>
            </span>
            <span className="text-blue-600 text-xs cursor-pointer">MARK ALL AS READ</span>
          </div>
          <div className="border-b border-gray-300 mb-2"></div>
          <div className="text-sm">
            <div className="flex justify-between mb-2">
              <span className="font-bold">Discussion</span>
              <span className="text-xs text-gray-500">about 3 hours ago</span>
            </div>
            <p className="text-gray-700 mb-2">
              Travis Bell replied to API Key Request for AhmedAlsanadi.
            </p>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-1 rounded">VIEW</button>
              <button className="bg-gray-300 px-4 py-1 rounded">CLEAR</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;