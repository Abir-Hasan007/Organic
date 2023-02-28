import React from 'react'
import {data} from '../../product-data'
// import pic01 from '../../assets/img/featured/feature-1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faRetweet,faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom';
export default function Product() {
  return (
    <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Our Product Categories</h2>
                    </div>
                   
                </div>
            </div>
            <div class="row featured__filter">
            {data.map(user =>(
                <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                        <Link to = '/Health' id = 'Health' className='nav-link'>
                        <a href="#"><img src= {user.userpicture} class="featured_img" alt="" style={{height : '180px',width : '180px'}}/>
                        <h6>{user.tittle}</h6>
                        </a></Link>
                        </div>
                    </div>
                </div>
                ))}
               
            </div>
             
        </div>
        
    </section>
  )
}
