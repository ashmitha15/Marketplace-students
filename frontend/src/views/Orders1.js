import './pages.scss'
import Header from './components/Header';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Button from './components/Button';
import {useSelector} from 'react-redux'
import $ from "jquery";

function Orders1({
}) {
    const dataSelect = useSelector(state => state.logData);
    let data=dataSelect[dataSelect.length-1]
    const location=useLocation();
    const [ordersData, getOrders] = useState([])
    const return1 = () => {
        alert('Return initiated')
    }
    const getOrder = () => {
        $.ajax({
            type: "POST",
            url: 'http://localhost:8000/fetch-orders1.php',
            data: 'name='+data.userId,
            success(data) {
                getOrders(eval(data));
            },
        }); 
    }
    useEffect(()=> {
        getOrder();
        if(ordersData.length==0) {
            getOrder()
        }
    },[]);
  return (
  <>
    <Header/>
    {data.logIn?<div className='contact-wrapper'>
        <div className='contact-header'>
            Manage your Orders
        </div>
        <div className='cart-wrapper'>
            <div className='cart-body'>
            {ordersData?.map(data => {
                return (
                    <div className='item'>
                    <span>{data[0]}</span>
                    <span>{data[1]}</span>
                    <span><Button text='Return' onClick={return1}/></span>
            </div>
                );
        })}
            </div>
        </div>
    </div>:<p className='login-first'>You have to login first</p>}
  </>
  );
}

export default Orders1;
