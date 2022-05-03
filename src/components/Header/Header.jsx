import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { setUser } from '../../redux/actions/userAction';

import './Header.sass';

const Header = () => {
  const [breedsStyle, setBreedsStyle] = useState({ condition: false });
  const [resourcesStyle, setResourcesStyle] = useState({ condition: false });

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  console.log('User =>', user);

  const logoutHandler = () => {
    dispatch(setUser(null));
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
            <button onClick={breedsStyleChange}>BREEDS</button>
            <img
              src="/icons/navigate/arrow-down.png"
              alt="arrow-down"
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
                  : 'header__bg-breeds_active'
              }
            >
              <ul>
                <li>
                  <NavLink to="/dog-breeds">
                    <img src="/icons/animals/dog-white.svg" alt="dog-white" />
                    DOG BREEDS
                  </NavLink>
                </li>
                <li></li>
                <li>
                  <NavLink to="/cat-breeds">
                    <img src="/icons/animals/cat-white.svg" alt="cat-white" />
                    CAT BREEDS
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <nav className="header__nav nav__resources">
            <button onClick={resourcesStyleChange}>RESOURCES</button>
            <img
              src="/icons/navigate/arrow-down.png"
              alt="arrow-down"
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
                  : 'header__bg-resources_active'
              }
            >
              <ul>
                <li>
                  <NavLink to="/about-help-adoption">ABOUT PET ADOPTION</NavLink>
                </li>
                <li>
                  <NavLink to="/dog-care">DOG CARE</NavLink>
                </li>
                <li>
                  <NavLink to="/cat-care">CAT CARE</NavLink>
                </li>
                <li>
                  <NavLink to="/all-pet-care">ALL PET CARE</NavLink>
                </li>
                <li>
                  <NavLink to="/shelters">SHELTERS & RESCUES</NavLink>
                </li>
                <li>
                  <NavLink to="/helping-pets">HELPING PETS</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header__shelters">
          <NavLink to="/shelters">ANIMAL SHELTERS</NavLink>
        </div>
        <div className="header__auth">
          <ul>
            {user ? (
              <>
                <li>
                  <span>{user.name}</span>
                </li>
                <li>
                  <NavLink to="/" onClick={logoutHandler}>Sign Out</NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/auth/signup">Sign Up</NavLink>
                </li>
                <li>
                  <NavLink to="/auth/signin">Sign In</NavLink>
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
