import './main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from './components/Layout';
import App from "./components/App";
import About from './components/About';


const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout> <App /> </Layout>}></Route>
          <Route path='/about' element={<Layout> <About /> </Layout>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

root.render(<Index />);

