import React from 'react'
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faRetweet,faShoppingCart,faShoppingBag,faPhone,faBars} from "@fortawesome/free-solid-svg-icons"
export default function Health() {
  return (
     // <!-- Hero Section Begin -->
     <section class="hero">
     <div class="container">
         <div class="row">
             <div class="col-lg-3">
                 <div class="hero__categories" >
                     <div className="hero__categories__all ">
                     <FontAwesomeIcon icon={faBars} className="icon"/> 
                         <span>All departments</span>
                     </div>
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
                         <FontAwesomeIcon icon={faPhone} className="icon"/> 
                         </div>
                         <div class="hero__search__phone__text">
                             <h5>+65 11.188.888</h5>
                             <span>support 24/7 time</span>
                         </div>
                     </div>
                   </div>
                   <div class="row featured__filter">
       
                    <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg">
                            <img src= 'https://chaldn.com/_mpimage/keto-food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D74487&q=low&v=1&m=400&webp=1'  alt=""  />
                                
                            </div>
                        </div>
                            <div class="featured__item__text">
                                <h6><Link to = '/Flash_Sales' id = 'Flash_Sales' className='nav-link'><a href="/Flash_Sales">Keto Food</a></Link></h6>
                                <h5>$30.00</h5>
                            </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg">
                            <img src= 'https://chaldn.com/_mpimage/antiseptics?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D27490&q=low&v=1&m=400&webp=1'  />
                                
                            </div>
                        </div>
                            <div class="featured__item__text">
                            <h6><a href="#">Antiseptics</a></h6>
                                <h5>$30.00</h5>
                            </div>
                    </div>
                    <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                        <div class="featured__item">
                            <div class="featured__item__pic set-bg">
                            <img src= 'https://chaldn.com/_mpimage/handwash-handrub?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D116601&q=low&v=1&m=400&webp=1'  />
                                
                            </div>
                        </div>
                            <div class="featured__item__text">
                            <h6><a href="#">Handwash & Handrub</a></h6>
                                <h5>$30.00</h5>
                            </div>
                    </div>
                    
                </div>
             </div>
         </div>
     </div>
 </section>
  )
}
