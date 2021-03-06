import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent';

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <HelloStudent name="Birm" unit="React" />
    <HelloStudent name="Danish" unit="JavaScript" />
    <HelloStudent name="Adolf" unit="React" />
  </React.StrictMode>,
  document.getElementById('root')
);