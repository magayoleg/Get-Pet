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
import './style.css';
import { Link } from 'react-router-dom';
import AdsThunk from '../../redux/thunk/getAdsACThunk';
import mapHelper from './mapHelper';

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
};

function AdsMap() {
  const [cluster, setCluster] = useState(null);
  const dispatch = useDispatch();
  const [animalType, setAnimalType] = useState(null);
  const [allAninalTypes, setAllAnimalTypes] = useState([]);

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

  const DBO = useSelector((store) => store.ad);

  return (
    <YMaps id="map">
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="sidebar">
            <div className="sidebar-item tags">
              <ul>
                <li><a onClick={() => sortedMarks(null)}> All animals </a></li>
                {allAninalTypes.map((el) => (
                  <li>
                    <a onClick={() => sortedMarks(el.id)}>{el.title}</a>
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
            ref.events.add('click', (event) => {
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
            .filter((el) => {
              if (animalType === null) {
                return true;
              }
              return el.category_id === animalType;
            })
            .map((el) => (
              <Placemark
                key={el.id}
                modules={['geoObject.addon.balloon']}
                geometry={[el.Latitude, el.Longitude]}
                properties={{
                  balloonContentHeader: el.title,
                  balloonContent: el.description,
                  balloonContentFooter: `<a href='/ad/${el.id}'> See who's it </a href='/' >`,
                }}
                options={{
                  preset: [mapHelper(el.speciesId)],
                }}
              />
            ))}
        </Clusterer>
      </Map>
    </YMaps>
  );
}

export default AdsMap;
