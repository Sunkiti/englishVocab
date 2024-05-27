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
  // console.log(index);
  // console.log(arr.length);
  // console.log(index + 1);
  const upButtonClickHandler = () => {
    if (index == 0) {
      setIndex(arr.length - 1);
    }
    else {
      setIndex(index - 1);
    }

    console.log(index);
    // let index = 0;
    // index = (index + 1) % arr.length;

  };
  const downButtonClickHandler = () => {
    console.log(arr[0]);
    if (index == arr.length - 1) {
      setIndex(0);
    }
    else {
      setIndex(index + 1);
    }
  };
  return (
    <div className="App">
      {console.log(arr)}
      <Header />
      <Wrapper key={uuidv4()}>
        <button onClick={upButtonClickHandler}>Up</button>
        <Card title={arr[index].title} translate={arr[index].translate} transcription={arr[index].transcription} key={uuidv4()} />
        <button onClick={downButtonClickHandler}>Down</button>
      </Wrapper>
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
