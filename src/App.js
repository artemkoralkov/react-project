import React from 'react';
import MyFilmsComponent from './MyFilmsComponent.js';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FilmsInformationComponent from './FilmsInformationComponent.js';
import FilmsComponent from './FilmsComponent.js';
import {
  addFilm,
  removeFilm,
  draggingFilm,
  dropFilm,
  clickOnFilm,
  removeFilmFromMyFilms,
  clearMyFilmsList,
} from './actions/FilmsAction';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickElement: '',
      transferFilm: '',
    };
  }

  updateData = value => {
    this.setState({ clickElement: value });
  };

  dropFilm = value => {
    this.setState({ transferFilm: value });
  };

  render() {
    return (
      <>
        <h1 style={{ color: 'aliceblue', fontSize: '40px' }}>Фильмотека</h1>
        <main id="app">
          <FilmsComponent
            films={this.props.films}
            draggingFilm={this.props.draggingFilmAction}
            removeFilm={this.props.removeFilmAction}
            addFilm={this.props.addFilmAction}
            dropFilm={this.dropFilm}
            updateData={this.updateData}
            clickOnFilm={this.props.clikOnFilmAction}
          />
          <FilmsInformationComponent clickingFilm={this.props.films.clickingFilm} />
          <MyFilmsComponent
            myFilms={this.props.myfilms.myFilms}
            film={this.props.films.draggingFilm}
            dropFilm={this.props.dropFilmAction}
            clickOnFilm={this.props.clikOnFilmAction}
            removeFilm={this.props.removeFilmFromMyFilmsAction}
            clearMyFilmsList={this.props.clearMyFilmsListAction}
          />
        </main>
      </>
    );
  }
}
const putStateToProps = store => {
  return {
    films: store.films,
    myfilms: store.myFilms,
  };
};
const putActionsToProps = dispatch => {
  return {
    addFilmAction: bindActionCreators(addFilm, dispatch),
    removeFilmAction: bindActionCreators(removeFilm, dispatch),
    draggingFilmAction: bindActionCreators(draggingFilm, dispatch),
    dropFilmAction: bindActionCreators(dropFilm, dispatch),
    clikOnFilmAction: bindActionCreators(clickOnFilm, dispatch),
    removeFilmFromMyFilmsAction: bindActionCreators(removeFilmFromMyFilms, dispatch),
    clearMyFilmsListAction: bindActionCreators(clearMyFilmsList, dispatch),
  };
};

export default connect(putStateToProps, putActionsToProps)(App);
