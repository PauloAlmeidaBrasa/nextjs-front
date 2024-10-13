"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // useRouter for navigation after form submission

const  AddSchedule = () => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [available, setAvailable] = useState(true);
  const [userId, setUserId] = useState("");
  const router = useRouter(); // use for redirecting after successful submission

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the payload to send to the Symfony API
    const newSchedule = {
      date_start: dateStart,
      date_end: dateEnd,
      available,
      user_id: userId,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/scheduling/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSchedule),
      });

      if (res.ok) {
        // Redirect to schedule listing after a successful submission
        router.push("/schedules");
      } else {
        console.error("Failed to add schedule");
      }
    } catch (error) {
      console.error("Error adding schedule:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
        <h2>Add New Schedule</h2>
        
        <label>Date Start:</label>
        <input
          type="datetime-local"
          value={dateStart}
          onChange={(e) => setDateStart(e.target.value)}
          required
        />

        <label>Date End:</label>
        <input
          type="datetime-local"
          value={dateEnd}
          onChange={(e) => setDateEnd(e.target.value)}
          required
        />

        <label>Available:</label>
        <select value={available} onChange={(e) => setAvailable(e.target.value === "true")}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>

        <label>User ID:</label>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />

        <button type="submit" style={{ marginTop: "10px" }}>Add Schedule</button>
      </form>
      <style jsx>
        {
          `
            form {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 300px;
            }

            input, select, button {
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
            }

            button {
            background-color: #0070f3;
            color: white;
            cursor: pointer;
            }

            button:hover {
            background-color: #005bb5;
            }

          `
        }
      </style>
    </div>
  );
}
export default AddSchedule;