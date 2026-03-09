import React from 'react';
import "./App.css";
import { Route,Routes } from 'react-router-dom';
import Dashpage from './Pages/Dashpage';
import Adddata from './Pages/Adddata';
export default function App() {
  return (
  <>
    <Routes>
        <Route path="/" element={<Dashpage />} />
        <Route path="/add-data" element={<Adddata/>}/>
    </Routes>
  </>
  )
}
