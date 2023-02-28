import React from 'react'
import img01 from '../../assets/img/blog/blog-1.jpg';
import img02 from '../../assets/img/blog/blog-2.jpg';
import img03 from '../../assets/img/blog/blog-3.jpg';
import Header from '../header/Header';
import Left_menu from '../left_menu/Left_menu';
export default function Blog() {
  return (
   <>
            {/* <Header/>
            <Left_menu/> */}
    <section class="from-blog spad" id = 'Blog'>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title from-blog__title">
                        <h2>From The RECIPES</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                        <img src= 'https://chaldn.com/_mpimage/custard-trifle?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D60174&q=low&v=1&m=300&webp=1' alt="" style={{height : '300px', width : '300px'}}></img>
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i class="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">CUSTARD TRIFLE</a></h5>
                            <p>Cook Time 10 Mins</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                        <img src= 'https://chaldn.com/_mpimage/watermelon-iced-tea?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D60113&q=low&v=1&m=300&webp=1' style={{height : '300px', width : '300px'}} alt=""></img>
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i class="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">WATERMELON ICED TEA</a></h5>
                            <p>Cook Time 5 Mins </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="blog__item">
                        <div class="blog__item__pic">
                        <img src= 'https://chaldn.com/_mpimage/falafel?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D59416&q=low&v=1&m=300&webp=1' style={{height : '300px', width : '300px'}} alt=""></img>
                        </div>
                        <div class="blog__item__text">
                            <ul>
                                <li><i class="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i class="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="#">FALAFEL</a></h5>
                            <p>Cook Time 30 Mins </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
  
}
