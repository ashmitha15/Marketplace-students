import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useState, useEffect} from "react"
import axios from 'axios';
const BarChartComponent = () => {
  const [details, getdetailss]=useState([])
    const getdetails = () => {
        axios.get('http://localhost:8000/bar-chart.php').then((response)=>{
            getdetailss(response.data)
        }).catch(error=>console.error('Error'))
    }
	useEffect(()=> {
        getdetails();
    },[]);
const data = details?.map(data => {
  return (
    {clubs:data[0],students:data[1]}
  );
})
return (
<BarChart width={550} height={500} data={data}>
    <Bar dataKey="students" fill="#8faed9" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="clubs" />
    <YAxis dataKey="students" />
  </BarChart>
);
}
  
export default BarChartComponent;