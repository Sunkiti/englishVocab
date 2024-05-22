import './App.css';
import { useState } from "react";
import Card from './components/Card/Card.jsx';
import CardList from './components/CardList/CardList.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import { v4 as uuidv4 } from 'uuid';
import Wrapper from './components/UI/Wrapper.jsx'

const arr = [
  { title: "cat", translate: "кошка", transcription: "[kæt]" },
  { title: "car", translate: "машина", transcription: "[ka:]" },
  { title: "dog", translate: "собака", transcription: "[dog]" },
  { title: "house", translate: "дом", transcription: "[haus]" },
]

function App() {
  const [index, setIndex] = useState(0);
  const upButtonClickHandler = () => {
    let i = 0;
    arr[i];
    if (i > arr.length) {
      i = 0
    }
  };
  const downButtonClickHandler = () => {
    setIndex(index + 1);
  };
  return (
    <div className="App">
      <Header />
      {arr.map((item) => (
        <Wrapper key={uuidv4()}>
          <button onClick={upButtonClickHandler}>Up</button>
          <Card title={arr[index].title} translate={arr[index].translate} transcription={arr[index].transcription} key={uuidv4()} />
          <button onClick={downButtonClickHandler}>Down</button>
        </Wrapper>
      ))}

      <CardList />
      <Footer />
    </div>
  );
}

export default App;
