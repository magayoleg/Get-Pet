import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import AdoptionCard from '../AdoptionCard/AdoptionCard';

import './Main.sass';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { dbTest } from './dbTest';

function Main() {
  const [otherStyle, setOthersStyle] = useState({ condition: false });

  const otherStyleChange = () => {
    setOthersStyle({ condition: !otherStyle.condition });
  };

  return (
    <main className="main">
      <div className="main__bg"></div>
      <section className="container main__wrapper">
        <div className="main__search">
          <input
            id="search-pet"
            type="text"
            className="main__search-pet"
            placeholder="Search pet"
          />
          <input
            id="search-city"
            type="text"
            className="main__search-city"
            placeholder="Search city"
          />
          <img
            src="./icons/navigate/search.png"
            alt="search"
            className="main__search-img"
          />
        </div>
        <div className="main__slogan">
          Find your new friend with
          <span className="main__slogan-sub"> getPet</span>
        </div>
        <div className="main__category">
          <ul>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/dog.svg" alt="dog" />
                <span>Dogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/cat.svg" alt="cat" />
                <span>Cats</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/hamster.svg" alt="hamster" />
                <span>Small & Furry</span>
              </NavLink>
            </li>
            <li>
              <button className="main__category-btn" onClick={otherStyleChange}>
                <img src="./icons/animals/others.svg" alt="hamster" />
                <span>Other Animals</span>
              </button>
            </li>
          </ul>
        </div>

        <div
          className={
            !otherStyle.condition
              ? 'main__other-pet'
              : 'main__other-pet main__other-pet_active'
          }
        >
          <button onClick={otherStyleChange}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <div className="main__other-title">
            What type of pet are you searching for?
          </div>
          <ul>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/rabbit.svg" alt="rabbit" />
                <span>Rabbits</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/lizard.svg" alt="lizard" />
                <span>Lizards</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/fish.svg" alt="fish" />
                <span>Pisces</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/bird.svg" alt="bird" />
                <span>Birds</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/bug.svg" alt="bug" />
                <span>Bugs</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <img src="./icons/animals/cow.svg" alt="cow" />
                <span>Barnyard</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>

      <section className="container adoption">
        <div className="adoption__title">Pets Available for Adoption</div>
        <button className='adoption__button-prev'>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className='adoption__button-next'>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: '.adoption__button-prev',
            nextEl: '.adoption__button-next',
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {dbTest.map((item) => {
            return (
              <SwiperSlide key={'key' + item.id}>
                <AdoptionCard id={item.id}
                  name={item.name} image={item.image}/>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
      
      <div style={{height: '500px'}}></div>
    </main>
  );
}

export default Main;
