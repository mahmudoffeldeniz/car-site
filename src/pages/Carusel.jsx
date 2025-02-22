import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import '../assets/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper 
        effect="slide" // 3D coverflow effekti
        grabCursor={true} // İstifadəçi mouse ilə idarə edə biləcək
        centeredSlides={true} 
        slidesPerView={'auto'} 
        coverflowEffect={{
          rotate: 20, // Slayda döndürmə effekti
          stretch: 0, // Slaydların arasındakı məsafə
          depth: 200, // 3D dərinlik
          modifier: 1,
          slideShadows: true, // Slayd kölgələri
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
        className="heroSwiper"
      >
        <SwiperSlide className='slider-main'>
          <h1 className='text1'>BMW İ8 2016</h1>
          <p className='text2'>The BMW i8 is a high-performance plug-in <br />hybrid sports car with a futuristic design. It features a 1.5L <br />turbocharged engine combined with an electric motor, producing 369 hp <br /> and reaching a top speed of 250 km/h</p>
          <img src="https://purepng.com/public/uploads/large/purepng.com-bmw-carcarsbmw-961524670123dgp13.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className='slider-main'>
          <h1 className='text1'>Honda Accord 2018</h1>
          <p className='text2'>The 2016 Honda Accord is a reliable midsize sedan with a 2.4L engine, producing up to 185 hp, and a top speed of around 210 km/h.</p>
          <img src="https://www.transparentpng.com/download/car-png/car-free-transparent-png-8.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className='slider-main'>
          <h1 className='text1'>Hyundai Sonata 2018</h1>
          <p className='text2'>The Hyundai Sonata is a sleek and comfortable sedan with <br /> 10,000 km mileage. It has a top speed of 210 km/h and features a powerful 2.5L engine for a smooth driving experience.</p>
          <img src="https://www.freeiconspng.com/uploads/red-hyundai-car-png-15.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
