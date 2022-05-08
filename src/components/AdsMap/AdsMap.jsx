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
import getAdsACThunk from '../../redux/thunk/getAdsACThunk';
import { assignAdLabel } from '../../helpers/assignAdLabel';
import './style.css';

function AdsMap() {
  const [, setCluster] = useState(null);
  const dispatch = useDispatch();
  const [AdsSpecies, setAdsSpecies] = useState(null);
  const [allSpecies, setAllSpecies] = useState([]);

  const sortedMarks = (species) => { setAdsSpecies(species); };

  useEffect(() => {
    fetch('http://localhost:4000/ads/species')
      .then((response) => response.json())
      .then((data) => setAllSpecies(data));
  }, []);

  useEffect(() => { dispatch(getAdsACThunk()); }, []);
  const DBO = useSelector((store) => store.ads);
  const mapState = { center: [55.751574, 37.573856], zoom: 9 };
  return (
    // необходим дизайн?
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
          <button type="button" onClick={() => sortedMarks(null)}> Все</button>
          {allSpecies?.map((el) => (
            <button type="button" onClick={() => sortedMarks(el.species)}>
              {' '}
              {el.species}
              {' '}
            </button>
          ))}

        </section>
        <Map
          defaultState={mapState}
          width="100%"
          height="60vh"
          // необходим дизайн?
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
              .filter((el) => {
                if (AdsSpecies === null) {
                  return true;
                }
                return el.species === AdsSpecies;
              })
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
