const convertInputForAPI = (inputedAddress, params) => {
  const inputArr = inputedAddress.split(',').join('').split('.').join('')
    .split(' ');
  const addressTextArr = [];
  let homeNumber;
  if (params === '%20') {
    inputArr.forEach((el) => {
      if (!Number(el)) {
        addressTextArr.push(`${params}${el}`);
      } else if (Number(el)) {
        homeNumber = el;
      } else {
        console.error('input error', el);// переписать?
      }
    });
  } else {
    inputArr.forEach((el) => {
      addressTextArr.push(`${params}${el}`);
    });
  }
  const addressText = addressTextArr.join('');
  return { addressText, homeNumber };
};

const getAdCoordinates = async (inputs) => { // inputs  объект по форме
  const addressForAPI = convertInputForAPI(inputs.city, '+');// +ул+тверская+4 +1+2+3
  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?lang=ru&apikey=c44f3c3e-02a3-4e09-8441-9da1eec78fa8&format=json&geocode=${inputs.city}${addressForAPI.addressText}${addressForAPI.homeNumber}&results=1`,
  ); // Москва,+Тверская+улица,+дом+7;
  let data = await response.json();
  const responseI = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;

  if (!responseI) {
    const addressForIIAPI = convertInputForAPI(inputs.city, '%20');
    data = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=5R3TH3NHAQxGx37MdnZbQmCT9UsN1vHY&query=${addressForIIAPI.homeNum}%20${inputs.city}${addressForIIAPI.addressText}`,
    );
    const responseII = await data.json();
    return {
      coordinates: [responseII.data[0].latitude, responseII.data[0].longitude],
    };
  }
  const coordinatesForFromIAPI = responseI.split(' ').map((el) => Number(el)).reverse();
  console.log('mapHelperFront', responseI); // ?
  return {
    coordinates: coordinatesForFromIAPI, // coordinate: [массив с 2 числами]
    // coordinatesForFromIAPI: "37.615057 55.757425" =>  [55.757425, 37.615057]
  };
};

const assignAdLabel = (species) => {
  switch (species) {
    case 'Собаки':
      return 'islands#brownDotIcon';
    case 'Кошки':
      return 'islands#redDotIcon';
    case 'Грызуны':
      return 'islands#darkOrangeDotIcon';
    case 'Кролики':
      return 'islands#oliveDotIcon';
    case 'Ящерицы':
      return 'islands#darkGreenDotIcon';
    case 'Рыбы':
      return 'islands#lightBlueDotIcon';
    case 'Птицы':
      return 'islands#yellowDotIcon';
    case 'Насекомые':
      return 'islands#violetDotIcon';
    case 'Скотный двор':
      return 'islands#blackDotIcon';
    default:
      return 'islands#grayDotIcon';
  }
};

export default { getAdCoordinates, assignAdLabel };
