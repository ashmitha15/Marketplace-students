import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Components.scss'
import { useNavigate } from "react-router-dom";

function SchoolDropDown() {
  const navigate = useNavigate();
  const cart = (e) => {
    navigate('/cart')
  }
  const profile = (e) => {
    navigate('/profile')
  }
  const orders = (e) => {
    navigate('/orders')
  }
  const posts = (e) => {
    navigate('/posts')
  }
  const clubs = (e) => {
    navigate('/clubs')
  }
  const products = (e) => {
    navigate('/products')
  }
  const admin = (e) => {
    navigate('/admin')
  }
  const businessProfile = (e) => {
    navigate('/business-profile')
  }
  const schoolAdminProfile = (e) => {
    navigate('/school-admin-profile')
  }
  const businessDashboard = (e) => {
    navigate('/business-dashboard')
  }
  const schoolAdmin = (e) => {
    navigate('/school-admin-dashboard')
  }
  return (
    <DropdownButton id="dropdown-basic-button" title="" className='drop'>
      <Dropdown.Item onClick={posts}>Posts</Dropdown.Item>
      <Dropdown.Item onClick={clubs}>Clubs</Dropdown.Item>
      <Dropdown.Item onClick={schoolAdminProfile}>School Admin Profile</Dropdown.Item>
      <Dropdown.Item onClick={schoolAdmin}>School Admin Dashboard</Dropdown.Item>

    </DropdownButton>
  );
}

export default SchoolDropDown;