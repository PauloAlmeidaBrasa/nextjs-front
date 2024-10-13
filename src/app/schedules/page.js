
'use client';
import React from 'react';

import ScheduleTable from './list';
import AddScheduleToggle from "./addScheduleToggle";


async function fetchSchedules() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scheduling/list`, {
    next: { revalidate: 10 },
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch schedules');
  }
  return  result.data;
}

const handleDeleteSchedule = async (id) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scheduling/delete/${id}`, {
      method: 'DELETE',
  });
  fetchSchedules();
};

const SchedulesPage = async () => {

  const schedules = await fetchSchedules();

  return (  
    <div>
      <h1>Schedules</h1>
        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <ScheduleTable schedules={schedules}  onDeleteSchedule={handleDeleteSchedule} />
        <AddScheduleToggle />
        </div>
    </div>
  );
};

export default SchedulesPage;
