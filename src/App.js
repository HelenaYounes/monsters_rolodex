import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import SearchBox from './components/search-box/search-box';
import CardList from './components/card-list/card-list';
import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // const fetchMonsters = async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const json = await response.json();
  //   setMonsters(json);
  // }

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
    <Routes>
      <Route path='/' element={<Home  monsters={filteredMonsters} onChangeHandler={onSearchChange}/>}/>
    </Routes>
    );
  }

  export default App;
