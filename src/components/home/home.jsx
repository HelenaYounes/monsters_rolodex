import CardList from '../card-list/card-list';
import SearchBox from '../search-box/search-box';

const Home = ({monsters, onChangeHandler}) => (
  <div className='App'>
    <h1 className='app-title'> Monsters Rolodex </h1>
    <SearchBox
      className='monsters-search-box'
      onChangeHandler={onChangeHandler}
      placeholder='search monster(s)'
    />
    <CardList monsters={monsters}/>
  </div>
)

export default Home;
