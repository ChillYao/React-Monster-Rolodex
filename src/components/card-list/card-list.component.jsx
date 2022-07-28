import React from 'react';
import Card from '../card/card.component';
import './card-list.component.css';

const CardList = (props) => {
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
