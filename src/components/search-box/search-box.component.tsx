import React from 'react';
import './search-box.styles.css';

interface ISearchBoxProps extends IChnageHandlerProps{
    className: string;
    placeholder?: string|null;
}

interface IChnageHandlerProps{
    onChangeHandler: (a:string) => void
}

const SearchBox = ({ className, placeholder, onChangeHandler }:ISearchBoxProps) => {
    return (
        <input
            className={className}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
};

export default SearchBox;
