import './pages.scss'
import Header from './components/Header';
import Button from './components/Button';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import {useSelector} from 'react-redux'
import $ from "jquery";
function Cart({
}) {
    const dataSelect = useSelector(state => state.logData);
    let data=dataSelect[dataSelect.length-1]
    const [cartData, getcarts] = useState([])
    const getCart = () => {
        $.ajax({
            type: "POST",
            url: 'http://localhost:8000/fetch-cart.php',
            data: 'name='+data.userId,
            success(data) {
                getcarts(eval(data));
            },
        }); 
    }
    let sum=0
    useEffect(()=> {
        getCart();
    },[]);
  return (
  <>
    <Header/>
    {data.logIn?<div className='contact-wrapper'>
        <div className='contact-header'>
            Cart
        </div>
        <div className='cart-wrapper'>
            <div className='cart-body'>
            {cartData?.map(data => {
                return (
                    <div className='item'>
                        <span>{data[0]}</span>
                        <span>{data[1]}</span>
                        <p style={{display:'none'}}>{sum=sum+ Number(data[1])}</p>
                    </div>      
                );
            })}
                <div className='item checkout-div'>
                    <span><Link to="../checkout"><Button text='Checkout' state={{name:cartData}}/></Link></span>
                    <span>Total<br/>${sum}</span>
                </div>
            </div>
        </div>
    </div>:<p className='login-first'>You have to login first</p>}
  </>
  );
}

export default Cart;
