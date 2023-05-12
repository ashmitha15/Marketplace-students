import './pages.scss'
import Header from './components/Header';
import Input from './components/Input'
import Button from './components/Button';
import Label from './components/Label';
import { useState, useEffect, useCallback } from "react"
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"
import $ from "jquery";
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'
import {logIn} from '../log'
function Login({
}) {
    const [result, setResult] = useState("");
    const navigate = useNavigate();
    const dataSelect = useSelector(state => state.logData);
    const dispatch = useDispatch();
    const handleLogin = (e) => {
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
        let data = {userId:result.charAt(0),logIn:true,type:result.substring(1)}
        dispatch(logIn(data))
        if(result=='false')
            alert('Invalid username or password')
        else
        {
            if(data.type=='student')
                navigate('/home')
            else if(data.type=='business')
                navigate('/business-dashboard')
            else if(data.type=='school')
                navigate('/school-admin-dashboard')
            else if(data.type=='admin')
                navigate('/admin')
        }
    };
    const handleForgotPassword = (e) => {
        navigate('/forgot-password')
    };
    
    const [name1, setName1] = useState("")
    const [email1, setEmail1] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [major, setMajor] = useState("")
    const [gender, setGender] = useState("")
    const [university, setUniversity] = useState("")
    const [type, handleType] = useState("")
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
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleName1 = (e) => {
        setName1(e.target.value);
    }
    const handleEmail1 = (e) => {
        setEmail1(e.target.value);
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
    emailjs.send("service_wff943i","template_y3e4mip",{
        name: name,
        email: email,
        },'n5ub04XMglozAIxHs')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    fileUpload(e);
    const form = $(e.target);
    $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
            setResult(data);
        },
    });
    };
    useEffect(() => {
    if(result==='true')
        navigate('/home')
    if(result==='false')
        alert('Registration failed')
    if(result==='user already registered')
        alert(result)
    },[handleLogin, result])
  return (
  <>
    <Header grey/>
    <div className='login-wrapper'>
        <div className='partition'> 
            <form action="http://localhost:8000/login.php"
            method="post"
            onSubmit={(event) => handleLogin(event)}>
            <div className='login'>
                <h2 className='heading'>Sign in</h2>
                <p>Sign in to your account and explore the products now!</p>
                <Input type='email' placeholder='Email' name="email" onChange={(event) => handleName1(event)} required/>
                <Input type='password' placeholder='Password' name="password"  onChange={(event) => handleEmail1(event)} required/>
                <p className='link' onClick={handleForgotPassword}>Forgot password?</p>
                <Button text='Sign in' type='submit'/>
            </div>
            </form>
        </div>
        <div className='partition'>
            <form onSubmit={(event) => handleSumbit(event)}
            action="http://localhost:8000/signup.php"
            method="post" enctype='multipart/form-data'>
            <div className='register'>
                <h2 className='heading'>Register</h2>
                <p>Sign up here and discover a great amount of merchandise</p>
                <Input type='text' placeholder='Name' name="name" value={name} onChange={(event) => handleName(event)} required />
                <Input type='date' placeholder='Date of birth' name="dob" value={dob} onChange={(event) => handleDob(event)} required/>
                <Input type='text' placeholder='Address' name="address" value={address} onChange={(event) => handleAddress(event)} required/>
                <Input type='email' placeholder='Email' name='emailId' value={email} onChange={(event) => handleEmail(event)}  required/>
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
                <select name='type' required>
                    <option hidden value=' ' disabled selected>Account type</option>
                    <option onChange={(event) => handleType(event)} value='student'>Student</option>
                    <option onChange={(event) => handleType(event)} value='business'>Business Owner</option>
                    <option onChange={(event) => handleType(event)} value='school'>School Admin</option>
                </select>
                <Label text='Profile photo'/>
                <Input type="file" accept="image/png, image/gif, image/jpeg" onChange={handlePhoto} />
                <button onClick = {fileUpload}>Click here to upload image</button>
                <input type='text' value={photo?.name} name='photo1' style={{display:'none'}}/> 
                <Button text='Register' type='submit'/>
            </div>
            </form> 
        </div>
    </div>
  </>
  );
}

export default Login;
