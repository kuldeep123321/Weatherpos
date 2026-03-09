import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Adddata() {
    const navigate = useNavigate();
    const [data, setdata] = useState({ date: '', pushups: '', squats: "", meditation_minutes: '', study_minutes: '' });

    const submitt = async (e) => {
        e.preventDefault();
        try {
            // ✅ URL ko backend se match kiya: /health/add-data
            const response = await fetch('http://localhost:3000/health/add-data', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log("data saved");
                setdata({ date: '', pushups: '', squats: "", meditation_minutes: '', study_minutes: '' });
                navigate("/");
            } else {
                // Agar response 404 ya 500 aaya toh yahan pata chalega
                console.log("Response okay nahi hai bhai, Status:", response.status);
                navigate("/");
            }
        } catch (err) {
            console.log("Network error ya Server band hai bhai:", err);
        }
    };

    return (
        <div>
            <form onSubmit={submitt} className='formm'>
                {/* required zaroori hai taaki khali data na jaye */}
                <input type="date" required value={data.date} onChange={(e) => setdata({ ...data, date: e.target.value })} />
                <input type="number" required placeholder='pushups' value={data.pushups} onChange={(e) => setdata({ ...data, pushups: e.target.value })} />
                <input type="number" required placeholder='squats' value={data.squats} onChange={(e) => setdata({ ...data, squats: e.target.value })} />
                <input type="number" required placeholder='medi' value={data.meditation_minutes} onChange={(e) => setdata({ ...data, meditation_minutes: e.target.value })} />
                <input type="number" required placeholder='study' value={data.study_minutes} onChange={(e) => setdata({ ...data, study_minutes: e.target.value })} />
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}