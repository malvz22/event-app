/* eslint-disable react/no-unescaped-entities */
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import DashboardSidebar from '@/components/DashboardSidebar';
import BarChart from '@/components/chart/BarChart';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  const token = localStorage.getItem('token');

  if (!token) {
    alert('You need to Login before you can access Dashboard');
    router.push('/login');
  }

  return (
    <>
      <div className="flex flex-row">
        <DashboardSidebar />
        <div className="flex flex-col p-4 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mb-5">
            <Card className="max-w-[300px]">
              <CardHeader>
                <CardTitle>Today's Income</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Rp. 250.000,-</p>
              </CardContent>
              <CardFooter className="flex items-center">
                <p>
                  <span className="text-[#4CAF55] font-bold">55%</span> than
                  last week
                </p>
              </CardFooter>
            </Card>
            <Card className="max-w-[300px]">
              <CardHeader>
                <CardTitle>Total Event Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <p>200</p>
              </CardContent>
              <CardFooter>
                <p>
                  <span className="text-[#4CAF55] font-bold">55%</span> than
                  last week
                </p>
              </CardFooter>
            </Card>
            <Card className="max-w-[300px]">
              <CardHeader>
                <CardTitle>Event Organized</CardTitle>
              </CardHeader>
              <CardContent>
                <p>4</p>
              </CardContent>
              <CardFooter>
                <p>
                  <span className="text-[#4CAF55] font-bold">30%</span> than
                  last year
                </p>
              </CardFooter>
            </Card>
            <Card className="max-w-[300px]">
              <CardHeader>
                <CardTitle>Total Profit</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Rp. 250.000,-</p>
              </CardContent>
              <CardFooter>
                <p>
                  <span className="text-[#4CAF55] font-bold">55%</span> than
                  last week
                </p>
              </CardFooter>
            </Card>
          </div>
          <Card className="max-w-[600px] md:max-w-full">
            <CardHeader>
              <CardTitle>This Week's Profit</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
