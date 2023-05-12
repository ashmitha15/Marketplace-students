import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home'
import Login from './views/Login'
import About from './views/About'
import Contact from './views/Contact'
import MercadoEscolar from "./views/MercadoEscolar";
import Services from "./views/Services";
import Cart from "./views/Cart";
import Profile from "./views/Profile";
import Orders from "./views/Orders";
import Posts from "./views/Posts";
import Products from "./views/Products";
import Clubs from "./views/Clubs";
import Checkout from "./views/Checkout";
import ForgotPassword from "./views/ForgotPassword";
import Admin from "./views/Admin";
import BusinessProfile from "./views/BusinessProfile";
import BusinessOwnerDashboard from "./views/BusinessOwnerDashboard";
import SchoolAdmin from "./views/SchoolAdmin";
import ClubDetail from "./views/ClubDetail";
import ProductDetail from "./views/ProductDetail";
import Chatbot from './views/Chatbot'
import EditProfile from "./views/EditProfile";
import PostAds from "./views/PostAds";
import Orders1 from "./views/Orders1";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={<MercadoEscolar />}>
          <Route index element={<MercadoEscolar />} />
          <Route path='home' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='services' element={<Services/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='edit-profile' element={<EditProfile/>}/>
          <Route path='school-admin-profile' element={<Profile schoolAdmin/>}/>
          <Route path='orders' element={<Orders/>}/>
          <Route path='fetch-orders' element={<Orders1/>}/>
          <Route path='chatbot' element={<Chatbot/>}/>
          <Route path='posts' element={<Posts/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='clubs' element={<Clubs/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='product-detail' element={<ProductDetail/>}/>
          <Route path='club-detail' element={<ClubDetail/>}/>
          <Route path='forgot-password' element={<ForgotPassword/>}/>
          <Route path='admin' element={<Admin/>}/>
          <Route path='business-dashboard' element={<BusinessOwnerDashboard showHeader/>}/>
          <Route path='school-admin-dashboard' element={<SchoolAdmin/>}/>
          <Route path='business-profile' element={<BusinessProfile/>}/>
          <Route path='post-ads' element={<PostAds/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
