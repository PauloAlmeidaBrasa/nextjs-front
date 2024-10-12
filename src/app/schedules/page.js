// app/schedules/page.js

import React from 'react';

async function fetchSchedules() {
    console.log(`${process.env.NEXT_PUBLIC_API_URL}/scheduling`)
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scheduling`, {
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
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id}>
            <p>Date Start: {new Date(schedule.date_start).toLocaleString()}</p>
            <p>Date End: {new Date(schedule.date_end).toLocaleString()}</p>
            <p>Available: {schedule.available ? 'Yes' : 'No'}</p>
            <p>User ID: {schedule.user_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulesPage;
