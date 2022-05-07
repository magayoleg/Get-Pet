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

import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdsThunk from '../../redux/thunk/getAdsACThunk';
import assignAnimalLabel from '../../helpers/mapHelperFront';

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
};

function AdsMap() {
  const [cluster, setCluster] = useState(null);
  const dispatch = useDispatch();
  const [animalSpecies, setAnimalSpecies] = useState(null);
  const [allAnimalSpecies, setAllAnimalSpecies] = useState([]);

  const sortedMarks = (id) => {
    setAnimalType(id);
  };

  useEffect(() => {
    fetch('http://localhost:4000/species') // нужен endpoint?
      .then((response) => response.json())
      .then((data) => setAllAnimalTypes(data));
  }, []);

  useEffect(() => {
    dispatch(AdsThunk());
  }, []);

  const DBO = useSelector((store) => store.ads);

  return (
    <YMaps id="map">
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="sidebar">
            <div className="sidebar-item tags">
              <ul>
                <li onClick={() => sortedMarks(null)}> All animals</li>
                {allAninalTypes.map((el) => (
                  <li onClick={() => sortedMarks(el.id)}>
                    {el.animalName}
                  </li>
                ))}
                <li><Link to="src/components/AdsMap/AdsMap#">Cats</Link></li>
                <li><Link to="src/components/AdsMap/AdsMap#">Dogs</Link></li>
                <li><Link to="src/components/AdsMap/AdsMap#">Other</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Map
        defaultState={mapState}
        width="100%"
        height="60vh"
        instanceRef={(ref) => {
          if (ref) {
            ref.events.add('click', () => {
              ref.balloon.close();
            });
          }
        }}
      >
        <GeolocationControl />
        <FullscreenControl />
        <ZoomControl />
        <Clusterer
          modules={['clusterer.addon.balloon']}
          options={{}}
          instanceRef={(ref) => {
            if (ref) {
              setCluster(ref);
            }
          }}
        >
          {DBO
            ?.filter((el) => {
              if (animalSpecies === null) {
                return true;
              }
              return el.speciesId === animalSpecies;
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
                options={{
                  preset: [assignAnimalLabel(el.species)],
                }}
              />
            ))}
        </Clusterer>
      </Map>
    </YMaps>
  );
}

export default AdsMap;
