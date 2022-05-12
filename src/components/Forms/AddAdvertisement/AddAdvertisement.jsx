import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAdvertAction } from '../../../redux/actions/addAdvertAction';
import { cities } from '../../../data/cities';
import Input from '../Input/Input';
import { Select } from '../Select/Select';

import './AddAdvertisement.sass';

const options = [
  {
    id: 1,
    species: 'Собаки',
  },
  {
    id: 2,
    species: 'Кошки',
  },
  {
    id: 3,
    species: 'Грызуны',
  },
  {
    id: 4,
    species: 'Кролики',
  },
  {
    id: 5,
    species: 'Ящерицы',
  },
  {
    id: 6,
    species: 'Рыбы',
  },
  {
    id: 7,
    species: 'Птицы',
  },
  {
    id: 8,
    species: 'Насекомые',
  },
  {
    id: 9,
    species: 'Скотный двор',
  },
];

function AddAdvertisement() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [addAdvert, setAddAdvert] = useState({
    title: '',
    animalDescription: '',
    speciesId: '',
    breed: '',
    price: '',
    age: '',
    city: '',
    address: '',
    image: '',
    phoneNumber: '',
  });

  useEffect(() => {
    if (!user) navigate('/auth/signin');
  }, []);

  const changeHandler = (e) => {
    setAddAdvert((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { addAdvertForm } = document.forms;
    const formData = new FormData(addAdvertForm);
    dispatch(addAdvertAction(formData));
    navigate('/');
  };

  return (
    <div className="signForm addAdvert-wrapper">
      <form
        name="addAdvertForm"
        className="addAdvert-wrapper__form"
        onSubmit={submitHandler}
      >
        <legend>Добавить объявление</legend>
        <Input
          placeholder="Название"
          value={addAdvert.title}
          changeHandler={changeHandler}
          name="title"
        />
        <Input
          placeholder="Номер телефона"
          value={addAdvert.phoneNumber}
          changeHandler={changeHandler}
          name="phoneNumber"
        />
        <Select
          onChange={changeHandler}
          name="species"
          options={options}
          label="Тип животного"
        />
        <Input
          placeholder="Порода животного"
          value={addAdvert.breed}
          changeHandler={changeHandler}
          name="breed"
        />
        <Input
          placeholder="Возраст животного"
          value={addAdvert.age}
          changeHandler={changeHandler}
          name="age"
        />
        <Input
          placeholder="Цена животного"
          value={addAdvert.price}
          changeHandler={changeHandler}
          name="price"
        />
        <Select
          onChange={changeHandler}
          name="city"
          options={cities}
          label="Город"
        />
        <Input
          placeholder="Адрес"
          value={addAdvert.address}
          changeHandler={changeHandler}
          name="address"
        />
        <Input
          placeholder="Описание объяления"
          value={addAdvert.animalDescription}
          changeHandler={changeHandler}
          name="animalDescription"
        />
        <div className="mb-3 signForm__box">
          <label htmlFor="file" className="signForm__lable"></label>
          <input
            onChange={changeHandler}
            className="signForm__input"
            type="file"
            name="file"
            id={'image'}
            // multiple
          />
        </div>
          <button type="submit" className="signForm__submit">
            ДОБАВИТЬ ОБЪЯВЛЕНИЕ
          </button>
      </form>
    </div>
  );
}

export default AddAdvertisement;
