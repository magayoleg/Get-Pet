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
  const apikey = "6cb886ee-1e08-4c26-8fa6-376a834d2cd5";

  return (
    <div className="container">
      <div id="above map" className="breadcrumbs">
        <p> Карта всех объявлении </p>
      </div>
      <YMaps query={{ apikey }}>
        <div className="species_switcher">
          <button type="button" onClick={() => sortedMarks(null)}>
            {" "}
            Все
          </button>
          {allSpecies?.map((el, index) => (
            <button key={`allSpecies-${index}`} type="button" onClick={() => sortedMarks(el)}>
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
                  key={`placemark-${el.id}`}
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