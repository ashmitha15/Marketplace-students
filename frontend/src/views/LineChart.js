import {
	LineChart,
	ResponsiveContainer,
	Legend, Tooltip,
	Line,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';
import { useState, useEffect} from "react"
import axios from 'axios';
function LineChartComponent() {
	const [products, getproductss]=useState([])
	let pdata=products?.map(data => {
		return (
			{name:data[0],quantity:data[5],price:data[2]}
		);
	})
    const getproducts = () => {
        axios.get('http://localhost:8000/fetch-all-products.php').then((response)=>{
            getproductss(response.data)
        }).catch(error=>console.error('Error'))
    }
	useEffect(()=> {
        getproducts();
    },[]);
	return (
		<>
			<h1 className="text-heading">
				Line Chart Using Rechart
			</h1>
			<ResponsiveContainer width="100%" aspect={3}>
				<LineChart data={pdata}  >
					<CartesianGrid />
					<XAxis dataKey="name"
						interval={'preserveStartEnd'} />
					<YAxis></YAxis>
					<Legend />
					<Tooltip />
					<Line dataKey="quantity"
						stroke="#8884d8" activeDot={{ r: 8 }} />
					<Line dataKey="price"
						stroke="green" activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		</>
	);
}

export default LineChartComponent;
