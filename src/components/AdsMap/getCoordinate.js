export const getCoordinates = async (inputs) => {
  let street = strToArr(inputs.city, '+');
  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?lang=ru&apikey=c44f3c3e-02a3-4e09-8441-9da1eec78fa8&format=json&geocode=${street.textAddress}+${street.homeNum}&results=1`,
  );
  let data = await response.json();
  let coordinates = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;

  if (!coordinates) {
    street = strToArr(inputs.city, '%23');
    const response = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=8c60b74a91f924ce61d118ccaafef034&query=${street.homeNum}%23${inputs.geolocation}${street.textAddress}`,
    );
    data = await response.json();
    return {
      coordinates: [data.data[0].latitude, data.data[0].longitude],
    };
  }

  coordinates = changeOrder(coordinates.split(' ').map((el) => Number(el)));

  return {
    coordinate: coordinates,
  };
};

const strToArr = (arr, params) => {
  arr = arr.split(',').join('').split('.').join('')
    .split(' ');
  let textAddress = [];
  let homeNum;
  if (params === '%23') {
    arr.forEach((el) => {
      if (!Number(el)) {
        textAddress.push(`${params}${el}`);
      } else if (Number(el)) {
        homeNum = el;
      } else {
        console.log(
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
