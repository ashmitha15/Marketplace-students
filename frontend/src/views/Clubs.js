import './pages.scss'
import Header from './components/Header';
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
function Clubs({
}) {
    const dataSelect = useSelector(state => state.logData);
    let data=dataSelect[dataSelect.length-1]
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [photo, setPhoto] = useState();
    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
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
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }
    const deleteClub = (e) => {
        e.preventDefault();
        const form = $(e.target);
        {console.log(form.serialize())}
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
        getClubs();
    }
    const [result, setResult] = useState("");
    useEffect(() => {
        setName('')
        setDescription('')
    },[ result])
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
        alert('Club added successfully')
        setName('')
        setDescription('')
        getClubs()
        setChangeVar('Add')
    };
    const [clubs, getClubss]=useState([])
  const getClubs = () => {
    $.ajax({
        type: "POST",
        url: 'http://localhost:8000/fetch-clubs.php',
        data: 'name='+data.userId,
        success(data) {
            getClubss(eval(data));
        },
    }); 
  }
  useEffect(()=> {
    getClubs();
  },[]);
  const [changeVar, setChangeVar] = useState("Add")
  const editclub = (e) => {
    e.preventDefault();
    setName($(e.target).serializeArray()[0].value)
    setDescription($(e.target).serializeArray()[1].value)
    setChangeVar("Edit")
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
        alert('Club edit successfully')
        setName('')
        setDescription('')
        setChangeVar('Add')
    };
  return (
  <>
    <Header/>
    {data.logIn?<div className='contact-wrapper'>
        <div className='contact-header'>
            Clubs
        </div>
        <div className='posts-body'>
            <div className='partition1'>
            {changeVar==='Add'?<form className='posts-left-wrapper' onSubmit={(event) => handleSumbit(event)}
                action="http://localhost:8000/add-club.php"
                method="post" enctype='multipart/form-data'>
                <span className='heading'>Add new club</span><br/>
                <input value={data.userId} name='userid' style={{display:'none'}}/>  
                <Label text='Add photo'/><br/>
                <Input type="file" accept="image/png, image/gif, image/jpeg" onChange={handlePhoto} />
                <input type='text' value={photo?.name} name='photo1' style={{display:'none'}}/> 
                <Label text='Club Name'/><br/>
                <Input type='text'required name='name' onChange={(event) => handleName(event)} value={name}/><br/>
                <Label text='Club Description'/><br/>
                <Input type='text' required name='description' onChange={(event) => handleDescription(event)} value={description}/><br/>
                <Button text='Add Club' type='submit' />
            </form>:
            <form className='posts-left-wrapper' onSubmit={(event) => handleEdit(event)}
                action="http://localhost:8000/edit-club.php"
                method="post" enctype='multipart/form-data'>
                <span className='heading'>Edit club</span><br/>
                <input value={data.userId} name='userid' style={{display:'none'}}/> 
                <input type='text' value={photo?.name} name='photo1' style={{display:'none'}}/> 
                <Label text='Club Name'/><br/>
                <Input type='text' name='name' value={name} style={{display:'none'}}/><br/>
                <Label text='Club Description'/><br/>
                <Input type='text' required name='description' onChange={(event) => handleDescription(event)} value={description}/><br/>
                <Button text='Edit Club' type='submit' />
            </form>}
            </div>
            <div className='partition2'>
            <div className='clubs-container'>
                <span className='heading'>Clubs</span><span></span><span></span>
                {clubs?.map(data => {
                return (
                    <>
                    <div className='grid-item'>
                    <Link to='../club-detail' state={{name:data[0],description:data[1],photo:data[2]}}><img src={require('../controllers/image/'+data[2])} alt='failed to load image' className='img'/></Link>
                    <div className='content cont'>{data[0]}</div>
                    <div className='content cont icon-div'>
                    <form  onSubmit={(event) => editclub(event)}>
                            <span title='edit'>
                                <input style={{display:'none'}} name='name' value={data[0]}/>
                                <input style={{display:'none'}} name='description' value={data[1]}/>
                                <button type='submit'><Icon path={mdiImageEditOutline} className='icon ' /></button>
                            </span>
                        </form>
                        <form action="http://localhost:8000/delete-club.php" method="post" onSubmit={(event) => deleteClub(event)}><span title='delete'><input style={{display:'none'}} name='name' value={data[0]}/><button type='submit'><Icon path={mdiDeleteCircle} className='icon delete-icon' /></button></span></form>
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

export default Clubs;
