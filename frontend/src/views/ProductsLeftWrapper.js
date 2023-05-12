import './pages.scss'
import Input from './components/Input'
import Button from './components/Button';
import Label from './components/Label';
function ProductsLeftWrapper({
    heading,
    type
}) {
  const handleSumbit = (e) => {
    alert('New product added')
  };
  return (
  <>
    <form className='posts-left-wrapper' onSubmit={(event) => handleSumbit(event)}>
        <span className='heading'>{heading}</span><br/>
        <Label text={type+' photo'}/><br/>
        <Input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" required /><br/>
        <Label text='Product Name'/><br/>
        <Input type='text' required /><br/>
        <Label text='Product Description'/><br/>
        <Input type='text' required /><br/>
        <Label text='Price'/><br/>
        <Input type='number' required /><br/>
        <Label text='Category'/><br/>
        <select>
            <option hidden value=' ' disabled selected>Category</option>
            <option>abc</option>
            <option>xyz</option>
        </select>
        <Button text={type+' Product'} type='submit' />
    </form>
  </>
  );
}

export default ProductsLeftWrapper;
