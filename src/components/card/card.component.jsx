import { Component } from 'react';
import React from 'react';

class Card extends Component {
    render() {
        const { name, id, email } = this.props.monster;
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
    }
}

export default Card;
