import React, { useEffect, useState } from 'react';
import {
  Clusterer,
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  YMaps,
  ZoomControl,
} from 'react-yandex-maps';

import { useDispatch, useSelector } from 'react-redux';
import AdsThunk from '../../redux/thunk/getAdsACThunk';
import assignAdLabel from '../../helpers/mapHelperFront';
import './style.css';

const mapState = { center: [55.751574, 37.573856], zoom: 9 };

function AdsMap() {
  const [cluster, setCluster] = useState(null);
  const dispatch = useDispatch();
  const [animalSpecies, setAnimalSpecies] = useState(null);
  const [allAnimalSpecies, setAllAnimalSpecies] = useState([]);

  const sortedMarks = (id) => { setAnimalSpecies(id); };

  useEffect(() => {
    fetch('http://localhost:4000/ads/species')
      .then((response) => response.json())
      .then((data) => setAllAnimalSpecies(data.species));
  }, []);

  useEffect(() => { dispatch(AdsThunk()); }, []);

  const DBO = useSelector((store) => store.ads);
  console.log(DBO);
  return (
    <>
      <section id="above map" className="breadcrumbs">
        <p>
          {' '}
          На карте отображается полный список актуальных объявлений.
          {' '}
        </p>
      </section>
      <YMaps id="map">
        <section className="species_switcher">
          <ul>
            <li onClick={() => sortedMarks(null)}> Все виды животных:</li>
            {allAnimalSpecies.map((el) => (<li onClick={() => sortedMarks(el.id)}>{el.species}</li>))}
          </ul>
        </section>
        <Map
          defaultState={mapState}
          width="100%"
          height="60vh"
          instanceRef={(ref) => { if (ref) { ref.events.add('click', () => { ref.balloon.close(); }); } }}
        >
          <GeolocationControl />
          <FullscreenControl />
          <ZoomControl />
          <Clusterer
            modules={['clusterer.addon.balloon']}
            options={{}}
            instanceRef={(ref) => { if (ref) { setCluster(ref); } }}
          >
            {DBO
              // .filter((el) => {
              //   if (animalSpecies === null) {
              //     return true;
              //   } else {
              //     return el.category_id === animalSpecies;
              //   }
              // })
              ?.map((el) => (
                <Placemark
                  key={el.id}
                  modules={['geoObject.addon.balloon']}
                  geometry={[el.latitude, el.longitude]}
                  properties={{
                    balloonContentHeader: el.title,
                    balloonContent: el.animalDescription,
                    balloonContentFooter: `<a href='/ad/${el.id}'> Подробнее </a>`,
                  }}
                  options={{ preset: [assignAdLabel(el.species)] }}
                />
              ))}
          </Clusterer>
        </Map>
      </YMaps>
    </>
  );
}

export default AdsMap;
