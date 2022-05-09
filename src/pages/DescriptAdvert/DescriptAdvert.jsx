import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneAdvertThunk } from '../../redux/thunks/getOneAdvertThunk';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import * as endPoints from '../../config/endPoints';
import './DescriptAdvert.sass';
import { Chat } from '../Chat/Chat';
// import AdMap from '../../components/AdMap/AdMap';

const DescriptAdvert = () => {
  const [positionChat, setPositionChat] = useState('chat__disable');

  let params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneAdvertThunk(params.id));
  }, []);
  const dataAdvert = useSelector((state) => state.getOneAdvert);

  const styleChat = () => {
    if (positionChat === 'chat__disable') {
      setPositionChat('chat__enable');
    } else {
      setPositionChat('chat__disable');
    }
  };

  return (
    <div className="descript">
      <Chat style={positionChat} changeStyle={styleChat} />

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
            <li>
              <button onClick={styleChat}>Написать сообщение</button>
            </li>
          </ul>
        </div>
      </div>

      {/* <AdMap /> */}
    </div>
  );
};

export default DescriptAdvert;
