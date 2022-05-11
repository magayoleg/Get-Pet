import { shelters } from '../../data/shelters';

import './Shelters.sass';

export function Shelters() {
  return ( 
    <div className='Shelters__container'>
      <div className='Shelters__image_wrapper'>
        <img className='Shelters__image' src='/images/shelters/shelters_main_image.jpeg'></img>
      </div>
      <div className='Shelters__content_wrapper'>
        <h1>Список приютов в Москве:</h1>
        <div className='Shelters__shelters_list'>
          {
            shelters.map(shelter => {
              return (
                <div key={shelter.id} className='Shelters__shelter'>
                  <span>{shelter.id}.</span>
                  <span>{shelter.name}</span>
                  <a id={shelter.id} href={shelter.link} className="advice-card__link Shelters__link_btn unselectable" target="_blank">
                    Перейти на сайт
                  </a>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}