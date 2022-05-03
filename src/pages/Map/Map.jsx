import React, { useState, useEffect } from "react";
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  FullscreenControl,
  ZoomControl,
  SearchControl,
  Clusterer,
} from "react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";
import { PostsThunk } from "../../redux/thunk/ThunkForm";
import { ourCategory } from "../../helper";
import './styleMap.css'

const mapState = {
  center: [55.751574, 37.573856],
  zoom: 9,
};

export default function MapYandex() {
  const [cluster, setCluster] = useState(null);
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);
  const [allCategory, setAllCategory] = useState([]);

  const sortedMarks = (id) => {
    setCategory(id);
  };

  useEffect(() => {
    dispatch(AdsThunk());
  }, []);

  const DBO = useSelector((store) => store.post);

  return (
    <main id="main">
      {/*// <!-- ======= Breadcrumbs ======= -->*/}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="breadcrumb-hero">
          <div className="container">
            <div className="breadcrumb-hero">
              <h2>Дари Добро</h2>
              <p>
               На карте отображается полный список актуальных товаров.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <ol>
            <li>
              <a href="/src/pages">Главная</a>
            </li>
            <li>Карта</li>
          </ol>
        </div>
      </section>
      {/*// <!-- End Breadcrumbs -->*/}
      <div className="container py-3" data-aos="fade-up">
        <YMaps >
          <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
          <div className="sidebar">
          <div className="sidebar-item tags" >
            <ul>
              <li> <a onClick={() => sortedMarks(null)}>Все категории</a></li>
              {allCategory.map((el) => {
                return (
                    <li>
                      <a onClick={() => sortedMarks(el.id)}>{el.title}</a>
                    </li>
                );
              })}
              <li><a href="src/pages/Map/index#Map.jsx">Жилье</a></li>
              <li><a href="src/pages/Map/index#Map.jsx">Посуда</a></li>
              <li><a href="src/pages/Map/index#Map.jsx">Игрушки</a></li>
              <li><a href="src/pages/Map/index#Map.jsx">Канцтовары</a></li>
              <li><a href="src/pages/Map/index#Map.jsx">Гигиена</a></li>
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
                ref.events.add("click", (e) => {
                  ref.balloon.close();
                });
              }
            }}
          >
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
              {DBO.filter((el) => el.available === true)
                .filter((el) => {
                  if (category === null) {
                    return true;
                  } else {
                    return el.category_id === category;
                  }
                })
                .map((el) => {
                  return (
                    <Placemark
                      key={el.id}
                      modules={["geoObject.addon.balloon"]}
                      geometry={[el.coordinatesX, el.coordinatesY]}
                      properties={{
                        balloonContentHeader: el.title,
                        balloonContent: el.description,
                        balloonContentFooter: `<a href='/good/${el.id}' >Подбробнее</a href='/' >`,
                      }}
                      options={{
                        preset: [ourCategory(el.category_id)],
                      }}
                    />
                  );
                })}
            </Clusterer>
          </Map>
        </YMaps>
      </div>
    </main>
  );
}
