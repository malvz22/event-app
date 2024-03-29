import { FaCalendar } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function DashboardSidebar() {
  return (
    <>
      {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button> */}

      <aside
        id="default-sidebar"
        className="sticky top-0 left-0 z-0 w-64 h-screen transition-transform -translate-x-full translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-200">
          <ul className="space-y-2 font-medium">
            <li>
              <div className="flex justify-center items-center font-bold text-[24px] text-black">
                Event <span className="text-[#7848F4]">Horizon</span>
              </div>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdSpaceDashboard size={25} className="text-gray-400" />
                <span className="ms-3 text-black">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard/events"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaCalendar size={25} className="text-gray-400" />
                <span className="flex-1 ms-3 whitespace-nowrap text-black">
                  Events
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/Landing"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaHome size={25} className="text-gray-400" />
                <span className="flex-1 ms-3 whitespace-nowrap text-black">
                  Back to Home
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
