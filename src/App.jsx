import './App.css';
import Card from './components/Card/Card.jsx';
import CardList from './components/CardList/CardList.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import { v4 as uuidv4 } from 'uuid';
import Wrapper from './components/UI/Wrapper.jsx'

const data = [
  { title: "hello!", text: "world" },
  { title: "111", text: "ffff" },
  { title: "124", text: "fewgeg" },
  { title: "1rwer", text: "3424" },
]
function App() {
  return (
    <div className="App">
      <Header />
      <Wrapper>
        {data.map((item) => (
          <Wrapper key={uuidv4()}>
            <Card title={item.title} text={item.text} key={uuidv4()} />
          </Wrapper>
        ))}
      </Wrapper>
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
