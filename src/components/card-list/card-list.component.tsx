import React from "react";
import Card from "../card/card.component";
import "./card-list.component.css";
import { Monster } from "../../App";

type CardListProps = {
  filteredMonsters: Monster[];
};

const CardList = (props: CardListProps) => {
  const { filteredMonsters } = props;
  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
