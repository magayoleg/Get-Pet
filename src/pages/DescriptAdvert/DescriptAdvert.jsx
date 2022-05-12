import { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getOneAdvertThunk } from '../../redux/thunks/getOneAdvertThunk';
import { getAllMessagesThunk } from '../../redux/thunks/getAllMessagesThunk';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import * as endPoints from '../../config/endPoints';
import './DescriptAdvert.sass';
import { Chat } from '../Chat/Chat';
import AdMap from '../../components/AdMap/AdMap';
import { getAllFavouritesThunk } from '../../redux/thunks/getAllFavouritesThunk';

export const DescriptAdvert = () => {
  const [positionChat, setPositionChat] = useState('chat__disable');
  const [favourite, setFavourite] = useState('info-title__favourite_out');

  let params = useParams();
  const dispatch = useDispatch();

  const dataAdvert = useSelector((state) => state.getOneAdvert);
  const getAllFavourites = useSelector((state) => state.getAllFavourites);
  const allMessages = useSelector((state) => state.getAllMessages);

  useEffect(() => {
    dispatch(getOneAdvertThunk(params.id));
    dispatch(getAllFavouritesThunk());
  }, []);

  useEffect(() => {
    getAllFavourites.forEach((favourite) => {
      if (favourite.id === Number(params.id)) {
        setFavourite('info-title__favourite_in');
      }
    });
  }, [getAllFavourites]);

  const switchChat = async () => {
    if (positionChat === 'chat__disable') {
      setPositionChat('chat__enable');
    } else {
      setPositionChat('chat__disable');
    }
  };

  const getNewAllMessage = () => {
    if (dataAdvert.userId) {
      dispatch(getAllMessagesThunk(dataAdvert.userId));
    }
  };

  const addFavourite = async () => {
    await fetch(endPoints.addToFavoriteAdvert(params.id), {
      credentials: 'include',
    });
  };

  return (
    <div className="descript">
      <Chat
        userInfo={dataAdvert}
        allMessages={allMessages}
        style={positionChat}
        switchChat={switchChat}
        getNewAllMessage={getNewAllMessage}
      />
      <div className="advert">
        <div className="advert__title title">
          <div className="title__navigate">
            <NavLink to="/">
              <span>Главная</span>
            </NavLink>
            <span> {' > '} </span>
            <NavLink
              to={`/advertisements/?species=${dataAdvert.species}&city=`}
            >
              <span>{dataAdvert.species}</span>
            </NavLink>
          </div>
          <div className="advert__info info-title">
            <dir className="title__text">{dataAdvert.title}</dir>
            <div
              className={`info-title__favourite ${favourite}`}
              onClick={() => {
                addFavourite();
                setFavourite('info-title__favourite_in');
              }}
            >
              <span>
                {favourite === 'info-title__favourite_in'
                  ? 'В избранном'
                  : 'Добавить в избранное'}{' '}
              </span>
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
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
            <div className="content__user-wrapper">
              <div className="chat-room content__user">
                <input type="checkbox" />
                <div className="chat-room__wrapper">
                  <div className="chat-room__photo">
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className="chat-room__title">{dataAdvert.userName}</div>
                </div>
              </div>
              <button
                onClick={() => {
                  switchChat();
                  getNewAllMessage();
                }}
              >
                Написать сообщение
              </button>
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
