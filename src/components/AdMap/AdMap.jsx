import React, { useEffect } from "react";
import {
  FullscreenControl,
  Map,
  Placemark,
  RoutePanel,
  YMaps,
} from "react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { assignAdLabel } from "../../helpers/assignAdLabel";
import { getAllPetsThunk } from "../../redux/thunks/getAllPetsThunk";
import "./adMap.sass";

function AdMap() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPetsThunk());
  }, []);
  const DBO = useSelector((store) => store.getAllPets);
  const id = useParams();

  const theAd = DBO.filter((el) => el.id === Number(id.id));
  const theAdCoordinates = [theAd[0]?.latitude, theAd[0]?.longitude];
  const theAdTitle = theAd[0]?.title;
  const theAdCity = theAd[0]?.city;
  const theAdAddress = theAd[0]?.address;
  return (
    <YMaps>
      <div className="admap">
        <Map
          defaultState={{ center: theAdCoordinates, zoom: 14 }}
          width="100%"
          height="100%"
        >
          <Placemark
            key={Number(id.id)}
            modules={["geoObject.addon.balloon"]}
            geometry={theAdCoordinates}
            properties={{
              balloonContentHeader: theAdTitle,
              balloonContent: theAdAddress,
            }}
            options={{
              preset: [assignAdLabel(theAd[0]?.species)],
            }}
          />
          <FullscreenControl />
          <RoutePanel
            instanceRef={(ref) => {
              if (ref) {
                ref.routePanel.state.set({
                  toEnabled: false,
                  to: theAdCity + ", " + theAdAddress,
                  type: "auto",
                });
              }
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
}

export default AdMap;