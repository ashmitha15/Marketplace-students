import './pages.scss'
import Header from './components/Header';
import Input from './components/Input'
import Button from './components/Button';

function ForgotPassword({
}) {
  return (
  <>
    <Header />
    <div className='login-wrapper'>
        <form>
             {/* //</div>onSubmit={(event) => handleLogin(event)}> */}
            <div className='login forgot-password'>
                <h2>Forgot Password</h2>
                <p>Please enter your email id</p>
                <Input type='email' placeholder='Email'/>
                <Button text='Submit' type='submit'/>
            </div>
        </form>
    </div>
  </>
  );
}

export default ForgotPassword;
