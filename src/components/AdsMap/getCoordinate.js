export const getCoordinates = async (inputs) => {
  let street = strToArr(inputs.city, '+');
  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?lang=ru&apikey=6cb886ee-1e08-4c26-8fa6-376a834d2cd5&format=json&geocode=${street.textAddress}+${street.homeNum}&results=1`,
  );
  let data = await response.json();
  let coord = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;

  if (!coord) {
    street = strToArr(inputs.city, '%20');
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=5R3TH3NHAQxGx37MdnZbQmCT9UsN1vHY&query=${street.homeNum}%20${inputs.geolocation}${street.textAddress}`,
    );
    data = await response.json();
    return {
      coordinate: [data.data[0].latitude, data.data[0].longitude],
    };
  }

  coord = changeOrder(coord.split(' ').map((el) => Number(el)));

  return {
    coordinate: coord,
  };
};

const strToArr = (arr, params) => {
  arr = arr.split(',').join('').split('.').join('')
    .split(' ');
  let textAddress = [];
  let homeNum;
  if (params === '%20') {
    arr.forEach((el) => {
      if (!Number(el)) {
        textAddress.push(`${params}${el}`);
      } else if (Number(el)) {
        homeNum = el;
      } else {
        console.error(
          'Косяк в формате строки или столбца:',
          el,
          'и не текст, и не число О_о',
        );
      }
    });
  } else {
    arr.forEach((el) => {
      textAddress.push(`${params}${el}`);
    });
  }
  textAddress = textAddress.join('');
  return { textAddress, homeNum };
};

function changeOrder(arr) {
  const temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
}

export default getCoordinates;
