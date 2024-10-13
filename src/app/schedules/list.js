"use client";


import React, { useState } from "react";
import Modal from "./modal";

const ScheduleTable = ({ schedules }) => {

    const [selectedSchedule, setSelectedSchedule] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (schedule) => {
        setSelectedSchedule(schedule); // Set the selected schedule
        setIsModalOpen(true); // Open the modal
    };
    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
        setSelectedSchedule(null); // Clear selected schedule
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
                <td>
                  <button onClick={() => openModal(schedule)}>Edit Schedule</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No schedules available</td>
            </tr>
          )}
        </tbody>
      </table>
       {/* Render the Modal */}
       {isModalOpen && <Modal schedule={selectedSchedule} onClose={closeModal} />}
      <style jsx>{`
        .container {
        display: flex;
        justify-content:  space-around;
        align-items: center;  
        min-height: 100vh;     
        }

        .schedule-table {
        width: 80%;              
        border-collapse: collapse;
        margin: 20px 0;           
        }

        .schedule-table th, 
        .schedule-table td {
        border: 1px solid #ddd;   
        padding: 10px;           
        text-align: center;       
        }

        .schedule-table th {
        background-color: #f2f2f2;  
        font-weight: bold;        
        }

        .schedule-table tr:nth-child(even) {
        background-color: #f9f9f9;
        }

        h1 {
        text-align: center;        
        margin-bottom: 20px;      
        }

      `}</style>
    </div>
    
  );
};

export default ScheduleTable;
