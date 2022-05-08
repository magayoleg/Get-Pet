import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvertAction } from '../../../redux/actions/addAdvertAction';
import Input from '../Input/Input';
import './AddAdvertisement.sass';

function AddAdvertisement() {
  const [addAdvert, setAddAdvert] = useState({
    title: '',
    animalDescription: '',
    species: '',
    breed: '',
    age: '',
    price: '',
    city: '',
    address: '',
    file: '',
  });
  const changeHandler = (e) => {
    setAddAdvert((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const { addAdvertForm } = document.forms;
    const formData = new FormData(addAdvertForm);

    let payload = Object.entries(addAdvert).filter((el) => (el[1] ? el[1].trim() : el[1]));
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(addAdvertAction(formData));
    }
  };

  return (
    <div className="signForm addAdvert-wrapper">
      <form
        name="addAdvertForm"
        className="addAdvert-wrapper__form"
        action="http://localhost:3002/posts"
        method="post"
        acceptCharset="utf-8"
        encType="multipart/form-data"
        onSubmit={submitHandler}
      >
        <legend>Добавить объявление</legend>
        <Input
          placeholder="Имя животного"
          value={addAdvert.title}
          changeHandler={changeHandler}
          name="title"
        />
        <Input
          placeholder="Тип животного"
          value={addAdvert.species}
          changeHandler={changeHandler}
          name="species"
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
        <Input
          placeholder="Город"
          value={addAdvert.city}
          changeHandler={changeHandler}
          name="city"
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
          <label htmlFor="photo-input" className="signForm__lable" />
          <input
            onChange={changeHandler}
            className="signForm__input"
            type="file"
            name="file"
            id="photo-input"
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
