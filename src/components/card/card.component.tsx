import React from "react";
import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
};

const Card = (props: CardProps) => {
  const { name, id, email } = props.monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/id=${id}?size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
