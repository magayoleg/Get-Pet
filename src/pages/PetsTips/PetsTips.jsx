import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PetsTipsCard } from '../../components/PetsTipsCard/PetstipsCard.';
import { SelectUI } from '../../components/SelectUI';
import { getAllTipsThunk } from '../../redux/thunks/getAllTipsThunk';

import './PetsTips.sass';

export function PetsTips() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTipsThunk());
  }, []);

  const tips = useSelector((state) => state.getAllTips);
  const tipsMax = 'http://localhost:3000/images/pets-tip/new_cat1.jpg';
  const titleMax = 'Как отучить кошку драть мебель и обои';
  const textMax =
    'Царапание мебели – вовсе не прихоть и не желание кота насолить хозяину. Это – одна из физиологических потребностей кошек, генетически заложенная нужда. Эта потребность руководит не только домашними «мурзиками», но и дикими представителями семейства кошачьих. Только царапают они не диваны, а деревья.';

  return (
    <div className="PetsTips__container">
      {/* <div className="PetsTips__select">
        <SelectUI />
      </div> */}

      <div className="PetsTips__content_container">
        <PetsTipsCard
          key={'PetsTips-Max'}
          image={tipsMax}
          title={titleMax}
          tipText={textMax}
          webSite={'http://localhost:3000/pets-tip/1'}
          id={'PetsTips-Max'}
        />
        {tips.map((tip) => {
          console.log(tip);
          return (
            <PetsTipsCard
              key={`PetsTips-${tip.id}`}
              image={tip.image}
              title={tip.title}
              tipText={tip.tipText}
              webSite={tip.webSite}
              id={tip.id}
            />
          );
        })}
      </div>
    </div>
  );
}
