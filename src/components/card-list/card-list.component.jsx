import React from 'react';
import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.component.css';

class CardList extends Component {
    render() {
        const { filteredMonsters } = this.props;
        return (
            <div className="card-list">
                {filteredMonsters.map((monster) => {
                    return <Card monster={monster} />;
                })}
            </div>
        );
    }
}

export default CardList;
