import logo from './logo.svg';
import './App.css';
import Preloder from './components/preloder/Preloder';
import Humberger from './components/humberger/Humberger';
import Header from './components/header/Header';
import Left_menu from './components/left_menu/Left_menu';
// import Offers from './components/offers/Offers';
import Product from './components/product/Product';
import Banner from './components/banner/Banner';
import Order from './components/order/Order';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Card from './components/card/Card';
import Testimonial from './components/testimonial/Testimonial';
import { Routes,Route } from 'react-router-dom';
import About from './components/about/About';
import Offers from './components/offers/Offers';
import Daily_deals from './components/daily deals/Daily_deals';
import Recipe from './components/recipe/Recipe';
import Flash_Sales from './components/flash_sales/Flash_Sales';
import Health from './components/health/Health';
import Details from './components/details/Details';
import Add_card from './components/add_card/Add_card';
import Checkout from './components/checkout/Checkout';
import Stopwatch from './components/stopwatch/Stopwatch';
// import DisplayComponent from './components/stopwatch/DisplayComponent';
// import BtnComponent from './components/stopwatch/BtnComponent';
import Countdown from './components/countdown/Countdown';
import Navbar from './components/navbar/Navbar';
import Payment from './components/payment_success/Payment_success';
function App() {
  const newYear = new Date("Jan 1, 2024").getTime()
  return (
    <>
    <Header/>
    {/* <Left_menu/> */} 
    {/* <Offers/>
    <Product/>
    <Banner/>
    <Order/>
    <Card/>
    <Testimonial/>
    <Blog/> */}
    {/* <Stopwatch/> */}
    
    <Routes>
    <Route path="/" element={<Left_menu/>} />
    <Route path="/About" element={<About />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/Offers" element={<Offers/>} />
    <Route path="/Daily_deals" element={<Daily_deals newYear={newYear}/>} />
    <Route path="/Testimonial" element={<Testimonial />} />
    <Route path="/Recipe" element={<Recipe/>} />
    <Route path="/Flash_Sales" element={<Flash_Sales/>} />
    <Route path="/Health" element={<Health/>} />
    <Route path="/Details" element={<Details/>} />
    <Route path="/Add_card" element={<Add_card/>} />
    <Route path="/Checkout" element={<Checkout/>} />
    <Route path="/Stopwatch" element={<Stopwatch/>} />
    <Route path="/Countdown" element={<Countdown newYear={newYear}/>} />
    <Route path="/Navbar" element={<Navbar/>} />
    <Route path="/Payment" element={<Payment/>} />
    
    </Routes>
    <Footer/>
{/* // </BrowserRouter> */}
</>
  );
}

export default App;



