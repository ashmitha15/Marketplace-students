import '../pages.scss'
import { useState, useEffect} from "react"
import axios from 'axios';
import {useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { data } from 'jquery';

function Chatting({
}) {
    const dataSelect = useSelector(state => state.logData);
    let data1=dataSelect[dataSelect.length-1]
    const [details, getdetailss]=useState([])
    const getdetails = () => {
        axios.get('http://localhost:8000/fetch-all-users.php').then((response)=>{
            getdetailss(response.data)
        }).catch(error=>console.error('Error'))
    }
	useEffect(()=> {
        getdetails();
    },[]);
    function chatNow(a,b) {
        window.open('http://localhost:3001/chat.html?username='+name+'&room='+a)
    }
    function Mychat() {
        window.open('http://localhost:3001/chat.html?username='+name+'&room='+data1.userId)
    }
    var name='me'
  return (
    <div className='chatting-wrapper'>
        <div className='part1'>
            <p>If your query is still not resolved. Please chat with that user</p>
            {details.map(data => {
                if(data1.userId==data[0]) {
                    name=data[1]
                }
                return (
                <>{data1.userId!=data[0] && <div className='chat' onClick={()=>chatNow(data[0],data[1])} >{data[1]}</div>}</>
                );
            })}
        </div>
       <div className='part2'>
            <span onClick={Mychat}>Your chat window</span>
       </div>
    </div>
  );
}

export default Chatting;
