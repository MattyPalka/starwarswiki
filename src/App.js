import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import Main from './pages/main/Main'
import Searchbox from './utilities/Searchbox';
import Films from './pages/films/Films'
import Categories from './pages/categories/Categories'
import DetailedCategoryView from './pages/categories/DetailedCategoryView'
import DetailedFilmView from './pages/films/DetailedFilmView'



function App() {
  return (
    <Router>
      <Route path="/" component={Searchbox} />
      <Route exact path="/" component={Main} />
      <Switch>
        <Route exact path="/films" component={Films} />
        <Route exact path="/:category" component={Categories} />
      </Switch>
      <Switch>
        <Route exact path="/films/:id" component={DetailedFilmView}/>
        <Route exact path="/:category/:id" component={DetailedCategoryView}/>
      </Switch> 
    </Router>
  );
}

export default App;
