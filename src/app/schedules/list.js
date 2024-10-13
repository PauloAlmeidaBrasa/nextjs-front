"use client";


import React from "react";

const ScheduleTable = ({ schedules }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString(); // Adjust the format as needed
      };
  return (
    <div className="container">
      <h1>Schedule List</h1>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Date Start</th>
            <th>Date End</th>
            <th>Available</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {schedules.length > 0 ? (
            schedules.map((schedule) => (
              <tr key={schedule.id}>
                <td>{schedule.date_start}</td>
                <td>{schedule.date_end}</td>
                <td>{schedule.available ? 'Yes' : 'No'}</td>
                <td>{schedule.user_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No schedules available</td>
            </tr>
          )}
        </tbody>
      </table>
      <style jsx>{`
        .container {
        display: flex;
        justify-content: center;  /* Center horizontally */
        align-items: center;      /* Center vertically */
        min-height: 100vh;        /* Make sure the table is vertically centered */
        }

        .schedule-table {
        width: 80%;               /* Adjust the width as needed */
        border-collapse: collapse; /* Merge cell borders */
        margin: 20px 0;           /* Add some margin around the table */
        }

        .schedule-table th, 
        .schedule-table td {
        border: 1px solid #ddd;   /* Add a border to the cells */
        padding: 10px;            /* Add padding inside the cells */
        text-align: center;       /* Center text in the cells */
        }

        .schedule-table th {
        background-color: #f2f2f2;  /* Light background for the header */
        font-weight: bold;         /* Bold header text */
        }

        .schedule-table tr:nth-child(even) {
        background-color: #f9f9f9; /* Add alternate row color */
        }

        .schedule-table tr:hover {
        background-color: #f1f1f1; /* Hover effect for rows */
        }

        h1 {
        text-align: center;        /* Center the table title */
        margin-bottom: 20px;       /* Add space below the title */
        }

      `}</style>
    </div>
    
  );
};

export default ScheduleTable;
