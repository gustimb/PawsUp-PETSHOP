import BsNavbar from './components/BsNavbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div className="divContainer">
      <BsNavbar />
      <ItemListContainer greetings="Hola mundo!" />
    </div>
  )
}
export default App
