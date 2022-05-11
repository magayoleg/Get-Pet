import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signOut } from '../../redux/actions/userAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faBookmark,
  faHandHoldingHeart,
} from '@fortawesome/free-solid-svg-icons';
import './Header.sass';

const Header = () => {
  const [breedsStyle, setBreedsStyle] = useState({ condition: false });
  const [resourcesStyle, setResourcesStyle] = useState({ condition: false });

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    dispatch(signOut());
  };

  const breedsStyleChange = () => {
    if (resourcesStyle.condition) {
      setResourcesStyle({ condition: !resourcesStyle.condition });
      setBreedsStyle({ condition: !breedsStyle.condition });
      return;
    }
    setBreedsStyle({ condition: !breedsStyle.condition });
  };

  const resourcesStyleChange = () => {
    if (breedsStyle.condition) {
      setBreedsStyle({ condition: !breedsStyle.condition });
      setResourcesStyle({ condition: !resourcesStyle.condition });
      return;
    }
    setResourcesStyle({ condition: !resourcesStyle.condition });
  };

  return (
    <header className="header">
      <div className="container header__wrapper">
        <div className="header__logo">
          <NavLink to="/">
            <img src="/icons/logo.png" alt="logo" />
          </NavLink>
        </div>

        <div className="header__nav-wrapper">
          <nav className="header__nav nav__breeds">
            <button onClick={breedsStyleChange}>ПОРОДЫ</button>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={
                !breedsStyle.condition
                  ? 'nav__arrow-breeds'
                  : 'nav__arrow-breeds_active'
              }
            />
            <div
              className={
                !breedsStyle.condition
                  ? 'header__bg-breeds'
                  : 'header__bg-breeds header__bg-breeds_active'
              }
            >
              <ul>
                <li>
                  <NavLink to="/advertisements/?species=Собаки&city=">
                    <img src="/icons/animals/dog-white.svg" alt="dog-white" />
                    ПОРОДЫ СОБАК
                  </NavLink>
                </li>
                <li></li>
                <li>
                  <NavLink to="/advertisements/?species=Кошки&city=">
                    <img src="/icons/animals/cat-white.svg" alt="cat-white" />
                    ПОРОДЫ КОТОВ
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="header__nav nav__resources">
            <button onClick={resourcesStyleChange}>РЕСУРСЫ САЙТА</button>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={
                !resourcesStyle.condition
                  ? 'nav__arrow-resources'
                  : 'nav__arrow-resources_active'
              }
            />
            <div
              className={
                !resourcesStyle.condition
                  ? 'header__bg-resources'
                  : 'header__bg-resources header__bg-resources_active'
              }
            >
              <ul>
                <li>
                  <NavLink to="/maps">
                    КАРТА ВСЕХ ОБЪЯВЛЕНИЙ
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/dog-care">УХОД ЗА СОБАКОЙ</NavLink>
                </li>
                <li>
                  <NavLink to="/cat-care">УХОД ЗА КОШКОЙ</NavLink>
                </li> */}
                <li>
                  <NavLink to="/pets-tips">
                    СТАТЬИ О ЖИВОТНЫХ
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/shelters">ПРИЮТЫ</NavLink>
                </li> */}
                <li>
                  <NavLink to="/helping-pets">
                    ПОМОЩЬ ДОМАШНИМ ЖИВОТНЫМИ
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="header__add-advertisement">
          <NavLink to={user ? '/addAdvert' : '/auth/signin'}>
            <button className="header__add-post-btn">
              Добавить объявление
            </button>
          </NavLink>
        </div>

        <div className="header__shelters">
          <NavLink to="/shelters">
            ПРИЮТЫ ДЛЯ ЖИВОТНЫХ
            <FontAwesomeIcon icon={faHandHoldingHeart} />
          </NavLink>
        </div>

        <div className="header__themes">
          <div className="header__themes-change">
            <span>Light</span>
            <input type="checkbox" id="toggleTheme" />
            <label htmlFor="toggleTheme"></label>
            <span>Dark</span>
          </div>
        </div>

        <div className="header__favourites">
          <NavLink to='/posts/favourites'>
            <button>
              <FontAwesomeIcon icon={faBookmark} />
            </button>
          </NavLink>
        </div>

        <div className="header__auth">
          <ul>
            {user ? (
              <>
                <li>
                  <NavLink to={`/userprofile/${user.id}`}>
                    <span className="header__user-name">{user.name}</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" onClick={logoutHandler}>
                    Выйти
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/auth/signup">Регистрация</NavLink>
                </li>
                <li>
                  <NavLink to="/auth/signin">Войти</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
