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
  console.log(tips);

  return (
    <div className="PetsTips__container">
      {/* <div className="PetsTips__select">
        <SelectUI />
      </div> */}

      <div className="PetsTips__content_container">
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
