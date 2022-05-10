import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CardAdvert from './CardAdvert/CardAdvert';
import { getAllSpeciesPetsThunk } from '../../redux/thunks/getAllSpeciesPetsThunk';
import { getAllPetsThunk } from '../../redux/thunks/getAllPetsThunk';


import './Advertisements.sass';

const Advertisements = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (searchParams.get("species")) {
      dispatch(getAllSpeciesPetsThunk(searchParams.get("species")));
    } else {
      dispatch(getAllPetsThunk());
    }
  }, []);
  
  let cards;
  if (searchParams.get("species")) {
    cards = useSelector((state) => state.getAllSpeciesPets);
  } else {
    cards = useSelector((state) => state.getAllPets)
  }

  return (
    <section className="container advertisement cards-pet">
      <div className="cards-pet__filter">
        <div className="cards-pet__species cards-pet__input">
          <span>Тип животного:</span>
          <select>
            <option value=""></option>
            <option value="dog">Собаки</option>
            <option value="cat">Кошки</option>
            <option value="small&furry">Мелкие грызуны</option>
            <option value="rabbits">Кролики</option>
            <option value="lizard">Ящерицы, змеи</option>
            <option value="pisces">Рыбы</option>
            <option value="birds">Птицы</option>
            <option value="bugs">Жуки, пауки</option>
            <option value="barnyard">Скотный двор</option>
          </select>
        </div>

        <div className="cards-pet__breed cards-pet__input">
          <span>Порода животного:</span>
          <input type="text" />
        </div>

        {/* <div className="cards-pet__species cards-pet__input">
          <span>Возраст животного:</span>
          <select>
            <option value="dog">Собаки</option>
            <option value="cat">Кошки</option>
            <option value="small&furry">Мелкие грызуны</option>
            <option value="rabbits">Кролики</option>
            <option value="lizard">Ящерицы, змеи</option>
            <option value="pisces">Рыбы</option>
            <option value="birds">Птицы</option>
            <option value="bugs">Жуки, пауки</option>
            <option value="barnyard">Скотный двор</option>
          </select>
        </div> */}

        <div className="cards-pet__species cards-pet__input">
          <span>Город:</span>
          <select>
            <option value="city0"></option>
            <option value="city1">Москва</option>
            <option value="city2">Санкт-Петербург</option>
            <option value="city3">Новосибирск</option>
            <option value="city4">Екатеринбург</option>
            <option value="city5">Казань</option>
            <option value="city6">Нижний Новгород</option>
            <option value="city7">Челябинск</option>
            <option value="city8">Самара</option>
            <option value="city9">Ростов-на-Дону</option>
            <option value="city10">Уфа</option>
            <option value="city11">Омск</option>
            <option value="city12">Красноярск</option>
            <option value="city13">Воронеж</option>
            <option value="city14">Пермь</option>
            <option value="city15">Волгоград</option>
          </select>
        </div>

        <button>Поиск</button>
      </div>

      <div className="cards-pet__cards">
        <div className="cards-pet__sort">
          <span>Сортировать по:</span>
          <select>
            <option value="sort1">По дате объявления &#8595;</option>
            <option value="sort2">По дате объявления &#8593;</option>
            <option value="sort3">По возрасту &#8595;</option>
            <option value="sort4">По возрасту &#8593;</option>
          </select>
        </div>

        <div className="cards-pet__row">
          {cards?.map((card) => {
            return <CardAdvert
              id={card.id}
              key={`card-${card.id}`}
              name={card.title}
              description={card.animalDescription}
              price={card.price}
              images={card.images}
            />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Advertisements;
