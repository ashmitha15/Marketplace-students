import './pages.scss'
import Header from './components/Header';
import Label from './components/Label';
import posts from '../images/posts.png' 
import bookClub from '../images/bookclub.jpg'
import { mdiDeleteCircle } from '@mdi/js';
import { mdiImageEditOutline } from '@mdi/js';
import Icon from '@mdi/react'
import axios from 'axios'
import $ from "jquery";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react"
import Button from './components/Button';
import {useSelector} from 'react-redux'
function Profile({
  schoolAdmin
}) {
  const dataSelect = useSelector(state => state.logData);
  let data1 = dataSelect[dataSelect.length-1]
  const [profile, getProfiles]=useState([])
  const getProfile = () => {
    $.ajax({
      type: "POST",
      url: 'http://localhost:8000/profile.php',
      data: 'name='+data1.userId,
      success(data) {
        getProfiles(eval(data));
      },
  }); 

  }
  const [products, getproductss]=useState([])
    const getproducts = () => {
        $.ajax({
          type: "POST",
          url: 'http://localhost:8000/fetch-products.php',
          data: 'name='+data1.userId,
          success(data) {
              getproductss(eval(data));
          },
      }); 
    }
    const [clubs, getClubss]=useState([])
    const getClubs = () => {
        $.ajax({
          type: "POST",
          url: 'http://localhost:8000/fetch-clubs.php',
          data: 'name='+data1.userId,
          success(data) {
            getClubss(eval(data));
          },
      }); 
    }
    const [posts, getpostss]=useState([])
    const getposts = () => {
        $.ajax({
          type: "POST",
          url: 'http://localhost:8000/fetch-posts.php',
          data: 'name='+data1.userId,
          success(data) {
            getpostss(eval(data));
          },
      }); 
        
      }
    useEffect(()=> {
        getproducts();
        getClubs();
        getposts();
        getProfile();
    },[]);
  return (
  <>
    <Header/>
    {data1.logIn?<div className='contact-wrapper'>
        {data1.type=='student' && <div className='contact-header'>
        Student Profile
        </div>}
        {data1.type=='business' && <div className='contact-header'>
        Business Profile
        </div>}
        <div className='profile-wrapper'>
          <div className='partition1'>
          {profile.map(data => {
                  return (
              <><div className='image-div'><img src={require('../controllers/image/' + data[7])} className='img' alt='image loading' /></div><div className='details'>
                      <span className='heading'>Details</span>
                      <div className='profile-wrapper'>
                        <div className='details'>
                          <Label text={'Name: ' + data[0]} />
                          <Label text={'Email: ' + data[1]} />
                          <Label text={'Date of birth: ' + data[2]} />
                          <Label text={'Address: ' + data[3]} />
                          <Label text={'Gender: ' + data[4]} />
                          <Label text={'Major: ' + data[5]} />
                          <Label text={'University: ' + data[6]} />
                          <Link to='../edit-profile' state={{id:data1.userId,name:data[0],dob:data[2],address:data[3],password:data[8],gender:data[4],major:data[5],university:data[6]}}><Button text='Edit Profile'/></Link>
                        </div>
                      </div>
                    </div></>
          );
                })}
                </div>
          <div className='partition2'>
          <div className='clubs-container'>
            <span className='heading'>Products</span><span></span><Link to='../products'><Button text='Edit/Delete'/></Link>
            {products?.map(data => {
                    return (
                    <div class="grid-item">
                        <Link to='../product-detail' state={{name:data[0],description:data[1],price:data[2],category:data[4],photo:data[3]}}><img className='img' src={require('../controllers/image/'+data[3])} alt='failed to load image' style={{cursor:'pointer'}}/></Link>
                        <div className='content'>{data[0]}</div>
                    </div>
                    );
                })}
          </div>
          {data1.type!='business' &&<div className='clubs-container'>
            <span className='heading'>Clubs</span><span></span><Link to='../clubs'><Button text='Edit/Delete'/></Link>
            {clubs?.map(data => {
                    return (
                    <div class="grid-item">
                        <Link to='../club-detail' state={{name:data[0],description:data[1],photo:data[2]}}><img src={require('../controllers/image/'+data[2])} className='img' alt='failed to load image'/></Link>
                        <div className='content'>{data[0]}</div>
                    </div>
                    );
                })}
          </div>}
          <div className='clubs-container'>
            <span className='heading'>Posts</span><span></span><Link to='../posts'><Button text='Edit/Delete'/></Link>
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
    </div>:<p className='login-first'>You have to login first</p>}
  </>
  );
}

export default Profile;
