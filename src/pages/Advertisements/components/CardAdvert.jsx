import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './CardAdvert.sass';

const CardAdvert = ({ name, description, price, images }) => {
  
  return (
    <div className="cards-pet__card card-advert">
      <div className="card-advert__slider">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="card-advert__swiper"
        > 
          {images?.map((img, index) => {
            return (
              <SwiperSlide key={`img${index}`}>
                <img src={img} alt={img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <ul className="card-advert__info">
        <li>{name}</li>
        <li>
          <span>Описание:</span> {description}
        </li>
        <li>
          <span>Цена:</span> {price}
        </li>
        <li>
          <button>
            <a href="/">ПОДРОБНЕЕ</a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CardAdvert;
