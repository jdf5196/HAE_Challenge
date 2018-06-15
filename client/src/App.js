import React, { Component } from "react";
import {connect} from 'react-redux';
import "./App.css";
import CandidateList from './components/CandidateList/CandidateList.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Candidate List</h1>
        </header>
        <CandidateList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  candidates: state.candidates,
  sort: state.sort,
  filter: state.filter
})

const AppContainer = connect(
  mapStateToProps
)(App)

export default AppContainer;
