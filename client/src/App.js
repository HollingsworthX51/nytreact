import React, { Component } from 'react';
import Header from "./components/header"
import Search from "./components/search"
import Results from "./components/results"
import Saved from "./components/saved"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        articleResults: [],
        savedArticles: []
    };

    //this.searchResults = this.searchResults.bind(this);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <Results />
        <Saved />
      </div>
    );
  }
}

export default App;
