import React, { Component } from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      loader: true,
    };
  }
  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((response) => response.json())
      .then((json) => this.setState({ productData: json, loader: false }));
  }
  render() {
    let { loader, productData } = this.state;
    return (
      <>
        <Navbar /> 
        <div className="cardGrid">
          <div className="row">
            <h2 className="mt-4 mb-3 text-uppercase" id="cloths">Movies</h2>
            {loader ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-info" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              productData.Search
                ?.map((movie, key) => (
                  <div className="col-sm-4 col-md-3 mt-4">
                    <Cards movie={movie} key={key} />
                  </div>
                ))
            )}
          </div>
        </div>
      </>
    );
  }
}

export default App;
