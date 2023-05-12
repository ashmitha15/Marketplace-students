import './pages.scss'
import Header from './components/Header';
import Label from './components/Label';
import profile from '../images/business-owner.jpg'
import posts from '../images/posts.png'
import { mdiDeleteCircle } from '@mdi/js';
import { mdiImageEditOutline } from '@mdi/js';
import Icon from '@mdi/react'
function BusinessProfile({
    
}) {
  return (
  <>
    <Header/>
    <div className='contact-wrapper'>
        <div className='contact-header'>
            Business Profile
        </div>
        <div className='profile-wrapper'>
          <div className='partition1'>
              <div className='image-div'><img src={profile} className='img' alt='image loading'/></div>
              <div className='details'>
                <span className='heading'>Details</span>
                <Label text='Business Name'/>
                <Label text='Email'/>
              </div>
          </div>
          <div className='partition2'>
          <div className='clubs-container'>
            <span className='heading'>Products</span><span></span><span></span>
            <div className='grid-item'>
              <img src={''} className='img' alt='image loading'/>
              <div className='content cont'>Product 1</div>
              <div className='content cont icon-div'>
                  <span title='edit'><Icon path={mdiImageEditOutline} className='icon'/></span>
                  <span title='delete'><Icon path={mdiDeleteCircle} className='icon delete-icon'/></span>
              </div>
            </div>
            <div className='grid-item'>
              <img src={''} className='img' alt='image loading'/>
              <div className='content cont'>Product 2</div>
              <div className='content cont icon-div'>
                  <span title='edit'><Icon path={mdiImageEditOutline} className='icon'/></span>
                  <span title='delete'><Icon path={mdiDeleteCircle} className='icon delete-icon'/></span>
              </div>
            </div>
            <div className='grid-item'>
              <img src={''} className='img' alt='image loading'/>
              <div className='content cont'>Product 3</div>
              <div className='content cont icon-div'>
                  <span title='edit'><Icon path={mdiImageEditOutline} className='icon'/></span>
                  <span title='delete'><Icon path={mdiDeleteCircle} className='icon delete-icon'/></span>
              </div>
            </div>
          </div>
          <div className='clubs-container'>
            <span className='heading'>Posts</span><span></span><span></span>
            <div className='grid-item'>
              <img src={posts} className='img' alt='image loading'/>
              <div className='content cont'>Post 1</div>
              <div className='content cont icon-div'>
                  <span title='edit'><Icon path={mdiImageEditOutline} className='icon'/></span>
                  <span title='delete'><Icon path={mdiDeleteCircle} className='icon delete-icon'/></span>
              </div>
            </div>
            <div className='grid-item'>
              <img src={posts} className='img' alt='image loading'/>
              <div className='content cont'>Post 2</div>
              <div className='content cont icon-div'>
                  <span title='edit'><Icon path={mdiImageEditOutline} className='icon'/></span>
                  <span title='delete'><Icon path={mdiDeleteCircle} className='icon delete-icon'/></span>
              </div>
            </div>
            <div className='grid-item'>
              <img src={posts} className='img' alt='image loading'/>
              <div className='content cont'>Post 3</div>
              <div className='content cont icon-div'>
                  <span title='edit'><Icon path={mdiImageEditOutline} className='icon'/></span>
                  <span title='delete'><Icon path={mdiDeleteCircle} className='icon delete-icon'/></span>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  </>
  );
}

export default BusinessProfile;
