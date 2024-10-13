'use client';

import { useState } from 'react';
import AddSchedule from "./add";

export default function AddScheduleToggle() {
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleForm = () => {
    setShowAddForm((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleForm}>
        {showAddForm ? 'Fechar' : 'Add Agendamento' }
      </button>

      {showAddForm && <AddSchedule />}
    </div>
  );
}
