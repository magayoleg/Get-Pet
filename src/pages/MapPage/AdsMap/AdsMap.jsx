import React, { useEffect, useState } from "react";
import {
  Clusterer,
  FullscreenControl,
  GeolocationControl,
  Map,
  Placemark,
  SearchControl,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";
import { getAllPetsThunk } from "../../../redux/thunks/getAllPetsThunk";
import { assignAdLabel } from "../../../helpers/assignAdLabel";
import * as endPoints from "../../../config/endPoints";
import "./style.sass";

function AdsMap() {
  const [, setCluster] = useState(null);
  const dispatch = useDispatch();
  const [AdsSpecies, setAdsSpecies] = useState(null);
  const [allSpecies, setAllSpecies] = useState([]);

  const sortedMarks = (species) => {
    setAdsSpecies(species);
  };
  useEffect(() => {
    fetch(endPoints.getAllSpeciesForMap())
      .then((response) => response.json())
      .then((data) => setAllSpecies(data));
  }, []);

  useEffect(() => {
    dispatch(getAllPetsThunk());
  }, []);
  const DBO = useSelector((store) => store.getAllPets);
  const mapState = { center: [59.629499, 62.800015], zoom: 4 };
  return (
    <div className="container">
      <div id="above map" className="breadcrumbs">
        <p> Карта всех объявлении </p>
      </div>
      <YMaps id="map">
        <div className="species_switcher">
          <button type="button" onClick={() => sortedMarks(null)}>
            {" "}
            Все
          </button>
          {allSpecies?.map((el) => (
            <button type="button" onClick={() => sortedMarks(el)}>
              {" "}
              {el}{" "}
            </button>
          ))}
        </div>
        <div className="main-map">
          <Map
            defaultState={mapState}
            width="100%"
            height="100%"
            instanceRef={(ref) => {
              if (ref) {
                ref.events.add("click", () => {
                  ref.balloon.close();
                });
              }
            }}
          >
            <SearchControl />
            <GeolocationControl />
            <FullscreenControl />
            <ZoomControl />
            <Clusterer
              modules={["clusterer.addon.balloon"]}
              options={{}}
              instanceRef={(ref) => {
                if (ref) {
                  setCluster(ref);
                }
              }}
            >
              {DBO.filter((el) => {
                if (AdsSpecies === null) {
                  return true;
                }
                return el.species === AdsSpecies;
              })?.map((el) => (
                <Placemark
                  key={el.id}
                  modules={["geoObject.addon.balloon"]}
                  geometry={[el.latitude, el.longitude]}
                  properties={{
                    balloonContentHeader: el.title,
                    balloonContent: el.animalDescription,
                    balloonContentFooter: `<a href='/posts/${el.id}'> Подробнее </a>`,
                  }}
                  options={{ preset: [assignAdLabel(el.species)] }}
                />
              ))}
            </Clusterer>
          </Map>
        </div>
      </YMaps>
    </div>
  );
}

export default AdsMap;
