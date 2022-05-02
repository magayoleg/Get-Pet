import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAdvertisement } from '../../../redux/actions/advertisementAction';
import Input from '../Input/Input';
import './AddAdvertisement.sass';

function AddAdvertisement() {
  const [addAdvert, setAddAdvert] = useState({
    name: '',
    description: '',
    species: '',
    age: '',
    price: '',
    location: '',
  });

  const changeHandler = (e) => {
    setAddAdvert((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    let payload = Object.entries(addAdvert).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    if (payload.length) {
      payload = Object.fromEntries(payload);
      dispatch(addAdvertisement(payload));
    }
  };

  return (
    <div className="signForm addAdvert-wrapper">
      <form onSubmit={submitHandler} className="addAdvert-wrapper__form">
        <legend>Add Advertisement</legend>
        <Input placeholder={'name'} value={addAdvert.name} changeHandler={changeHandler} />
        <Input placeholder={'description'} value={addAdvert.description} changeHandler={changeHandler} />
        <Input placeholder={'species'} value={addAdvert.species} changeHandler={changeHandler} />
        <Input placeholder={'age'} value={addAdvert.age} changeHandler={changeHandler} />
        <Input placeholder={'price'} value={addAdvert.price} changeHandler={changeHandler} />
        <Input placeholder={'location'} value={addAdvert.location} changeHandler={changeHandler} />

        <button type="submit" className="signForm__submit">
          ADD ADVERTISEMENT
        </button>
      </form>
    </div>
  );
}

export default AddAdvertisement;
