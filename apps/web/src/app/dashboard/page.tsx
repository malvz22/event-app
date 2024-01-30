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

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-row">
        <DashboardSidebar />
        <div className="p-4 w-full">
          <div className="flex flex-row justify-around">
            <Card className="max-w-[300px]">
              <CardHeader>
                <CardTitle>Today's Income</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Rp. 250.000,-</p>
              </CardContent>
              <hr></hr>
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
                <CardTitle>Today's Income</CardTitle>
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
            <Card className="max-w-[300px]">
              <CardHeader>
                <CardTitle>Today's Income</CardTitle>
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
        </div>
      </div>
    </>
  );
}
