import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useState, useEffect} from "react"
import axios from 'axios';
function PieRechartComponent () {
   const [details, getdetailss]=useState([])
    const getdetails = () => {
        axios.get('http://localhost:8000/pie-chart.php').then((response)=>{
            getdetailss(response.data)
        }).catch(error=>console.error('Error'))
    }
	useEffect(()=> {
        getdetails();
    },[]);
   const COLORS = ["#736536","#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF", "#A7A18E","#CB9673","#1EF504","#1BC6B9","#64199B","#9F766D","#B2D434","#44FAD9"];
   const pieData = details?.map(data => {
		return (
			{name:data[1]+'%',value:data[0]*10}
		);
	})
   const CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "5px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}`}</label>
         </div>
      );
   }
   return null;
};
return (
   <PieChart width={550} height={300}>
   <Pie
      data={pieData}
      color="#000000"
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={120}
      fill="#8884d8"
   >
      {pieData.map((entry, index) => (
         <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
         />
      ))}
   </Pie>
   <Tooltip content={<CustomTooltip />} />
   <Legend />
   </PieChart>
   );
}
export default PieRechartComponent;