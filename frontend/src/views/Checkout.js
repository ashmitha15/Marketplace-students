import './pages.scss'
import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input';
import Label from './components/Label';
import { Link, useLocation } from "react-router-dom";

function Checkout({
}) {
    const location=useLocation();
  return (
  <>
    <Header/>
    <div className='contact-wrapper'>
        <div className='contact-header'>
            Checkout
        </div>
        <form className='checkout-wrapper'>
            <p className='heading'>Credit/Debit card</p>
            <span className='wrapper'><Label text='Please ensure your card can be used for online transactions'/></span>
            <Input placeholder='Card Number' type='number' required /><br/>
            <Input placeholder='Name on Card' type='text' required /><br/>
            <Label text='Valid till:'/>
            <Input type='month' required />
            <Input placeholder='CVV' type='number' required />
            <Link to="../orders" state={{data:location.state?.data}}><Button text='Place Order' type='submit'/></Link>
        </form>
    </div>
  </>
  );
}

export default Checkout;
