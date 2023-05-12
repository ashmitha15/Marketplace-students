import './pages.scss'
import Header from './components/Header';
import Label from './components/Label';
import Button from './components/Button';
import { useNavigate, useLocation } from "react-router-dom";
import { data } from 'jquery';
import {useSelector} from 'react-redux'
function ClubDetail({
}) {
  const location=useLocation();
  const navigate = useNavigate();
  const back = (e) => {
    navigate(-1)
  }
  const cart = (e) => {
    alert('joined club')
    navigate(-1)
  }
  const dataSelect = useSelector(state => state.logData);
  let data=dataSelect[dataSelect.length-1]
  return (
  <>
    <Header/>
    {data.logIn?<div className='contact-wrapper'>
        <div className='contact-header'>
          Club detail
        </div>
        <div className='cart-wrapper'>
            <span className='button-span'><Button text='Back' onClick={back}/></span>
            <div className='cart-body'>
                <img className='img' src={require('../controllers/image/'+location.state.photo)} />
                <Label text={'Club Name: '+location.state.name}/>
                <Label text={'Club Description: '+location.state.description}/>
                <span className='button-span'><Button text='Join Club' onClick={cart}/></span>
            </div>
        </div>
    </div>:<p className='login-first'>You have to login first</p>}
  </>
  );
}

export default ClubDetail;
