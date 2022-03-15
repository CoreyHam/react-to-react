import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import './index.css';

import App from './App';
import Elixirs from './routes/Elixirs';
import Houses from './routes/Houses';
import Ingredients from './routes/Ingredients';
import Wizards from './routes/Wizards';
import Characters from './routes/Characters';

let rootElement = document.getElementById("root"); // root element is in the index.html

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="elixirs" element={<Elixirs />} />
        <Route path="houses" element={<Houses />} />
        <Route path="wizards" element={<Wizards />} />
        <Route path="characters" element={<Characters />} />
        <Route path="ingredients" element={<Ingredients />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

