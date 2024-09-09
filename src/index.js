import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Construction from './Construction';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  return <Construction />
}

root.render(<Index />);

