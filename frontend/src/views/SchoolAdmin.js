import './pages.scss'
import Header from './components/Header';
import StudentsDashboard from './StudentDasboard';
import { useState } from 'react'
import SchoolAdminDashboard from './SchoolAdminDashboard';
import BusinessOwnerDashboard from './BusinessOwnerDashboard';
function SchoolAdmin({
}) {
    const [selected, setSelected]=useState(2)
    const business = () => {
        setSelected(2)
    }
    const student = () => {
        setSelected(3)
    }
  return (
    <>
        <Header type='admin'/>
        <div className='contact-wrapper'>
        <div className='contact-header'>
            Admin Dashboard
        </div>
        </div>
        <div className='admin-wrapper'>
            <div className='partition1'>
                {selected===2 ? <div onClick={business} className='selected'>Business Owner</div>:<div onClick={business} >Business Owner</div>}
                {selected===3 ? <div onClick={student} className='selected'>Students</div>:<div onClick={student} >Students</div>}
            </div>
            <div className='partition2'>
                {selected===1 && <SchoolAdminDashboard/>}
                {selected===2 && <BusinessOwnerDashboard/>}
                {selected===3 && <StudentsDashboard/>}
            </div>
        </div>
    </>
  );
}

export default SchoolAdmin;
