import './pages.scss'
import Header from './components/Header';
import Input from './components/Input'
import Button from './components/Button';
import Label from './components/Label';
import { useState, useEffect, useCallback, useMemo } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import $ from "jquery";
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import {logIn} from '../log'
function EditProfile({
}) {
    const [result, setResult] = useState("");
    const navigate = useNavigate();
    const dataSelect = useSelector(state => state.logData);
    let data=dataSelect[dataSelect.length-1]
    const location=useLocation();
    const dispatch = useDispatch();
    const [id, setID] = useState(location.state.id)
    const [name, setName] = useState(location.state.name)
    const [password, setPassword] = useState(location.state.password)
    const [confirmPassword, setConfirmPassword] = useState(location.state.password)
    const [dob, setDob] = useState(location.state.dob)
    const [address, setAddress] = useState(location.state.address)
    const [major, setMajor] = useState(location.state.major)
    const [gender, setGender] = useState(location.state.gender)
    const [university, setUniversity] = useState(location.state.university)
    const handleGender = (e) => {
        setGender(e.target.value);
    }
    const handleUniversity = (e) => {
        setUniversity(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleDob = (e) => {
        setDob(e.target.value);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
    }
    const handlePhoto = (e) => {
        setPhoto(e.target.files[0]);
    }
    const handleMajor = (e) => {
        setMajor(e.target.value);
    }
    const [photo, setPhoto] = useState();
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
    // fileUpload(e);
    const form = $(e.target);
    $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
            setResult(data);
        },
    });
    alert('profile updated')
    navigate(-1)
    };
    useEffect(() => {
    if(result==='true')
        navigate(-1)
    if(result==='false')
        alert('Registration failed')
    if(result==='error')
        alert(result)
    },[ result])
  return (
  <>
    <Header/>
    <div className='contact-wrapper'>
        <div className='contact-header'>
            Edit Profile
        </div>
    </div>
    <div className='login-wrapper'>
        <div className='partition'>
            <form onSubmit={(event) => handleSumbit(event)}
            action="http://localhost:8000/edit-profile.php"
            method="post" enctype='multipart/form-data'>
            <div className='register'>
                <h2 className='heading'>Edit Profile</h2>
                <Input type='text' placeholder='Name' name="userId" value={id} style={{display:'none'}}/>
                <Input type='text' placeholder='Name' name="name" value={name} onChange={(event) => handleName(event)} required />
                <Input type='date' placeholder='Date of birth' name="dob" value={dob} onChange={(event) => handleDob(event)} required/>
                <Input type='text' placeholder='Address' name="address" value={address} onChange={(event) => handleAddress(event)} required/>
                <Input type='password' placeholder='Password' name='password' onChange={(event) => handlePassword(event)} value={password} required/>
                <Input type='password' placeholder='Confirm Password' onChange={(event) => handleConfirmPassword(event)} value={confirmPassword} pattern={password} title='Both the password and confirm password fields value must be matched' required/>
                <select  required name="gender">
                    <option hidden value=' ' disabled selected >Gender</option>
                    <option onChange={(event) => handleGender(event)} value='Male'>Male</option>
                    <option onChange={(event) => handleGender(event)} value='Female'>Female</option>
                    <option onChange={(event) => handleGender(event)} value='Other'>Other</option>
                </select>
                <Input type='text' placeholder='Major' name='major' onChange={(event) => handleMajor(event)} value={major} />
                <select name='university' required>
                    <option hidden value=' ' disabled selected>University</option>
                    <option onChange={(event) => handleUniversity(event)} value='Stanford University'>Stanford University</option>
                    <option onChange={(event) => handleUniversity(event)} value='Columbia University'>Columbia University</option>
                    <option onChange={(event) => handleUniversity(event)} value='Princeton University'>Princeton University</option>
                    <option onChange={(event) => handleUniversity(event)} value='Yale University'>Yale University</option>
                    <option onChange={(event) => handleUniversity(event)} value='Harvard University'>Harvard University</option>
                    <option onChange={(event) => handleUniversity(event)} value='Duke University'>Duke University</option>
                </select>
                {/* <Label text='Profile photo'/> */}
                {/* <Input type="file" accept="image/png, image/gif, image/jpeg" onChange={handlePhoto} /> */}
                {/* <button onClick = {fileUpload}>Click here to upload image</button> */}
                {/* <input type='text' value={photo?.name} name='photo1' style={{display:'none'}}/>  */}
                <Button text='Update' type='submit'/>
            </div>
            </form> 
        </div>
    </div>
  </>
  );
}

export default EditProfile;
