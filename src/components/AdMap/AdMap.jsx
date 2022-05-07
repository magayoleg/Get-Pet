import React from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import assignAdLabel from '../../helpers/mapHelperFront';

function AdMap() {
  const DBO = useSelector((store) => store.ads);
  const id = useParams();
  console.log(DBO);

  const theAd = DBO.filter((el) => el.id === Number(id.id));
  const theAdCoordinates = [theAd[0]?.latitude, theAd[0]?.longitude];
  const theAdTitle = theAd[0]?.title;
  const theAdDescription = theAd[0]?.description;
  return (
    <YMaps>
      <div>
        <Map defaultState={{ center: theAdCoordinates, zoom: 9 }} width="100%">
          <Placemark
            key={Number(id.id)}
            modules={['geoObject.addon.balloon']}
            geometry={theAdCoordinates}
            properties={{
              balloonContentHeader: theAdTitle,
              balloonContent: theAdDescription,
            }}
            options={{
              preset: [assignAdLabel(theAd[0]?.species)],
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
}

export default AdMap;
