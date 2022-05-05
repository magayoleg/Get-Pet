// function init() {
//   const { geolocation } = ymaps;
//   const adsMap = new ymaps.Map('ads-map', { // map's div id
//     center: [55.76, 37.64],
//     zoom: 10,
//     controls: ['routeButtonControl'],
//   }, {
//     searchControlProvider: 'yandex#search',
//   });
//   const control = adsMap.controls.get('routeButtonControl');
//   control.routePanel.geolocate('from');
//   control.state.set('expanded', true);
// Автоцент, вычисленный по ip пользователя
// geolocation.get({

// eslint-disable-next-line no-tabs
//	provider: 'yandex',
// eslint-disable-next-line no-tabs
//	mapStateAutoApply: true,
// }).then(function (result) {
// eslint-disable-next-line no-tabs
//	Красным цветом пометим положение, вычисленное через ip.
// eslint-disable-next-line no-tabs
//	result.geoObjects.options.set('preset', 'islands#redCircleIcon');
// eslint-disable-next-line no-tabs
//	result.geoObjects.get(0).properties.set({
// eslint-disable-next-line no-tabs
//		balloonContentBody: 'Мое местоположение';
//   });
//   adsMap.geoObjects.add(result.geoObjects);
//   });

//   geolocation.get({
//   provider: 'browser',
//   mapStateAutoApply: true
//   }).then(function (result) {
//   result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
//  adsMap.geoObjects.add(result.geoObjects);
//  });
//
// // adsMap.controls.remove('trafficControl');
// // adsMap.controls.remove('typeSelector');
// // adsMap.controls.remove('fullscreenControl');
// // adsMap.controls.remove('rulerControl');
// // adsMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
// // adsMap.controls.remove('geolocationControl'); // удаляем геолокацию
// // adsMap.controls.remove('searchControl'); // удаляем поиск
// // adsMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
// }
//
// // https://cdn.vectorstock.com/i/1000x1000/61/70/map-pointer-paw-print-icon-vector-21106170.webp
// // https://c.neh.tw/thumb/f/720/comvecteezy646963.jpg
// ymaps.ready(init);
