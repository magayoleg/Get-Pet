import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvertisement } from '../../../redux/actions/advertisementAction';
import Input from '../Input/Input';
import './AddAdvertisement.sass';

function AddAdvertisement() {
  const [addAdvert, setAddAdvert] = useState({
    animal_name: '',
    animal_description: '',
    species: '',
    breed: '',
    age: '',
    price: '',
    location: '',
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

    let payload = Object.entries(addAdvert).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(addAdvertisement(formData));
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
        <legend>Add Advertisement</legend>
        <Input
          placeholder="name"
          value={addAdvert.animal_name}
          changeHandler={changeHandler}
          name="animal_name"
        />
        <Input
          placeholder="species"
          value={addAdvert.species}
          changeHandler={changeHandler}
          name="species"
        />
        <Input
          placeholder="breed"
          value={addAdvert.breed}
          changeHandler={changeHandler}
          name="breed"
        />
        <Input
          placeholder="age"
          value={addAdvert.age}
          changeHandler={changeHandler}
          name="age"
        />
        <Input
          placeholder="price"
          value={addAdvert.price}
          changeHandler={changeHandler}
          name="price"
        />
        <Input
          placeholder="location"
          value={addAdvert.location}
          changeHandler={changeHandler}
          name="location"
        />
        <Input
          placeholder="description"
          value={addAdvert.animal_description}
          changeHandler={changeHandler}
          name="animal_description"
        />
        <div className="mb-3 signForm__box">
          <label htmlFor={'photo-input'} className="signForm__lable"></label>
          <input
            onChange={changeHandler}
            className="signForm__input"
            type="file"
            name="file"
            id={'photo-input'}
            // multiple
          />
        </div>
        <button type="submit" className="signForm__submit">
          ADD ADVERTISEMENT
        </button>
      </form>
    </div>
  );
}

export default AddAdvertisement;
