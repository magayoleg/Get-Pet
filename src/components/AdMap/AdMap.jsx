import React, { useEffect } from 'react';
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import getAdsACThunk from '../../redux/thunk/getAdsACThunk';
import { assignAdLabel } from '../../helpers/assignAdLabel';

function AdMap() {
  // перенести в родительский элемент?
  const dispatch = useDispatch();
  useEffect(() => { dispatch(getAdsACThunk()); }, []);
  // перенести в родительский элемент?
  const DBO = useSelector((store) => store.getAllPets);
  const id = useParams();

  const theAd = DBO.filter((el) => el.id === Number(id.id));
  const theAdCoordinates = [theAd[0]?.latitude, theAd[0]?.longitude];
  const theAdTitle = theAd[0]?.title;
  const theAdDescription = theAd[0]?.description;
  return (
    <YMaps>
      <div>
        {/* необходим дизайн? */}
        <Map defaultState={{ center: theAdCoordinates, zoom: 9 }} width="100%">
          {/* необходим дизайн? */}
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
