// app/components/Modal.js
"use client";

import React, { useState,useEffect  } from "react";

const Modal = ({ schedule, onClose, onUpdate  }) => {
  
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [available, setAvailable] = useState(true);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (schedule) {
          setDateStart(new Date(schedule.date_start).toISOString().slice(0, 16));
          setDateEnd(new Date(schedule.date_end).toISOString().slice(0, 16));
          setAvailable(schedule.available);
          setUserId(schedule.user_id);
        }
    }, [schedule]);

    const updateSchedule = () => {
        // Create an updated schedule object
        const updatedSchedule = {
          ...schedule,
          date_start: dateStart,
          date_end: dateEnd,
          available: available,
          user_id: userId,
        };
        
        // Call the update function passed from the ScheduleTable component
        onUpdate(updatedSchedule);
        onClose(); // Close modal after updating
      };

    if (!schedule) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Editar agendamento</h2>
          <label>
            Data início:
            <input
              type="datetime-local"
              value={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
            />
          </label>
          <label>
            Data fim:
            <input
              type="datetime-local"
              value={dateEnd}
              onChange={(e) => setDateEnd(e.target.value)}
            />
          </label>
          <label>
            Dsiponível:
            <input
              type="checkbox"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
            />
          </label>
          <label>
            Ident Usuario:
            <input
              type="number"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </label>
        <button onClick={updateSchedule}>Atualizar</button>
        <button onClick={onClose}>Close</button>
      </div>
      </div>
      <style jsx>{`
        .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000; /* Ensure modal is on top */
        }

        .modal-content {
        background-color: white; /* White background for the modal */
        padding: 20px;
        border-radius: 8px; /* Rounded corners */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
        max-width: 400px; /* Limit max width */
        width: 100%; /* Full width on smaller screens */
        }
      `}</style>
    </div>
  );
};

/* app/components/modalStyles.css */


  

export default Modal;
