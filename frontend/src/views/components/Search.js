import './Components.scss'
import Input from './Input';
import Button from './Button'
function Search({

}) {
  return (
    <div className='search'>
      <Input type='text' placeholder='search' />
      <Button text='Search'/>
    </div>
  );
}

export default Search;
