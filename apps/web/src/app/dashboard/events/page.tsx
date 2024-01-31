import DashboardSidebar from '@/components/DashboardSidebar';

export default function DashboardEvent() {
  return (
    <>
      <div className="flex flex-row">
        <DashboardSidebar />
        <div className=" max-w-[1200px] mx-auto p-4">
          <div className="flex flex-col">
            <h1>Your events list</h1>

            <div className="w-[400px] h-[80px] bg-gray-300 rounded-lg">
              <h1>Event Name</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
