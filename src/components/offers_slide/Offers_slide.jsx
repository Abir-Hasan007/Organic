import React, { useRef, useState } from 'react';
import SwiperCore, { Autoplay,Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// front-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag} from "@fortawesome/free-solid-svg-icons"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
// import './styles.css';

const data = [
  {
    id : 1,
    product_name : 'Dekko Dry Cake Biscuit',
    product_width : '300gm',
    product_price : '140',
    userpicture : 'https://chaldn.com/_mpimage/pringles-sour-cream-onion-potato-chips-free-coca-cola-400-ml-134-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D111616&q=low&v=1&m=400&webp=1',
   
  },
  {
    id : 2,
    product_name : 'Dekko Combo Pasta',
    product_width : '200gm',
    product_price : '100',
    userpicture : 'https://chaldn.com/_mpimage/acme-mango-pickle-free-spoon-1-pcs-400-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D120266&q=low&v=1&m=400&webp=1',
   
  },
  {
    id : 3,
    product_name : 'Life Boy Handwash',
    product_width : '170ml',
    product_price : '75',
    userpicture : 'https://chaldn.com/_mpimage/lifebuoy-handwash-total-refill-170-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D92722&q=best&v=1&m=400&webp=1',
   
  },
  {
    id : 4,
    product_name : 'Trix Dishwashing Liquid',
    product_width : '500ml',
    product_price : '119',
    userpicture : 'https://chaldn.com/_mpimage/trix-dishwashing-liquid-lemon-refill-250-ml?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D111982&q=best&v=1&m=400&webp=1',
   
  },
  {
    id : 5,
    product_name : 'Ispahani Tea',
    product_width : '200gm',
    product_price : '200',
    userpicture : 'https://chaldn.com/_mpimage/ispahani-mirzapore-best-leaf-tea-200-gm?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D107231&q=best&v=1&m=400&webp=1',
   
  },
  
]
// install Virtual module
SwiperCore.use([Autoplay,Virtual, Navigation, ]);

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
        <div class="section-title" style={{marginTop : '20px'}}>
              <h2>Special Offers</h2>
        </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        virtual
        autoplay={{
        delay: 2500,
        disableOnInteraction: false,
       
      }}
      >
         {data.map(user =>(
          <SwiperSlide key={user.id}>
            <div class="swiper-slide" style={{border : 'thin solid black'}}>
              <div class= 'categories__item set-bg' data-aos="fade-up">
                <img src= {user.userpicture} class="testimonial-img" alt="" style={{height : '220px',width : '250px'}}/>
                {/* <h5><a href="#" style={{textDecoration :'none'}}>{user.product_name}</a></h5>
                <h5><a href="#" style={{textDecoration :'none'}}>{user.product_width}</a></h5>
                <h5><a href="#" style={{textDecoration :'none'}}>{user.product_price}</a></h5> */}
                  <div class="featured__item__text">
                        <h6>{user.product_name}</h6>
                        <span>{user.product_width}</span>
                        <h3>৳ {user.product_price}</h3>
                      <section className='addButtonWrapper border-radius-small'>
                        <span className='fifteenMinute'>
                        <FontAwesomeIcon icon={faShoppingBag} className="addiconbtn"/>
                        </span>
                        <p className='buyText'>Add to bag</p>
                      </section>
                      <section className='addButtonWrapper border-radius-small'>
                        <p className='buyText'> <Link to = '/Details' id = 'Details' className='nav-link'><a href="#" className='buyText'>Details</a></Link></p>
                      </section>
                  </div>
                      
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      
    </>
  );
}
