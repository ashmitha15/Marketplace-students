import './pages.scss'
import PieRechartComponent from './PieChart';
import Label from './components/Label';
import { students } from './dummy-data';
import { useState, useEffect} from "react"
import axios from 'axios';
import { Link } from "react-router-dom"; 
function StudentsDashboard({
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
    <div className='admin-wrapper'>
        <div>
            <div className='inner-div'>
                <div className='part1'><PieRechartComponent/></div>
                <div className='part2'>
                    <div className='inner-div'>
                        <div className='box'><Label text='Total number of students'/></div>
                        <div className='box'><Label text='Total number of Universities'/></div>
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
                            <Link to='../edit-profile' state={{id:data[0],name:data[1],dob:data[3],address:data[4],password:data[8],gender:data[5],major:data[6],university:data[7]}}>
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
                            </Link>
                            );
                        })}
                </table>
            </div>
        </div>
    </div>
  );
}

export default StudentsDashboard;
