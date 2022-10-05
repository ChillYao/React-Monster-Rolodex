import React,{ChangeEvent} from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

type CanadianAddress={
    street: string;
    province: string;
}

type USAAddress = {
    street: string;
    state: string;
}

type NorthAmericanAddress = CanadianAddress | USAAddress;

const Address:NorthAmericanAddress = {
    street: "sdd",
    state: "sdd",
    province:"dss",
};

const SearchBox = ({ className, placeholder, onChangeHandler }:SearchBoxProps) => {
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
