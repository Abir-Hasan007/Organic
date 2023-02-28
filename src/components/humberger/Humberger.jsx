import React from 'react'
import img01 from "../../assets/img/logo.png"
import img02 from "../../assets/img/language.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faShoppingBag,faUser} from "@fortawesome/free-solid-svg-icons"
import {FaFacebook,FaInstagram,FaLinkedin,FaYoutube,FaTwitter} from 'react-icons/fa'
export default function Humberger() {
  return (
    // <!-- Humberger Begin -->
    <section>
            <div class="humberger__menu__overlay"></div>
    <div class="humberger__menu__wrapper">
        <div class="humberger__menu__logo">
            <a href="#"><img src= {img01} alt=""></img></a>
        </div>
        <div class="humberger__menu__cart">
            <ul>
                <li><a href="#"><FontAwesomeIcon icon={faHeart} className = 'icon'/> <span>1</span></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faShoppingBag} className = 'icon'/> <span>3</span></a></li>
            </ul>
            <div class="header__cart__price">item: <span>$150.00</span></div>
        </div>
        <div class="humberger__menu__widget">
            <div class="header__top__right__language">
            <img src= {img02} alt=""></img>
                <div>English</div>
                <span class="arrow_carrot-down"></span>
                <ul>
                    <li><a href="#">Spanis</a></li>
                    <li><a href="#">English</a></li>
                </ul>
            </div>
            <div class="header__top__right__auth">
                <a href="#"><FontAwesomeIcon icon={faHeart} className = 'icon'/> Login</a>
            </div>
        </div>
        <nav class="humberger__menu__nav mobile-menu">
            <ul>
                <li class="active"><a href="./index.html">Home</a></li>
                <li><a href="./shop-grid.html">Shop</a></li>
                <li><a href="#">Pages</a>
                    <ul class="header__menu__dropdown">
                        <li><a href="./shop-details.html">Shop Details</a></li>
                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                        <li><a href="./checkout.html">Check Out</a></li>
                        <li><a href="./blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="./blog.html">Blog</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div class="header__top__right__social">
            <a href="#"> <FaFacebook className="icon"/></a>
            <a href="#"><FaTwitter className="icon"/></a>
            <a href="#"><FaInstagram className="icon"/></a>
            <a href="#"><FaYoutube className="icon"/></a>
            <a href="#"><FaLinkedin className="icon"/></a>
        </div>
        <div class="humberger__menu__contact">
            <ul>
                <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Order of $99</li>
            </ul>
        </div>
    </div>
    
    </section>

    
    
  )
}
