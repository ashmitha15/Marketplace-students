import './pages.scss'
import Header from './components/Header';
import { useState, useEffect} from "react"
import axios from 'axios';
import $ from "jquery";
import Button from './components/Button';
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
function PostAds({
}) {
    const dataSelect = useSelector(state => state.logData);
    let data=dataSelect[dataSelect.length-1]
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
      };
    const [result, setResult] = useState("");
    useEffect(() => {
        if(result==='true')
        {
            // alert('Product added successfully')
        }
        if(result==='false')
            alert('Error in adding product')
    },[ result])
    const [products, getproductss]=useState([])
    const postAd = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
        alert('Your product advertised successfully')
    }
    const getproducts = () => {
        $.ajax({
            type: "POST",
            url: 'http://localhost:8000/fetch-products.php',
            data: 'name='+data.userId,
            success(data) {
                getproductss(eval(data));
            },
        }); 
    }
    useEffect(()=> {
        getproducts();
    },[]);
  return (
  <>
    <Header/>
    {data.logIn?<div className='contact-wrapper'>
        <div className='contact-header'>
            Products
        </div>
        <div className='posts-body'>
            <div className='partition2'>
            <div className='clubs-container'>
                <span className='heading'>Products</span><span></span><span></span>
                {products?.map(data => {
                return (
                    <>
                    <div className='grid-item'>
                    <Link to='../product-detail' state={{name:data[0],description:data[1],price:data[2],category:data[4],photo:data[3]}}><img src={require('../controllers/image/'+data[3])} alt='failed to load image' style={{cursor:'pointer'}} className='img' /></Link>
                    <div className='content cont'>{data[0]}</div>
                    <div style={{fontSize:'14px', maxWidth:'100px',display:'flex',justifyContent:'center'}}>
                        <form  onSubmit={(event) => postAd(event)} action="http://localhost:8000/post-ad.php"
                        method="post">
                            <span title='edit'>
                                <input style={{display:'none'}} name='name' value={data[0]}/>
                                {data[5]=='true' ?<Button type='submit' text='Ad in progress' disabled/>: <Button type='submit' text='Post Ad'/>}
                            </span>
                        </form>
                    </div>
                    </div>
                    </>
                );
                })}
            </div>
            </div>
        </div>
    </div>:<p className='login-first'>You have to login first</p>}
  </>
  );
}

export default PostAds;
