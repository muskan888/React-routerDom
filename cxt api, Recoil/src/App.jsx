import React, { useState, useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { CountContext } from './components/context';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './components/store/atoms/count';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <RecoilRoot>

        <Count />
        </RecoilRoot>

    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  );
}

function CountRenderer() {

  const count=useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const [count,setCount]=useRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
