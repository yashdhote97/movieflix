import React, { Component } from "react";
import "./Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      let {Poster,Title,Year,imdbID}=this.props?.movie;
      let imdbUrl=`https://www.imdb.com/title/${imdbID}/`;
    return (
      <div className="card h-100 shadow bg-white rounded border-0 cardWrap">
        <img src={Poster} className="card-img-top cardImg rounded" alt="..." />
        <div className="card-img-overlay hoverDisplay text-center">
            <h3 className="card-title movieTitle pb-1 text-uppercase">{Title}</h3>
            <h6 className="card-text text-uppercase pb-1">Release date: {Year}</h6>
            <a href={imdbUrl} target="_blank" className="card-text">IMDB link</a>
        </div>
      </div>
    );
  }
}

export default Cards;
