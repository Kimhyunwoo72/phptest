import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.scss";
import App from "./App";

const rootNode = document.getElementById('root');

ReactDOM.createRoot(rootNode).render(<App />)   //엄격모두 해제 a링크 바로 안가지는 버그