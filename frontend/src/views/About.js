import './pages.scss'
import Header from './components/Header';
import Button from './components/Button';
function About({
}) {
    const blogPage = () => {
        window.open("http://axb1312.uta.cloud/")
    }
  return (
    <>
    <Header/>
    <div className='about-wrapper'>
        <div className='partition1'>
            <div className='heading'>
                Welcome to <br/>Mercado Escolar
                <p className='text'>Here you will get a chance to see a wide variety of products in your college and get to know about your clubs and many more</p>
            </div>
            <div className='button-div' onClick={blogPage}><Button text='Visit Blog page'/></div>
        </div>
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
    </>
  );
}

export default About;
