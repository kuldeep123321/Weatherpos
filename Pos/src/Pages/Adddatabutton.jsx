import React from 'react';
import "./Adddatabutton.css";
import { useNavigate } from 'react-router-dom';
export default function Adddatabutton() {
    const navigate = useNavigate();
  return (
    <div className='but'>
        <button onClick={()=>navigate('/add-data')}>Add Data</button>
    </div>
  )
}
