import './pages.scss'
import Header from './components/Header';
import Label from './components/Label';
import Button from './components/Button';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import {useSelector} from 'react-redux'
function ProductDetail({
}) {
  const dataSelect = useSelector(state => state.logData);
  let data=dataSelect[dataSelect.length-1]
  const location=useLocation();
  const navigate = useNavigate();
  const back = (e) => {
    navigate(-1)
  }
  const cart = (e) => {
    e.preventDefault()
    const fd = new FormData();
    fd.append('name',location.state.name ); 
    fd.append('price',location.state.price );
    fd.append('userid',data.userId );
    axios.post('http://localhost:8000/add-cart.php', fd
    ).then(res=>
    {
    console.log(res);
    }
    );
    navigate('/cart')
  }
  return (
  <>
    <Header/>
    {data.logIn?<div className='contact-wrapper'>
          <div className='contact-header'>
              Product Detail
          </div>
        <div className='cart-wrapper'>
            <span className='button-span'><Button text='Back' onClick={back}/></span>
            <div className='cart-body'>
                <img className='img' src={require('../controllers/image/'+location.state.photo)} />
                <Label text={'Product Name: '+location.state.name}/>
                <Label text={'Product Description: '+location.state.description}/>
                <Label text={'Price: '+location.state.price}/>
                <Label text={'Category: '+location.state.category}/>
                <span className='button-span'><Button text='Add to cart' onClick={cart}/></span>
            </div>
        </div>
    </div>:<p className='login-first'>You have to login first</p>}
  </>
  );
}

export default ProductDetail;
