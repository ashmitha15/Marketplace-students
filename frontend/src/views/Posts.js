import './pages.scss'
import Header from './components/Header';
import PostsLeftWrapper from './PostsLeftWrapper'
import posts from '../images/posts.png'
import { mdiDeleteCircle } from '@mdi/js';
import { mdiImageEditOutline } from '@mdi/js';
import Icon from '@mdi/react'
import { useState, useEffect} from "react"
import axios from 'axios';
import $ from "jquery";
import Input from './components/Input'
import Button from './components/Button';
import { Link } from "react-router-dom";
import Label from './components/Label';
import {useSelector} from 'react-redux'
function Posts({
}) {
    const dataSelect = useSelector(state => state.logData);
    let data=dataSelect[dataSelect.length-1]
    const [changeVar, setChangeVar] = useState("Add")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState();
    const [img,setImg] = useState("")
    const [result, setResult] = useState("");
    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    };
    let fileUpload = (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.append('image', photo, photo.name);
        axios.post('http://localhost:8000/core_php.php', fd, config
        ).then(res=>
        {
        console.log(res);
        }
        );    
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        fileUpload(e)
        const form = $(e.target);
        $.ajax({ 
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
        e.target.reset();
        alert('Post added successfully')
        setDescription('')
        getposts()
    };
    useEffect(() => {
        setDescription('')
        if(result==='true')
        {
            // alert('Post added successfully')
        }
    },[ result])
    const editpost = (e) => {
        e.preventDefault();
        setDescription($(e.target).serializeArray()[0].value)
        setImg($(e.target).serializeArray()[1].value)
        setChangeVar("Edit")
    }
    const deletePost = (e) => {
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
        getposts();
    }
    const handleEdit = (e) => {
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
        e.target.reset();
        alert('Post edited successfully')
        setDescription('')
        setChangeVar('Add')
        getposts()
    };
    const [posts, getpostss]=useState([])
    const getposts = () => {
        $.ajax({
            type: "POST",
            url: 'http://localhost:8000/fetch-posts.php',
            data: 'name='+data.userId,
            success(data) {
                getpostss(eval(data));
            },
        }); 
      }
      useEffect(()=> {
        getposts();
      },[]);
  return (
  <>
    <Header/>
    {data.logIn?<div className='contact-wrapper'>
        <div className='contact-header'>
            Posts
        </div>
        <div className='posts-body'>
            <div className='partition1'>
            {changeVar==='Add'?<form className='posts-left-wrapper' onSubmit={(event) => handleSumbit(event)}
                action="http://localhost:8000/add-post.php"
                method="post" enctype='multipart/form-data'>
                <span className='heading'>Add new post</span><br/>
                <input value={data.userId} name='userid' style={{display:'none'}}/> 
                <Label text='Add photo'/><br/>
                <input type='text' value={photo?.name} name='photo1' style={{display:'none'}}/> 
                <Input type="file" accept="image/png, image/gif, image/jpeg" onChange={handlePhoto} />
                <Label text='Post Description'/><br/>
                <Input type='text' required  name='description' onChange={(event) => handleDescription(event)} value={description}/><br/>
                <Button text='Add Post' type='submit' />
            </form>:
            <form className='posts-left-wrapper' onSubmit={(event) => handleEdit(event)}
                action="http://localhost:8000/edit-post.php"
                method="post" enctype='multipart/form-data'>
                <span className='heading'>Edit post</span><br/>
                <input value={data.userId} name='userid' style={{display:'none'}}/> 
                <input type='text' value={img} name='photo1' onChange={(event) => setImg(event)} style={{display:'none'}}/> 
                <Label text='Post Description'/><br/>
                <Input type='text' required  name='description' onChange={(event) => handleDescription(event)} value={description}/><br/>
                <Button text='Edit Post' type='submit' />
            </form>}
            </div>
            <div className='partition2'>
            <div className='clubs-container'>
                <span className='heading'>Posts</span><span></span><span></span>
                {posts?.map(data => {
                return (
                    <>
                    <div className='grid-item'>
                    <img src={require('../controllers/image/'+data[1])} alt='failed to load image' style={{cursor:'pointer'}} className='img' />
                    <div className='content cont'>{data[0]}</div>
                    <div className='content cont icon-div'>
                        <form  onSubmit={(event) => editpost(event)}>
                            <span title='edit'>
                                <input style={{display:'none'}} name='description' value={data[0]}/>
                                <input style={{display:'none'}} name='image' value={data[1]}/>
                                <button type='submit'><Icon path={mdiImageEditOutline} className='icon ' /></button>
                            </span>
                        </form>
                        <form action="http://localhost:8000/delete-post.php" method="post" onSubmit={(event) => deletePost(event)}><span title='delete'><input style={{display:'none'}} name='description' value={data[0]}/><button type='submit'><Icon path={mdiDeleteCircle} className='icon delete-icon' /></button></span></form>
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

export default Posts;
