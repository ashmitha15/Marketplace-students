import './Components.scss'
import { Link } from "react-router-dom"
import DropDown from './Dropdown'
import chatbot from '../../images/chatbot.webp'
import {useSelector, useDispatch} from 'react-redux'
import {logIn} from '../../log'
import { useNavigate } from "react-router-dom";
function Header({
  grey,
}) {
  const dataSelect = useSelector(state => state.logData);
  let data=dataSelect[dataSelect.length-1]
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blog=()=> {
    window.open("http://axb1312.uta.cloud/")
  }
  const logout=()=> {
    dispatch(logIn({userId:'0',logIn:false,type:''}))
    navigate('../')
  }
  return (
    <header>
        <div className='header-wrapper' style={grey?{backgroundColor:'#dae2ed'}:{}}>
            <div className='heading'>
                Mercado Escolar
            </div>
            <div className='nav-bar'>
                {data.type!='admin' && <Link to='/home'>Home</Link>}
                <Link to='/about'>About</Link>
                <span onClick={blog}>Blog</span>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
                {!data.logIn && <Link to='/login'>Login/Register</Link>}
                {data.logIn && <span onClick={logout}>Log out</span>}
                {<Link to='/chatbot'><img src={chatbot} width='35px' height='100%' style={{borderRadius:'50%'}}/></Link>}
                
                {data.userId!='0' && <DropDown/>}
            </div>
        </div>
    </header>
  );
}

export default Header;
