import CardAdvert from './components/CardAdvert';
import './Advertisements.sass';

const cards = [
  {
    animal_name: 'Домашнее животное',
    animal_description: 'Мини пиг, торг уместен',
    speciesId: 9,
    userId: 1,
    locationId: 1,
    price: 10000,
    number: 89105010854,
    images: [
      './images/animals/1.jpg',
      './images/animals/2.jpg',
      './images/animals/3.jpg',
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    animal_name: 'Кошка в дар',
    animal_description:
      'Ищу дом и хорошие заботливые руки для кошки со всем приданым (паспорт, переноска, лотки, корм, наполнитель, когтерез, фурминатор, стронгхолд). Маленькая, вес около 3кг. Возраст примерно 3-4 года',
    speciesId: 2,
    userId: 2,
    locationId: 2,
    number: 89660433241,
    age: 3,
    images: [
      './images/animals/4.jpg',
      './images/animals/5.jpeg',
      './images/animals/6.webp',
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    animal_name: 'Собака в дар',
    animal_description:
      'Отдадим в добрые руки тому, кто любит животных и знает как за ними ухаживать. Собака воспитанная, знает команды, любит людей. Стерилизованная. Осталась без хозяина и поэтому ищет себе новый дом. Собака сама домашняя! Зовут Джесси, девочка:)',
    speciesId: 1,
    userId: 3,
    locationId: 3,
    number: 89852376219,
    images: ['./images/animals/2.jpg'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    animal_name: 'Домашние животные грызуны',
    animal_description:
      'Удивительные белочки Дегу. Доброжелательные и ручные, без неприятных запахов. Продаются вместе с клеткой.',
    speciesId: 3,
    userId: 4,
    price: 3500,
    locationId: 4,
    number: 89660436275,
    images: ['./images/animals/8.jpg'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    animal_name: 'Домашние животные грызуны',
    animal_description:
      'Удивительные белочки Дегу. Доброжелательные и ручные, без неприятных запахов. Продаются вместе с клеткой.',
    speciesId: 3,
    userId: 4,
    price: 3500,
    locationId: 4,
    number: 89660436175,
    images: ['./images/animals/7.jpg'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const Advertisements = () => {
  return (
    <section className="container advertisement cards-pet">
      <div className="cards-pet__filter">
        <div className="cards-pet__species cards-pet__input">
          <span>Тип животного:</span>
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
        </div>

        <div className="cards-pet__breed cards-pet__input">
          <span>Порода животного:</span>
          <input type="text" />
        </div>

        <div className="cards-pet__species cards-pet__input">
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
        </div>

        <div className="cards-pet__species cards-pet__input">
          <span>Город:</span>
          <select>
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
          {cards.map((card) => (
            <CardAdvert
              key={`card${card.number}`}
              name={card.animal_name}
              description={card.animal_description}
              price={card.price}
              images={card.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advertisements;
