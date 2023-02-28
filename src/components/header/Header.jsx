import React from 'react'
import { Link } from 'react-router-dom';
import image01 from '../../assets/img/language.png';
import image02 from '../../assets/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faShoppingBag,faUser,faBars} from "@fortawesome/free-solid-svg-icons"
import {FaFacebook,FaInstagram,FaLinkedin,FaYoutube,FaTwitter} from 'react-icons/fa'
export default function Header() {
  return (
    // <!-- Header Section Begin -->
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                   
                    <div class="col-lg-6 col-md-6">
                        <div class="header__top__right">
                            <div class="header__top__right__social">
                            <a href="#"><FaFacebook className="icon"/></a>
                            <a href="#"><FaTwitter className="icon"/></a>
                            <a href="#"><FaInstagram className="icon"/></a>
                            <a href="#"><FaYoutube className="icon"/></a>
                            <a href="#"><FaLinkedin className="icon"/></a>
                            </div>
                            <div class="header__top__right__language">
                                <img src= {image01}  alt=""/>
                                <div>English</div>
                                <span class="arrow_carrot-down"></span>
                                <ul>
                                    <li><a href="#">Spanis</a></li>
                                    <li><a href="#">English</a></li>
                                </ul>
                            </div>
                            <div class="header__top__right__auth">
                                <a href="#"><FontAwesomeIcon icon={faUser} className = 'icon'/>Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                        <a href="./index.html"><img src= {image02}  alt=""/></a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                        <ul>
                            <Link to = '/' id = 'Left_menu' className='header__menu_li active'><a href="#">Home</a></Link>
                            {/* <li class="active"><a href="./index.html">Home</a></li> */}
                            <Link to = '/Offers' id = 'Offers' className='header__menu_li'><a href="/Offers">Offers</a></Link>
                            <Link to = '' id = '' className='header__menu_li'><a href="#">Campaign</a>
                                <ul class="header__menu__dropdown">
                                     <Link to = '' id = '' className='header__menu_li'><a href="#">Winter collection</a></Link>
                                     <Link to = '' id = '' className='header__menu_li'><a href="#">Summer Collection </a></Link>
                                     <Link to = '' id = '' className='header__menu_li'><a href="#">Fall Collection </a></Link>
                                    {/* <li><a href="./shop-details.html">Fruit Campaign</a></li>
                                    <li><a href="./shoping-cart.html">Grocery Campaign</a></li>
                                    <li><a href="./checkout.html">Health Campaign</a></li>
                                    <li><a href="./blog-details.html">Sports Campaign</a></li> */}
                                </ul>
                            </Link>
                            <Link to = '/Recipe' id = 'Recipe' className='header__menu_li'><a href="/Recipe">Recipes</a></Link>
                            <Link to = '' id = '' className='header__menu_li'><a href="#">About</a></Link>
                            <Link to = '' id = '' className='header__menu_li'><a href="#">Contact</a></Link>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <Link to = '/Add_card' id = 'Add_card' className='header_link'><FontAwesomeIcon icon={faShoppingBag} className = 'icon'/> <span>3</span></Link>
                            <li><a href="#"><FontAwesomeIcon icon={faHeart} className = 'icon'/> <span>1</span></a></li>
                        </ul>
                        <div class="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div class="humberger__open">
            <FontAwesomeIcon icon={faBars} className = 'icon'/>
            </div>
        </div>
    </header>
  
  )
}
