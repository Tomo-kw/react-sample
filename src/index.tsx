import React from 'react';
import ReactDOM from 'react-dom/client';
// import Parent from './components/ContainerSample';
import { Parent } from './components/Parent'
// import ContextSample from './components/ContextSample';
// import Counter from './components/Counter';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Hello from './components/Hello';
// import ContainerSample from './components/ContainerSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ContainerSample /> */}
    {/* <Counter initialValue={1}/> */}
    <Parent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
