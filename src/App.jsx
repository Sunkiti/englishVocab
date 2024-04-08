import './App.scss';
import Card from './components/Card/Card.jsx';
import CardList from './components/CardList/CardList.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
