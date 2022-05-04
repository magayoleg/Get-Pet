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
import './styleMap.css';
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
    dispatch(AdsThunk());
  }, []);

  const DBO = useSelector((store) => store.ad);

  return (
    <YMaps>
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
                <li><a href="src/components/XYandexMap/AdsMap#">Cats</a></li>
                <li><a href="src/components/XYandexMap/AdsMap#">Dogs</a></li>
                <li><a href="src/components/XYandexMap/AdsMap#">Other</a></li>
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
          {DBO.filter((el) => el.available === true)
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
                geometry={[el.coordinatesX, el.coordinatesY]}
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
