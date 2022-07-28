import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return { monsters: users };
                    },
                    () => {
                        return console.log(this.state);
                    }
                )
            );
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        const searchString = event.target.value.toLowerCase();

        this.setState({ searchField: searchString });
    };

    render() {
        const { monsters, searchField } = this.state;
        const { onSearchChange } = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });

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
    }
}

export default App;
