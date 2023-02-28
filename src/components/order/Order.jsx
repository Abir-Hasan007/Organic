import React, { useRef, useState } from 'react';
import SwiperCore, { Autoplay,Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import pic01 from '../../assets/img/categories/cat-1.jpg'
// import pic02 from '../../assets/img/categories/cat-2.jpg'
// import pic03 from '../../assets/img/categories/cat-3.jpg'
// import pic04 from '../../assets/img/categories/cat-4.jpg'
// import pic05 from '../../assets/img/categories/cat-5.jpg'

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';



const data = [
  {
    id : 1,
    userpicture : 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-214/Default/stores/chaldal/components/landingPage2/LandingPage/images/how_to_order_chaldal/tutorial-1.jpg?q=best&webp=1',
   
  },
  {
    id : 2,
    userpicture : 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-214/Default/stores/chaldal/components/landingPage2/LandingPage/images/how_to_order_chaldal/tutorial-3.jpg?q=best&webp=1',
   
  },
  {
    id : 3, 
    userpicture : 'https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0+Deploy-Release-214/Default/stores/chaldal/components/landingPage2/LandingPage/images/how_to_order_chaldal/tutorial-2.jpg?q=best&webp=1',
   
  },
  
  
]






export default function Order() {
  return (
    <>
       <h3 style={{textAlign : 'center',marginTop : '50px'}}>How to order from Organi ?</h3>
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
            <div class="pay-swiper-slide">
              <div class= 'categories__item set-bg' data-aos="fade-up">
                <img src= {user.userpicture} class="testimonial-img" alt="" />
              </div>
            </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
