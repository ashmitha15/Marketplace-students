import './pages.scss'
import LineChartComponent from './LineChart';
import Label from './components/Label';
import Header from './components/Header';
import { useState, useEffect} from "react"
import axios from 'axios';
function BusinessOwnerDashboard({
    showHeader
}) {
    const [products, getproductss]=useState([])
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
    {showHeader && <><Header type='business'/>
    <div className='contact-wrapper'>
    <div className='contact-header'>
        Business Dashboard
    </div>
    </div></>}
    <div className={showHeader?'admin-wrapper business-dashboard':'admin-wrapper'}>
        <div>
            <div className='inner-div'>
                <div className='part1'><LineChartComponent/></div>
                <div className='part2'>
                    <div className='inner-div'>
                        <div className='box'><Label text='Total number of products'/></div>
                        <div className='box'><Label text='Your business is doing great :)'/></div>
                    </div>
                    <div className='long-box'>
                        <Label text='This graph shows the number of quantity available for each product'/>
                    </div>
                </div>
            </div>
            <div className='table-block'>
                <table className='table1'>
                    <tr>
                        <th>Name</th>
                        <th style={{minWidth:'250px'}}>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                    {products.map(data => {
                            return (
                            <tr>
                                <td>{data[0]}</td>
                                <td style={{minWidth:'250px'}}>{data[1]}</td>
                                <td>{data[2]}</td>
                                <td>{data[3]}</td>
                                <td>{data[5]}</td>
                            </tr>
                            );
                        })}
                </table>
            </div>
        </div>
    </div>
    </>
  );
}

export default BusinessOwnerDashboard;