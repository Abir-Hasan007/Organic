import React from 'react'
import "./slider.css";
import SwiperCore, { Autoplay,Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../header/Header';
import Left_menu from '../left_menu/Left_menu';
// import pic01 from './p1.jpg'
// import pic02 from './p2.jpg'
// import pic03 from './p3.jpg'
// import pic04 from './p4.jpg'
// import pic05 from './p5.jpg'
export default function TESTIMONIAL() {
 const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi aliquid vel voluptatum.",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi aliquid vel voluptatum.",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quasi aliquid vel voluptatum.",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
  ];
  return (

<>
      {/* <Header/>
      <Left_menu/> */}
      <h3 style={{textAlign : 'center',marginTop : '50px'}}>Whats Our Clients Saying</h3>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
         {data.map(user =>(
          <SwiperSlide key={user.id} >
            <section class="testim" id="testim">
                <div class="wrap">
                    <div class="cont" id="testim-content">
                        <div class="active">
                            <div class="img"><img src= {user.img}></img></div>
                            <h2>{user.name}</h2>
                            <p>{user.title}</p>
                        </div>
                    </div>
                </div>
          </section>
            </SwiperSlide>
        ))}
      </Swiper>
    </>


  );
}


