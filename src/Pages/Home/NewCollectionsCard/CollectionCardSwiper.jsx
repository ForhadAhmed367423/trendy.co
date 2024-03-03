// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './NewCollectionsCard.css'
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const CollectionCardSwiper = () => {
    return (
        <div className='card-swiper'>
             <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/Y74yxt5/fc2e0d2e-3f70-4dd9-8a74-b4cc5cf8883c.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/rfGrVC4/c405d009-526f-4e20-93f0-5bc1e8826043.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/qB2K205/91442ae2-a16c-4749-9d74-3f76cf9f91c7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Yhn4pMV/12361e83-721c-4e13-9ac6-9a087af09d6b.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/qB2K205/91442ae2-a16c-4749-9d74-3f76cf9f91c7.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/Y74yxt5/fc2e0d2e-3f70-4dd9-8a74-b4cc5cf8883c.png" />
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default CollectionCardSwiper;