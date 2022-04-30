import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './Main.sass';

function Main() {
  const [otherStyle, setOthersStyle] = useState({ condition: false });

  const otherStyleChange = () => {
    setOthersStyle({ condition: !otherStyle.condition });
  };

  return (
    <main className="main">
      <div className="main__bg"></div>
      <section className="container">
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
        <div className='main__category'>
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
              <button className='main__category-btn' onClick={otherStyleChange}>
                <img src="./icons/animals/others.svg" alt="hamster" />
                <span>Other Animals</span>
              </button>
            </li>
          </ul>
        </div>

        <div
          className={
            !otherStyle.condition ? 'main__other-pet' : 'main__other-pet main__other-pet_active'
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
        
      </section>
    </main>
  );
}

export default Main;
