import React from 'react';
import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
    render() {
        const { className, type, placeholder, onChangeHandler } = this.props;
        return (
            <input
                className={className}
                type={type}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
        );
    }
}

export default SearchBox;
