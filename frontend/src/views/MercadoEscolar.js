import Header from './components/Header'
import Label from './components/Label';
import Search from './components/Search';
import information from '../images/information.jpg'
import club from '../images/club.jpg'
import trade from '../images/trade.jpg'
function MercadoEscolar() {
  return (
    <>
        <Header/>
        <div className='mercado-escolar'>
          <div className='partition1'>
            <Label text='This is your college Market place'/>
            <h2 className='heading'> Welcome to a new shopping <br/>experience!</h2>
            <div className='search-div'><Search/></div>
          </div>
          <div className='about-wrapper'>
          <div className='partition2'>
            <div className='content-div'>
                <span className='heading'>About Mercado Escolar</span>
                <p className='text'>Mercado Escolar is an application which will help both business owners and the students. 
                    This website helps business owners to post all their products and advertise them so that the students can see the products and purchase.
                    Also students can find a wide variety of products here and can search and choose the best fit for them.
                    They can place an order through this website. They can easily manage their purchases. This website is not all about products. 
                    Students can view the clubs running in their organization and can enroll in them. Club owners can post and inform student about upcomming events. So every one can stay in touch. Students can also post the items which they want to sell.
                </p>
            </div>
          </div>
          </div>
          <div className='Services-wrapper'>
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
        </div>
    </>
  ); 
}

export default MercadoEscolar;
