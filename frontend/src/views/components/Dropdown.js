import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './Components.scss'
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'

function DropDown() {
  const navigate = useNavigate();
  const dataSelect = useSelector(state => state.logData);
  let data=dataSelect[dataSelect.length-1]
  const cart = (e) => {
    navigate('/cart')
  }
  const profile = (e) => {
    navigate('/profile')
  }
  const orders = (e) => {
    navigate('/fetch-orders')
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
    navigate('/profile')
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
  const postAds = (e) => {
    navigate('/post-ads')
  }
  return (
    <DropdownButton id="dropdown-basic-button" title="" className='drop'>
      {data.type=='student' && <Dropdown.Item onClick={profile}>Profile</Dropdown.Item>}
      {data.type=='student' && <Dropdown.Item onClick={orders}>Orders</Dropdown.Item>}
      {data.type=='student' && <Dropdown.Item onClick={cart}>Cart</Dropdown.Item>}
      {data.type!='admin' && <Dropdown.Item onClick={posts}>Posts</Dropdown.Item>}
      {data.type=='student' && <Dropdown.Item onClick={clubs}>Clubs</Dropdown.Item>}
      {data.type=='school' && <Dropdown.Item onClick={clubs}>Clubs</Dropdown.Item>}
      {data.type!='admin' && <Dropdown.Item onClick={products}>Products</Dropdown.Item>}
      {data.type=='admin' && <Dropdown.Item onClick={admin}>Super Admin Dashboard</Dropdown.Item>}
      {data.type=='business' && <Dropdown.Item onClick={businessProfile}>Business Profile</Dropdown.Item>}
      {data.type=='business' && <Dropdown.Item onClick={postAds}>Advertise</Dropdown.Item>}
      {data.type=='school' && <Dropdown.Item onClick={schoolAdminProfile}>School Admin Profile</Dropdown.Item>}
      {data.type=='school' && <Dropdown.Item onClick={schoolAdmin}>School Admin Dashboard</Dropdown.Item>}
      {data.type=='business' && <Dropdown.Item onClick={businessDashboard}>Business Owner Dashboard</Dropdown.Item>}

    </DropdownButton>
  );
}

export default DropDown;