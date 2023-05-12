import './pages.scss'
import Header from './components/Header';
import Input from './components/Input'
import Button from './components/Button';
import Label from './components/Label';
function Contact({
}) {
  const handleSumbit = (e) => {
    alert('Query submitted successfully. Your query will be answered in max 48 hours')
  };
  return (
  <>
    <Header/>
    <form className='contact-wrapper' onSubmit={(event) => handleSumbit(event)}>
        <div className='contact-header'>
            Contact
        </div>
        <div className='contact-body'>
          <div className='inner-div'>
            <Label text='Please enter your query here. Your query will be answered in max 48 hours'/>
            <Input placeholder='Subject' required />
            <Input placeholder='Query' type='textarea' required/>
            <select>
              <option hidden value=' ' disabled selected>Select the business owner</option>
              <option>abc</option>
              <option>xyz</option>
            </select>
            <Input placeholder='Phone Number' type='number' required/>
            <Input placeholder='Email' type='email' required/>
            <Button text='Submit' type='submit'/>
          </div>
        </div>
    </form>
  </>
  );
}

export default Contact;
