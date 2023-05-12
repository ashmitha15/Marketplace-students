import Header from './components/Header'
import { mdiCartVariant } from '@mdi/js';
import Icon from '@mdi/react'
import { useNavigate,useLocation } from "react-router-dom";
import { useState, useEffect} from "react"
import axios from 'axios';
import { Link } from "react-router-dom"; 
import {useSelector} from 'react-redux'
import {logIn} from '../log'
function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const dataSelect = useSelector(state => state.logData);
  let data=dataSelect[dataSelect.length-1]
  const [products, getproductss]=useState([])
    const getproducts = () => {
        axios.get('http://localhost:8000/fetch-all-products.php').then((response)=>{
            getproductss(response.data)
        }).catch(error=>console.error('Error'))
    }
    const [clubs, getClubss]=useState([])
    const getClubs = () => {
        axios.get('http://localhost:8000/fetch-all-clubs.php').then((response)=>{
            getClubss(response.data)
        }).catch(error=>console.error('Error'))
    }
    const [posts, getpostss]=useState([])
    const getposts = () => {
        axios.get('http://localhost:8000/fetcha-all-posts.php').then((response)=>{
            getpostss(response.data)
        }).catch(error=>console.error('Error'))
      }
    useEffect(()=> {
        getproducts();
        getClubs();
        getposts();
    },[]);
  return (
    <>
        <Header/>
        {data.type==='student'?<div className='home-wrapper'>
          <div className='home-header'>
              <div className='heading'>
                Home
              </div>
              <div className='icon-div'>
                <Icon path={mdiCartVariant} className='icon'/>
              </div>
          </div>
          <div className='home-body'>
            <div className='partition1'>
            <div className='grid-container'>
              <span className='heading'>Explore Products</span><span></span><span></span><span></span>
              {products?.map(data => {
                    return (
                    <div class="grid-item">
                        <Link to='../product-detail' state={{name:data[0],description:data[1],price:data[2],category:data[4],photo:data[3]}}><img className='img' src={require('../controllers/image/'+data[3])} alt='failed to load image' style={{cursor:'pointer'}}/></Link>
                        <div className='content'>{data[0]}: <b>{data[2]}</b></div>
                    </div>
                    );
                })}
            </div>
            <div className='internal-partition'>
              <div className='clubs-container'>
                <span className='heading'>Explore Clubs</span><span></span><span></span>
                {clubs?.map(data => {
                    return (
                    <div class="grid-item">
                        <Link to='../club-detail' state={{name:data[0],description:data[1],photo:data[2]}}><img src={require('../controllers/image/'+data[2])} className='img' alt='failed to load image'/></Link>
                        <div className='content'>{data[0]}</div>
                    </div>
                    );
                })}
              </div>
              <div className='clubs-container'>
                <span className='heading'>Explore Posts</span><span></span><span></span>
                {posts?.map(data => {
                    return (
                    <div class="grid-item">
                        <img src={require('../controllers/image/'+data[1])} className='img' alt='failed to load image'/>
                        <div className='content'>{data[0]}</div>
                    </div>
                    );
                })}
              </div>
            </div>
            </div>
            <div className='partition2'>
              <div className='clubs-container abc'>
                <span className='heading'>Advertisments</span><span></span><span></span>
                {products?.map(data => {
                    return (
                    <div class="grid-item" style={data[6]=='true'?{}:{display:'none'}}>
                        <img src={require('../controllers/image/'+data[3])} className='img' alt='failed to load image'/>
                        <div className='content'>{data[1]}</div>
                    </div>
                    );
                })}
              </div>
            </div>
          </div>
        </div>:<p className='login-first'>You have to login first</p>}
    </>
  ); 
}

export default Home;
