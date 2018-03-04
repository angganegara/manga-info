import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import Manga from '../Manga';
import MangaDetails from '../Manga/MangaDetails';
import MangaResult from '../Manga/MangaResult';
import Header from '../../components/Header';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Route component={Header} />
        <Container fluid>
          <Switch>
            <Route exact path="/" component={Manga} />
            <Route path="/search" component={MangaResult} />
            <Route path="/manga/:id" component={MangaDetails} />
          </Switch>
        </Container>
      </div>
    )
  }
}

export default App;