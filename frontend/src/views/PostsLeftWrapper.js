import './pages.scss'
import Input from './components/Input'
import Button from './components/Button';
import Label from './components/Label';
function PostsLeftWrapper({
    heading,
    type
}) {
  const handleSumbit = (e) => {
    alert('New post added')
  };
  return (
  <>
    <form className='posts-left-wrapper' onSubmit={(event) => handleSumbit(event)}>
        <span className='heading'>{heading}</span><br/>
        <Label text={type+' photo'}/><br/>
        <Input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" required/><br/>
        <Label text='Post Description'/><br/>
        <Input type='text' required /><br/>
        <Button text={type+' Post'} type='submit'/>
    </form>
  </>
  );
}

export default PostsLeftWrapper;
