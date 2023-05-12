import './pages.scss'
import BarChart from './BarChart';
import Label from './components/Label';
import Header from './components/Header';
import { useState, useEffect} from "react"
import axios from 'axios';
function SchoolAdminDashboard({
    showHeader
}) {
    const [details, getdetailss]=useState([])
    const getdetails = () => {
        axios.get('http://localhost:8000/student-dashboard.php').then((response)=>{
            getdetailss(response.data)
        }).catch(error=>console.error('Error'))
    }
	useEffect(()=> {
        getdetails();
    },[]);
  return (
    <>
    {showHeader && <><Header type='school'/>
    <div className='contact-wrapper'>
    <div className='contact-header'>
        School admin Dashboard
    </div>
    </div></>}
    <div className={showHeader?'admin-wrapper business-dashboard':'admin-wrapper'}>
        <div>
            <div className='inner-div'>
                <div className='part1'><BarChart/></div>
                <div className='part2'>
                    <div className='inner-div'>
                        <div className='box'><Label text='Total number of students'/></div>
                        <div className='box'><Label text='Total number of clubs'/></div>
                    </div>
                    <div className='long-box'>
                        <Label text='This graph shows the number of students registered for each university'/>
                    </div>
                </div>
            </div>
            <div className='table-block'>
                <table className='table1'>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Major</th>
                        <th>University</th>
                    </tr>
                    {details.map(data => {
                            return (
                            <tr>
                                <td>{data[0]}</td>
                                <td>{data[1]}</td>
                                <td>{data[2]}</td>
                                <td>{data[3]}</td>
                                <td>{data[4]}</td>
                                <td>{data[5]}</td>
                                <td>{data[6]}</td>
                                <td>{data[7]}</td>
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

export default SchoolAdminDashboard;
