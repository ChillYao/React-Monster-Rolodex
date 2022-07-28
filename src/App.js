import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                return setMonsters(users);
            });
    }, []);

    const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField);
    });

    const onSearchChange = (event) => {
        console.log(event.target.value);
        const searchString = event.target.value.toLowerCase();

        setSearchField(searchString);
    };

    return (
        <div className="App">
            <h1 className="app-title">Monster Rolodex</h1>
            <SearchBox
                className="search-box"
                type="search"
                placeholder="search monsters"
                onChangeHandler={onSearchChange}
            />
            <CardList filteredMonsters={filteredMonsters} />
        </div>
    );
};

export default App;
