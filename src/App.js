import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  },[]);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'> Monsters Rolodex </h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monster' />
      <CardList monsters={filteredMonsters}/>
      </div>
    );
  }

  export default App;
