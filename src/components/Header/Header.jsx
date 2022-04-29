import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.sass';

const Header = () => {
  const [breedsStyle, setBreedsStyle] = useState({ condition: false });
  const [resourcesStyle, setResourcesStyle] = useState({ condition: false });

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
                  <NavLink to="/">
                    <img src="/icons/animals/dog-white.svg" alt="dog-white" />
                    DOG BREEDS
                  </NavLink>
                </li>
                <li></li>
                <li>
                  <a href="/">
                    <img src="/icons/animals/cat-white.svg" alt="cat-white" />
                    CAT BREEDS
                  </a>
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
                  <NavLink to="/">ABOUT PET ADOPTION</NavLink>
                </li>
                <li>
                  <NavLink to="/">DOG CARE</NavLink>
                </li>
                <li>
                  <NavLink to="/">CAT CARE</NavLink>
                </li>
                <li>
                  <NavLink to="/">ALL PET CARE</NavLink>
                </li>
                <li>
                  <NavLink to="/">SHELTERS & RESCUES</NavLink>
                </li>
                <li>
                  <NavLink to="/">HELPING PETS</NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="header__shelters">
          <NavLink to="/">ANIAML SHELTERS</NavLink>
        </div>
        <div className="header__auth">
          <ul>
            <li>
              <NavLink to="/auth/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/auth/signin">Log In</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
