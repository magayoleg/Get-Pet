const strToArr = (arr, params) => {
  arr = arr.split(',').join('').split('.').join('')
    .split(' ');
  let street = [];
  let homeNum;
  if (params === '%20') {
    arr.forEach((el) => {
      if (!Number(el)) {
        street.push(`${params}${el}`);
      } else if (Number(el)) {
        homeNum = el;
      } else {
        console.error(
          'Косяк в формате строки или столбца:',
          el,
          'и не текст, и не число О_о',
        );// переписать?
      }
    });
  } else {
    arr.forEach((el) => {
      street.push(`${params}${el}`);
    });
  }
  street = street.join('');
  return { textAddress: street, homeNum };
};

const getCoordinates = async (inputs) => {
  let street = strToArr(inputs.city, '+');
  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?lang=ru&apikey=c44f3c3e-02a3-4e09-8441-9da1eec78fa8&format=json&geocode=${street.textAddress}+${street.homeNum}&results=1`,
  );
  let data = await response.json();
  let coord = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;

  if (!coord) {
    street = strToArr(inputs.city, '%20');
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=8c60b74a91f924ce61d118ccaafef034&query=${street.homeNum}%20${inputs.geolocation}${street.textAddress}`,
    );
    data = await response.json();
    return {
      coordinate: [data.data[0].latitude, data.data[0].longitude],
    };
  }

  coord = coord.split(' ').map((el) => Number(el)).reverse();

  console.log('aaaaaaaaaaaaaaaaaaaaaaaa', coord);
  return {
    coordinate: coord,
  };
};

const assignAnimalLabel = (species) => {
  const animalLabel = {
    dogs: 'islands#brownDotIcon',
    cats: 'islands#redDotIcon',
    rodents: 'islands#darkOrangeDotIcon',
    rabbits: 'islands#oliveDotIcon',
    lizards: 'islands#darkGreenDotIcon',
    fish: 'islands#lightBlueDotIcon',
    birds: 'islands#yellowDotIcon',
    insects: 'islands#violetDotIcon',
    livestock: 'islands#blackDotIcon',
    other: 'islands#grayDotIcon',
  };

  switch (species) {
    case 'Собаки':
      return animalLabel.dogs;
    case 'Кошки':
      return animalLabel.cats;
    case 'Грызуны':
      return animalLabel.rodents;
    case 'Кролики':
      return animalLabel.rabbits;
    case 'Ящерицы':
      return animalLabel.lizards;
    case 'Рыбы':
      return animalLabel.fish;
    case 'Птицы':
      return animalLabel.birds;
    case 'Насекомые':
      return animalLabel.insects;
    case 'Скотный двор':
      return animalLabel.livestock;
    default:
      return animalLabel.other;
  }
};

module.exports = { getCoordinates, assignAnimalLabel };
