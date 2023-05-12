import './pages.scss'
import Input from './components/Input'
import Button from './components/Button';
import Label from './components/Label';
import { useNavigate } from "react-router-dom";
function ClubsLeftWrapper({
    heading,
    type
}) {
  const navigate = useNavigate();
  const handleSumbit = (e) => {
    alert('New club created')
    navigate('/clubs')
  };
  return (
  <>
    <form className='posts-left-wrapper' onSubmit={(event) => handleSumbit(event)}>
        <span className='heading'>{heading}</span><br/>
        <Label text={type+' photo'}/><br/>
        <Input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" required/><br/>
        <Label text='Club Name'/><br/>
        <Input type='text'required/><br/>
        <Label text='Club Description'/><br/>
        <Input type='text' required/><br/>
        <Button text={type+' Club'} type='submit'/>
    </form>
  </>
  );
}

export default ClubsLeftWrapper;
