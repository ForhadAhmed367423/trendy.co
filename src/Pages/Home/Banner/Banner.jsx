import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import "./Banner.css"
const Banner = () => {
    return (
        <div className='banner'>
          <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link>
            <img src="https://i.ibb.co/nD1MWkv/Shop-New-Products-Website-Banner-Brown-White-Tan.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link>
            <img src="https://i.ibb.co/bLdYZB5/Shop-New-Products-Website-Banner-Brown-White-Tan-1.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link>
            <img src="https://i.ibb.co/nD1MWkv/Shop-New-Products-Website-Banner-Brown-White-Tan.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link>
            <img src="https://i.ibb.co/bLdYZB5/Shop-New-Products-Website-Banner-Brown-White-Tan-1.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link>
            <img src="https://i.ibb.co/nD1MWkv/Shop-New-Products-Website-Banner-Brown-White-Tan.png" alt="" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link>
            <img src="https://i.ibb.co/bLdYZB5/Shop-New-Products-Website-Banner-Brown-White-Tan-1.png" alt="" />
            </Link>
          </SwiperSlide>
        </Swiper>
        </div>
    );
};

export default Banner;