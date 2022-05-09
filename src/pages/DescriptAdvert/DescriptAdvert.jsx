import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneAdvertThunk } from '../../redux/thunks/getOneAdvertThunk';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import * as endPoints from '../../config/endPoints';
import './DescriptAdvert.sass';

const DescriptAdvert = () => {
  let params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneAdvertThunk(params.id));
  }, []);
  const dataAdvert = useSelector((state) => state.getOneAdvert);
  console.log(dataAdvert);
  console.log(
    new Date(dataAdvert.created).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    })
  );
  return (
    <div className="container">
      <div className="advert">
        <div className="advert__title title">
          <div className="title__navigate">
            <NavLink to="/">
              <span>Главная</span>
            </NavLink>
            <span> {' > '} </span>
            <NavLink to={`/advertisements/?species=${dataAdvert.species}`}>
              <span>{dataAdvert.species}</span>
            </NavLink>
          </div>
          <dir className="title__text">{dataAdvert.title}</dir>
        </div>
        <div className="advert__wrapper">
          <div className="advert__slider">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataAdvert.images?.map((img, index) => {
                return (
                  <SwiperSlide key={'keyAdvert' + index}>
                    <img src={endPoints.getImagePet(img)} alt="img" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <ul className="advert__content content">
            <li className="content__date">
              Дата объявления:{' '}
              {new Date(dataAdvert.created).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
              })}
            </li>
            <li>
              Описание:
              {dataAdvert.description}
            </li>
            <li className="content__price">
              {dataAdvert.price ? `Цена: ${dataAdvert.price}` : 'Бесплатно'}
            </li>
            <li className="content__phone">
              Контактный телефон: {dataAdvert.phoneNumber}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescriptAdvert;
