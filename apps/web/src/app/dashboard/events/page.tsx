import DashboardSidebar from '@/components/DashboardSidebar';

export default function DashboardEvent() {
  return (
    <>
      <div className="flex flex-row">
        <DashboardSidebar />
        <div className=" max-w-[1200px] mx-auto p-4">
          <div className="flex flex-col">
            <h1 className="font-bold text-[30px] py-3 text-center">
              Your events list
            </h1>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-black">
                <thead className="text-xs text-black uppercase bg-gray-300">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Event Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Start Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      End Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd: bg-white even:bg-gray-200 border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap"
                    >
                      Event Name Here
                    </th>
                    <td className="px-6 py-4">Event Category Here</td>
                    <td className="px-6 py-4">Event Location Here</td>
                    <td className="px-6 py-4">Event StartDate Here</td>
                    <td className="px-6 py-4">Event EndDate Here</td>
                  </tr>
                  <tr className="odd: bg-white even:bg-gray-200 border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap"
                    >
                      Event Name Here
                    </th>
                    <td className="px-6 py-4">Event Category Here</td>
                    <td className="px-6 py-4">Event Location Here</td>
                    <td className="px-6 py-4">Event StartDate Here</td>
                    <td className="px-6 py-4">Event EndDate Here</td>
                  </tr>
                  <tr className="odd: bg-white even:bg-gray-200 border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap"
                    >
                      Event Name Here
                    </th>
                    <td className="px-6 py-4">Event Category Here</td>
                    <td className="px-6 py-4">Event Location Here</td>
                    <td className="px-6 py-4">Event StartDate Here</td>
                    <td className="px-6 py-4">Event EndDate Here</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
