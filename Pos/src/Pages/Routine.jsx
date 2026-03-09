import React from 'react';
import "./Routine.css";
import { useState,useEffect } from 'react'
export default function Routine(Props) {
    const [data,setdata]=useState();
    useEffect(()=>{
        const response=fetch('http://localhost:3000/health/data')
        .then(response=>response.json())
        .then(data=>{console.log("data set hogyaa bhai"),setdata(data)})
        .catch(err=>console.log(err));
    },[]);
    if(!data){
        return <h1></h1>
    }
  return (
    <div className='Main'>
      <div><h1>{Props.title}</h1></div>
      <div className='Total_Pushups'>{data[0][Props.kya]}</div>
    </div>
  )
}
