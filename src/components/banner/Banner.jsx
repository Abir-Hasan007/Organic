import React from 'react'
import img01 from "../../assets/img/banner/banner-1.jpg"
import img02 from "../../assets/img/banner/banner-2.jpg"
import { Link } from 'react-router-dom';
export default function Banner() {
  return (
    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic">
                    <Link to = '/Offers' id = 'Offers' className='nav-link'><a href="#" className='buyText'></a>
                        <img src = {img01} alt=""></img>
                        </Link>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner__pic">
                    <Link to = '/Offers' id = 'Offers' className='nav-link'><a href="#" className='buyText'></a>
                        <img src = {img02} alt=""></img>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
