import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { getOneAdvertThunk } from '../../redux/thunks/getOneAdvertThunk';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import * as endPoints from '../../config/endPoints';
import './DescriptAdvert.sass';
import { Chat } from '../Chat/Chat';
import AdMap from '../../components/AdMap/AdMap';

export const DescriptAdvert = () => {
  const [positionChat, setPositionChat] = useState('chat__disable');

  let params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneAdvertThunk(params.id));
  }, []);

  const dataAdvert = useSelector((state) => state.getOneAdvert);

  const styleChat = async () => {
    if (positionChat === 'chat__disable') {
      setPositionChat('chat__enable');
      
      // const url = `http://localhost:3000/messages?receiverId=${dataAdvert.userId}`;
      // const r = await fetch(url, {credentials: 'include'});
      // const result = await r.json();
      // console.log('-----result------', result)
    } else {
      setPositionChat('chat__disable');
    }
  };

  return (
    <div className="descript">
      <Chat postData={dataAdvert} style={positionChat} changeStyle={styleChat} />

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
          <div className="advert__content content">
            <div className='content__user-wrapper'>
              <div className="chat-room content__user">
                <input type="checkbox" />
                <div className="chat-room__wrapper">
                  <div className="chat-room__photo">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="chat-room__title">{dataAdvert.userName}</div>
                </div>
              </div>
              <button onClick={styleChat}>Написать сообщение</button>
            </div>
            <ul>
              <li className="content__date">
                <p>Дата объявления:</p>
                {new Date(dataAdvert.created).toLocaleDateString('ru-RU', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </li>
              <li>
                <p>Описание:</p>
                {dataAdvert.animalDescription}
              </li>
              <li>
                <p>Город:</p>
                {dataAdvert.city}
              </li>
              <li>
                <p>Адрес:</p>
                {dataAdvert.address}
              </li>
              <li className="content__price">
                {dataAdvert.price ? `Цена: ${dataAdvert.price}` : 'Бесплатно'}
              </li>
              <li className="content__phone">
                <p>Контактный телефон:</p> {dataAdvert.phoneNumber}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <AdMap />
    </div>
  );
};
