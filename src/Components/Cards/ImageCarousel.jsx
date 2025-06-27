// components/ImageCarousel.jsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Card from './Card';


const ImageCarousel = ({ images }) => {
  const swiperRef = useRef(null);

  return (
    <div
      onMouseEnter={() => swiperRef.current?.swiper?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.swiper?.autoplay?.start()}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: false, // right to left
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((data) => (
          <SwiperSlide key={data.id}>
            <Card data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
