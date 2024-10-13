
"use client";

import React, { useState,useEffect  } from "react";

const Modal = ({ schedule, onClose, onUpdate  }) => {
    const [scheduleId, setScheduleId] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [available, setAvailable] = useState(true);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if (schedule) {
          setScheduleId(schedule.schedule_id)
          setDateStart(parseDateString(schedule.date_start).toISOString().slice(0, 16));
          setDateEnd(parseDateString(schedule.date_end).toISOString().slice(0, 16));
          setAvailable(schedule.available);
          setUserId(schedule.user_id);
        }
    }, [schedule]);

    const updateSchedule = () => {
        // Create an updated schedule object
        const updatedSchedule = {
          ...schedule,
          schedule_id: scheduleId,
          date_start: dateStart,
          date_end: dateEnd,
          available: available,
          user_id: userId,
        };
        
        onUpdate(updatedSchedule);
        onClose();
      };

    if (!schedule) return null;

    function parseDateString(dateString) {
      const [datePart, timePart] = dateString.split(' ');
      const [day, month, year] = datePart.split('/').map(Number);
      const [hours, minutes] = timePart.split(':').map(Number);
      
      return new Date(year, month - 1, day, hours, minutes);
  }

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
        <div className="footer-btns-modal">
          <button onClick={updateSchedule}>Atualizar</button>
          <button onClick={onClose}>Close</button>
        </div>

      </div>
      </div>
      <style jsx>{`
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.7); /* Dark overlay */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            width: 400px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        .modal-content h2 {
            margin-bottom: 20px;
            font-size: 24px;
            color: #333;
        }
        .modal-content label {
            display: block;
            margin-bottom: 10px;
            text-align: left;
            color: #555;
        }
        .modal-content input {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 16px;
        }
        .modal-content button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }
        .modal-content button:hover {
            background-color: #0056b3;
        }
        .modal-content button:last-child {
            background-color: #6c757d; /* Gray for close button */
        }
        .modal-content button:last-child:hover {
            background-color: #5a6268;
        }
        .footer-btns-modal {
          display: flex;
          justify-content: space-around;
        }
      `}</style>
    </div>
  );
};

/* app/components/modalStyles.css */


  

export default Modal;
