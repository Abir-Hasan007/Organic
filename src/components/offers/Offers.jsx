import React, { useRef, useState } from 'react';
import pic from '../../assets/img/breadcrumb.jpg'
import pic02 from '../../assets/img/hero/mug.JPG'
import pic03 from '../../assets/img/hero/jug.JPG'
import SwiperCore, { Autoplay,Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
    {
      id : 1,
      tittle : 'Fresh Fruit',
      userpicture : 'http://www.kalyoncunakliyat.com/en/images/VALENCIA.jpg',
     
    },
    {
      id : 2,
      tittle : 'Fresh Fruits',
      userpicture : 'https://img.freepik.com/premium-psd/glossy-foil-cashew-nut-pouch-packet-packaging-mockup_47987-8407.jpg?w=996',
     
    },
    {
      id : 3,
      tittle : 'Fresh Vegetables',
      userpicture : 'https://img.freepik.com/premium-photo/paper-shopping-bag-fresh-organic-vegetables-white-background-concept-buying-farm-vegetables-taking-care-health-vegetarianism-country-style-farm-fair-flat-lay-top-view_164357-2392.jpg?w=900',
     
    },
    {
      id : 4,
      tittle : 'Fresh Drinks',
      userpicture : 'https://www.warehouse115.com/media/catalog/product/cache/db4e2d6282f40491753e88df674082c9/D/T/DT655801.jpg',
     
    },
    {
      id : 5,
      tittle : 'Fresh Meat',
      userpicture : 'https://s3.envato.com/files/302542651/IMG_4761-Edit_20170801.jpg',
     
    },
    
  ]

  SwiperCore.use([Autoplay,Virtual, Navigation, Pagination]);
export default function Offers() {
    const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 7 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, 'Slide ' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
   


<>
 
    <section class="hero hero-normal">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href="#">Fresh Meat</a></li>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruit & Nut Gifts</a></li>
                            <li><a href="#">Fresh Berries</a></li>
                            <li><a href="#">Ocean Foods</a></li>
                            <li><a href="#">Butter & Eggs</a></li>
                            <li><a href="#">Fastfood</a></li>
                            <li><a href="#">Fresh Onion</a></li>
                            <li><a href="#">Papayaya & Crisps</a></li>
                            <li><a href="#">Oatmeal</a></li>
                            <li><a href="#">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="#">
                                <div class="hero__search__categories">
                                    All Categories
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?"></input>
                                <button type="submit" class="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

   
    <section class="breadcrumb-section set-bg" style={{backgroundImage:`url(${pic})`}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="breadcrumb__text">
                        <h2>Special Offers</h2>
                        <div class="breadcrumb__option">
                        <Link to = '/' id = 'Left_menu' className='header__menu_li active'><a href="#">Home</a></Link>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   

   
    <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-5">
                    <div class="hero__categories">
                        
                            
                            <ul>
                            <Link to = '/Flash_Sales' id = 'Flash_Sales' className='nav-link'><a href="#">Flash Sales</a></Link>
                            <Link to = '/Daily_deals' id = 'Daily_deals' className='nav-link'><a href="#">Daily Deals</a></Link>
                            <NavDropdown title = 'Fruits & Vegetables' id="navbarScrollingDropdown" className='nav-link'> 
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3" className='link'>Fresh Vegetables</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Fresh Fruits</NavDropdown.Item></Link>
                            </NavDropdown>
                            
                            <NavDropdown title = 'Meat & Fish' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Chicken & Poultry</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Frozen Fish</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Meat</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Dried Fish</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Cooking' id="navbarScrollingDropdown" >
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Spices</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Salt & Sugar</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Rice</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Ready Mix</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Shemai & Suji</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Special Ingredients</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Oil</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Colors & Flavours</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Ghee</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Premium Ingredients</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Sauces & Pickles' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Tomato Sauces</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Pickles</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Cooking Sauces</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Other Table Sauces</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Dairy & Eggs' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Eggs</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Powder Milk</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Liquid & UHT Milk</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Yogurt & Sweets</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Cheese</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Condensed Milk & Cream</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Butter & Sour Cream</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Breakfast' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Bread</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Tea & Coffee</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Local Breakfast</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Cereals</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Honey</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Dips, Spreads & Syrups</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Energy Boosters</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Jams & Jellies</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Candy & Chocolate' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Chocolates</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Wafers</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Candies</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Gums, Mints & Mouth Fresheners</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Jellies & Marshmallows</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Snacks' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Noodles</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Cookies</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Local Snacks</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Chips & Pretzels</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Plain Biscuits</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Toast & Bakery Biscuits</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Cream Biscuits</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Pasta & Macaroni</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Soups</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Popcorn & Nuts</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Salted Biscuits</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Cakes</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Salad Dressing</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Beverages' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Tea</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Soft Drinks</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Coffee</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Syrups & Powder Drinks</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Juice</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Water</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Baking' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Flour</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Nuts & Dried Fruits</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Baking Ingredients</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Baking Tools</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Baking & Dessert Mixes</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Frozen & Canned' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Chicken Snacks</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Frozen Parathas & Roti</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Vegetable Snacks</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Mushroom Cans</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Beef Snacks</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Vegetable Cans</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Fish Cans</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Canned Fruits & Sweets</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Diabetic Food</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Cleaning Supplies' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Dishwashing Supplies</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Laundry</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Toilet Cleaners</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Napkins & Paper Products</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Pest Control</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Floor & Glass Cleaners</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Cleaning Accessories</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Air Fresheners</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Disposables & Trash Bags</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Shoe Care</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Womens Care ' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Women's Soaps</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Hair Care</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Women's Shampoos & Conditioners</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Feminine Care</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Female Moisturizer</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Face Wash & Scrub</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Female Deo</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Women's Perfume</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Women's Shower Gel</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Masks & Cleansers</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Serum, Oil & Toners</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Mens Care' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Men's Soaps</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Men's Perfume</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Men's Shampoos & Conditioners</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Shaving Needs</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Beard Grooming</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Men's Deodorants</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Razors & Blades</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Men's Hair Care</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Cream & Lotion</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Men's Facewash</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Men's Shower Gels</NavDropdown.Item></Link>
                            </NavDropdown>

                            <NavDropdown title = 'Handwash' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Liquid Handwash</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Hand Sanitizer</NavDropdown.Item></Link>
                            </NavDropdown>

                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Tissue & Wipes</NavDropdown.Item></Link>

                            <NavDropdown title = 'Handwash' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Liquid Handwash</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Hand Sanitizer</NavDropdown.Item></Link>
                            </NavDropdown> 

                            <NavDropdown title = 'Oral Care' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Toothpastes</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Toothbrushes</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Mouthwash & Others</NavDropdown.Item></Link>
                            </NavDropdown>   

                            <NavDropdown title = 'Health & Wellness' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Keto Food</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Antiseptics</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Handwash & Handrub</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Herbal & Digestive Aids</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Food Supplements</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Face Masks & Safety</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Family Planning</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Adult Diapers</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Multipurpose Spray</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Medical Devices</NavDropdown.Item></Link>
                            </NavDropdown> 

                            <NavDropdown title = 'Baby Care' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Diapers</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Baby Food</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Baby Skincare</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Wipes</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Baby Oral Care</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Baby Accessories</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Feeders</NavDropdown.Item></Link>
                            </NavDropdown> 

                            <NavDropdown title = 'Home & Kitchen' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers'className='nav-link'><NavDropdown.Item href="#action3">Kitchen Accessories</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Kitchen Appliances</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Lights & Electrical</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Tools & Hardware</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Basket & Bucket</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Box & Container</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Gardening</NavDropdown.Item></Link>
                            </NavDropdown> 

                            <NavDropdown title = 'Stationery & Office' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Office Electronics</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Organizers</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Writing & Printing</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Paper Supplies</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Arts & Crafts</NavDropdown.Item></Link>
                            </NavDropdown>  

                            <NavDropdown title = 'Pet Care' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Cat Food</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Cat Litters</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Kitten Food</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Dog Food</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Grooming & Cleaning</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Bird & Other Pet Food</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Aquarium Fish Food</NavDropdown.Item></Link>
                            </NavDropdown>  

                            <NavDropdown title = 'Toys & Sports' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Exercise & Fitness</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Toy Vehicles</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Dolls & Action Figures</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Plush & Stuffed Animals</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Learning Toys</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Blocks & Building Sets</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Kids Books</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Sports</NavDropdown.Item></Link>
                            </NavDropdown>  

                            <NavDropdown title = 'Beauty & MakeUp' id="navbarScrollingDropdown" className='nav-link'>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Eyes</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Lips</NavDropdown.Item></Link>
                            <Link to = '/Recipe' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action4">Nails</NavDropdown.Item></Link>
                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Face</NavDropdown.Item></Link>
                            </NavDropdown>   

                            <Link to = '/Blog' id = 'Offers' className='nav-link'><NavDropdown.Item href="#action3">Vehicle Essentials</NavDropdown.Item></Link> 
                            </ul>
                       
                        
                  </div>
                 </div>       
                        
                <div class="col-lg-9 col-md-7">
                    <h2>Filter By Category</h2>
                    <div className="mainTile">
                        <div className="categoryBox">
                            <div className="categoryName">
                                <a href='#' style={{textDecoration : 'none',color: 'black'}}><span>Winter Collection(2)</span></a>
                            </div>
                            <div className="categoryImg">
                                <img src="https://chaldn.com/_mpimage/winter-collection?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95177&q=best&v=1&webp=1&alpha=1" alt="" />
                            </div>
                        </div>
                        <div className="categoryBox">
                            <div className="categoryName">
                            <a href='#' style={{textDecoration : 'none',color: 'black'}}><span>Flash Sales(1)</span></a>
                            </div>
                            <div className="categoryImg">
                                <img src="https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95784&q=best&v=1&webp=1&alpha=1" alt="" />
                            </div>
                        </div>
                        <div className="categoryBox">
                            <div className="categoryName">
                            <a href='#' style={{textDecoration : 'none',color: 'black'}}><span>Food(11)</span></a>
                            </div>
                            <div className="categoryImg">
                                <img src="https://chaldn.com/_mpimage/food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95785&q=low&v=1&webp=1&alpha=1" alt="" />
                            </div>
                        </div>
                        <div className="categoryBox">
                            <div className="categoryName">
                            <a href='#' style={{textDecoration : 'none',color: 'black'}}><span>Cleaning supplies(14)</span></a>
                            </div>
                            <div className="categoryImg">
                                <img src="https://chaldn.com/_mpimage/cleaning-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95783&q=best&v=1&webp=1&alpha=1" alt="" />
                            </div>
                        </div>
                        <div className="categoryBox">
                            <div className="categoryName">
                            <a href='#' style={{textDecoration : 'none',color: 'black'}}><span>Personal Care(5)</span></a>
                            </div>
                            <div className="categoryImg">
                                <img src="https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&q=low&v=1&webp=1&alpha=1" alt="" />
                            </div>
                        </div>
                        <div className="categoryBox">
                            <div className="categoryName">
                            <a href='#' style={{textDecoration : 'none',color: 'black'}}><span>Health & Wellness(3)</span></a>
                            </div>
                            <div className="categoryImg">
                                <img src="https://chaldn.com/_mpimage/health-wellness?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95788&q=best&v=1&webp=1&alpha=1" alt="" />
                            </div>
                        </div>
                        <div className="categoryBox">
                            <div className="categoryName">
                            <a href='#' style={{textDecoration : 'none',color: 'black'}}><span>Baby Care(9)</span></a>
                            </div>
                            <div className="categoryImg">
                                <img src="https://chaldn.com/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95781&q=best&v=1&webp=1&alpha=1" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="product__discount">
                        <div class="section-title product__discount__title">
                            <h2>Sale Off</h2>
                        </div>
                        <div class="row">
                            <div class="product__discount__slider owl-carousel">
                                
                            <Swiper
                        onSwiper={setSwiperRef}
                        slidesPerView={3}
                        centeredSlides={true}
                        spaceBetween={30}
                        pagination={{
                        type: 'fraction',
                        }}
                        navigation={true}
                        virtual
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    >
                        {data.map(user =>(
                        <SwiperSlide key={user.id} >
                            <div class="swiper-slide">
                            <div class= 'categories__item set-bg' data-aos="fade-up">
                                <img src= {user.userpicture} class="testimonial-img" alt="" style={{height : '180px',width : '180px'}}/>
                                <h5><a href="#" style={{textDecoration :'none'}}>{user.tittle}</a></h5>
                            </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                              
                                
                                
                            </div>
                        </div>
                    </div>
                    <div class="filter__item">
                        <div class="row">
                            <div class="col-lg-4 col-md-5">
                                <div class="filter__sort">
                                    <span>Sort By</span>
                                    <select>
                                        <option value="0">Default</option>
                                        <option value="0">Default</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="filter__found">
                                    <h6><span>16</span> Products found</h6>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-3">
                                <div class="filter__option">
                                    <span class="icon_grid-2x2"></span>
                                    <span class="icon_ul"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        <section className='offers' style={{border : '1px solid #ebebeb '}}>
                         <div className="container">
                            <div className="productbox">
                                <div className="row" style={{border : '1px solid #ebebeb',marginTop: '10px'}}>
                                                <div class="col">
                                                    <img src= {pic02} alt="" style={{width : '850px'}}/>
                                                </div>
                                        <div class="col-md">
                                                <div class="featured__item">
                                                    <div class="featured__item__pic set-bg">
                                                        <img src= {pic03} alt=""style={{width : '230px',marginLeft : '100px'}}/>
                                                        <ul class="featured__item__pic__hover">
                                                            <p>Add to </p>
                                                            <p>Shopping</p>
                                                            <p>Bag</p>
                                                        {/* <Link className='list' to = '' id = '' ><a href="#"><FontAwesomeIcon icon={faHeart} className="icon"/></a></Link>
                                                        <Link className='list' to = '/Details' id = 'Details' ><a href="#"><FontAwesomeIcon icon={faRetweet} className="icon"/></a></Link>
                                                        <Link className='list' to = '' id = '' ><a href="#"><FontAwesomeIcon icon={faShoppingCart} className="icon"/></a></Link> */}
                                                        </ul>
                                                    </div>
                                                    <div class="featured__item__text">
                                                        <h6 style={{marginLeft : '150px'}}><a href="#">Orrange</a></h6>
                                                        <h5 style={{marginLeft : '150px'}}>$30.00</h5>
                                                        <a href="#" class="primary-btn" style={{textDecoration :'none',marginLeft : '100px'}}>Add to bag</a>
                                                    </div>
                                                </div>
                                        </div>
                                </div>
                            </div>
                            <div className="productbox">
                            <div className="row" style={{border : '1px solid #ebebeb',marginTop: '10px'}}>
                                <div class="col">
                                    <img src= {pic02} alt="" style={{width : '850px'}}/>
                                </div>
                            <div class="col-md">
                                <div class="featured__item">
                                        <div class="featured__item__pic set-bg">
                                            <img src= {pic03} alt=""style={{width : '230px',marginLeft : '100px'}}/>
                                            <ul class="featured__item__pic__hover">
                                                <p>Add to </p>
                                                <p>Shopping</p>
                                                <p>Bag</p>
                                            </ul>
                                        </div>
                                    <div class="featured__item__text">
                                        <h6 style={{marginLeft : '150px'}}><a href="#">Orrange</a></h6>
                                        <h5 style={{marginLeft : '150px'}}>$30.00</h5>
                                        <a href="#" class="primary-btn" style={{textDecoration :'none',marginLeft : '100px'}}>Add to bag</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="productbox">
                            <div className="row" style={{border : '1px solid #ebebeb',marginTop: '10px'}}>
                                <div class="col">
                                    <img src= {pic02} alt="" style={{width : '850px'}}/>
                                </div>
                                <div class="col-md">
                                <div class="featured__item">
                                        <div class="featured__item__pic set-bg">
                                            <img src= {pic03} alt=""style={{width : '230px',marginLeft : '100px'}}/>
                                            <ul class="featured__item__pic__hover">
                                                <p>Add to </p>
                                                <p>Shopping</p>
                                                <p>Bag</p>
                                            </ul>
                                        </div>
                                    <div class="featured__item__text">
                                        <h6 style={{marginLeft : '150px'}}><a href="#">Orrange</a></h6>
                                        <h5 style={{marginLeft : '150px'}}>$30.00</h5>
                                        <a href="#" class="primary-btn" style={{textDecoration :'none',marginLeft : '100px'}}>Add to bag</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                        {/* <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                                    <ul class="product__item__pic__hover">
                                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Crab Pool Security</a></h6>
                                    <h5>$30.00</h5>
                                </div>
                            </div>
                        </div>
                       
                       
                        */}
                        
                    </div>
                    {/* <div class="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                    </div> */}
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
