import { PetsTipsCard } from "../../components/PetsTipsCard";
import { SelectUI } from "../../components/SelectUI";

import "./petstips.css";

export function PetsTips() {
  return (
    <div className="PetsTips__container">

      <div className="PetsTips__select">
        <SelectUI />
      </div>

      <div className="PetsTips__content_container">
        <PetsTipsCard />
        <PetsTipsCard />
        <PetsTipsCard />
        <PetsTipsCard />
        <PetsTipsCard />
        <PetsTipsCard />
        <PetsTipsCard />
        <PetsTipsCard />
        <PetsTipsCard />
        <PetsTipsCard />
      </div>
      
    </div>
  );
}
