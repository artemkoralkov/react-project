import React from 'react';

export default class FilmsInformationComponent extends React.Component {
  render() {
    let component = null;
    if (JSON.stringify(this.props.clickingFilm) !== '{}') {
      component = (
        <>
          <h1>Информация о фильме</h1>
          <p style={{ textAlign: 'center' }}>
            <b>Постер</b>
          </p>
          <p id="film-poster" style={{ textAlign: 'center' }}>
            <img height="230px" alt="" src={this.props.clickingFilm.poster}></img>
          </p>
          <ul id="film-info-list">
            <li id="film-name">
              <b>Название</b>:{this.props.clickingFilm.title}
            </li>
            <li id="film-director">
              <b>Режиссёр</b>:{this.props.clickingFilm.director}
            </li>
            <li id="film-genre">
              <b>Жанр</b>:{this.props.clickingFilm.genre}
            </li>
          </ul>
          <p style={{ textAlign: 'center' }}>
            <b>Описание</b>:
          </p>
          <fieldset style={{ overflow: 'auto', height: '100px' }}>
            <p id="film-description">{this.props.clickingFilm.description}</p>
          </fieldset>
        </>
      );
    } else {
      component = (
        <>
          <h1>Информация о фильме</h1>
          <p style={{ textAlign: 'center' }}>
            <b>Постер</b>
          </p>
          <p id="film-poster" style={{ textAlign: 'center' }}>
            <img height="230px" alt=""></img>
          </p>
          <ul id="film-info-list">
            <li id="film-name">
              <b>Название</b>:
            </li>
            <li id="film-director">
              <b>Режиссёр</b>:
            </li>
            <li id="film-genre">
              <b>Жанр</b>:
            </li>
          </ul>
          <p style={{ textAlign: 'center' }}>
            <b>Описание</b>:
          </p>
          <fieldset style={{ overflow: 'auto', height: '100px' }}>
            <p id="film-description"></p>
          </fieldset>
        </>
      );
    }
    return (
      <div className="films-Informaion" id="films-info">
        {component}
      </div>
    );
  }
}
