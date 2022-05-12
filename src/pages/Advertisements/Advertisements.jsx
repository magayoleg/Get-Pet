import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CardAdvert from '../../components/CardAdvert/CardAdvert';
import { getAllSpeciesPetsThunk } from '../../redux/thunks/getAllSpeciesPetsThunk';
import { getAllPetsThunk } from '../../redux/thunks/getAllPetsThunk';

import './Advertisements.sass';

const Advertisements = () => {
  const [filter, setFilter] = useState({species: '', city: ''});
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const querySpecies = searchParams.get('species');
  const querycity = searchParams.get('city');

  useEffect(() => {
    if (querySpecies) {
      dispatch(getAllSpeciesPetsThunk(querySpecies, querycity));
    } else {
      dispatch(getAllPetsThunk());
    }
  }, [querySpecies]);

  let cards;
  if (searchParams.get('species')) {
    cards = useSelector((state) => state.getAllSpeciesPets);
  } else {
    cards = useSelector((state) => state.getAllPets);
  }
  
  console.log(cards);
  const filterSelects = (data) => {
    setFilter({ ...filter, ...data });
  };
  
  return (
    <section className="container advertisement cards-pet">
      <div className="cards-pet__filter">
        <div className="cards-pet__species cards-pet__input">
          <span>Тип животного:</span>
          <select onChange={(e) => filterSelects({ species: e.target.value })}>
            <option value=""></option>
            <option value="Собаки">Собаки</option>
            <option value="Кошки">Кошки</option>
            <option value="Грызуны">Мелкие грызуны</option>
            <option value="Кролики">Кролики</option>
            <option value="Ящерицы">Ящерицы</option>
            <option value="Рыбы">Рыбы</option>
            <option value="Птицы">Птицы</option>
            <option value="Насекомые">Насекомые</option>
            <option value="Скотный двор">Скотный двор</option>
          </select>
        </div>

        {/* <div className="cards-pet__breed cards-pet__input">
          <span>Порода животного:</span>
          <input type="text" />
        </div> */}

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
          <select onChange={(e) => filterSelects({ city: e.target.value })}>
            <option value=""></option>
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
            <option value="Новосибирск">Новосибирск</option>
            <option value="Екатеринбург">Екатеринбург</option>
            <option value="Казань">Казань</option>
            <option value="Нижний Новгород">Нижний Новгород</option>
            <option value="Челябинск">Челябинск</option>
            <option value="Самара">Самара</option>
            <option value="Ростов-на-Дону">Ростов-на-Дону</option>
            <option value="Уфа">Уфа</option>
            <option value="Омск">Омск</option>
            <option value="Красноярск">Красноярск</option>
            <option value="Воронеж">Воронеж</option>
            <option value="Пермь">Пермь</option>
            <option value="Волгоград">Волгоград</option>
          </select>
        </div>

        <a href={`/advertisements/?species=${filter.species}&city=${filter.city}`}>
          <button>Поиск</button>
        </a>
      </div>

      <div className="cards-pet__cards">
        {/* <div className="cards-pet__sort">
          <span>Сортировать по:</span>
          <select>
            <option value="sort1">По дате объявления &#8595;</option>
            <option value="sort2">По дате объявления &#8593;</option>
            <option value="sort3">По возрасту &#8595;</option>
            <option value="sort4">По возрасту &#8593;</option>
          </select>
        </div> */}

        <div className="cards-pet__row">
          {cards?.map((card) => {
            return (
              <CardAdvert
                id={card.id}
                key={`card-${card.id}`}
                name={card.title}
                city={card.city}
                description={card.animalDescription}
                price={card.price}
                images={card.images}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Advertisements;
