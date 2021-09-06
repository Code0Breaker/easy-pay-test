import './App.css';
import Header from './components/Header/Header';
import Filter from './components/Filter/Filter';
import CardSlider from './components/Cards/CardSlider.jsx'
import Transactions from './components/Transactions/Transactions';


function App() {
  return (
    <>
      <Header/>
      <Filter/>
      <CardSlider/>
      <Transactions/>
    </>
  );
}

export default App;
