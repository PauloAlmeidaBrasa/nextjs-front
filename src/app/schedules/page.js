// app/schedules/page.js

import React from 'react';

import ScheduleTable from './list';
import AddSchedule from "./add";

async function fetchSchedules() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scheduling/list`, {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch schedules');
  }
  return  result.data;
}

const SchedulesPage = async () => {



  const schedules = await fetchSchedules();

  return (  
    <div>
      <h1>Schedules</h1>
        <ScheduleTable schedules={schedules} />
        <div>
        <AddSchedule />
        </div>
    </div>
  );
};

export default SchedulesPage;
