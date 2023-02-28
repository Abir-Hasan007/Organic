import React from 'react'
import Banner from '../banner/Banner'
import Header from '../header/Header'
import Left_menu from '../left_menu/Left_menu'
import Offers from '../offers_slide/Offers_slide'
import Order from '../order/Order'
import Product from '../product/Product'
import Card from '../card/Card';
import TESTIMONIAL from '../testimonial/Testimonial'
import Blog from '../blog/Blog'
// import Slider from '../slider/Slider'
export default function Home() {
  return (
    <div>
      {/* <Header/>
      <Left_menu/> */}
      {/* <Slider/> */}
      <Offers/>
      <Product/>
      <Banner/>
      <Order/>
      <Card/>
      <TESTIMONIAL/>
      <Blog/>
    </div>
  )
}
