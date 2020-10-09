import React from "react";
import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroeList = ({ publisher }) => {
  //    const heroes = getHeroesByPublisher(publisher);

  // usamos el hook useMemo para que la funcion solo se vuelva a renderizar SOLO cuando se hacen cambios en publisher
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
