import './pages.scss'
import Header from './components/Header';
import information from '../images/information.jpg'
import club from '../images/club.jpg'
import trade from '../images/trade.jpg'
function Services({
}) {
  return (
  <>
    <Header/>
    <div className='Services-wrapper'>
        <div className='Services-header'>
            Services
        </div>
        <div className='Services-body'>
        <div className='grid-container'>
              <div class="grid-item">
                <img src={information} className='img' alt='image loading'/>
              </div>
              <div class="grid-item">
                <img src={trade} className='img' alt='image loading'/>
              </div>
              <div class="grid-item">
                <img src={club} className='img' alt='image loading'/>
              </div>
              <div class="grid-item">
                <span className='content'>Exchange information with your peers</span>
              </div>
              <div class="grid-item">
                <span className='content'>Trade books and other things with your peers</span>
              </div>
              <div class="grid-item">
                <span className='content'>Check out the clubs on the campus</span>
              </div>
            </div>
        </div>
    </div>
  </>
  );
}

export default Services;
