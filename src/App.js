import React, { Component } from "react";
import Nav from "./component/navbar";
import Hero from "./component/hero";
import Filer from "./component/filer";
import Secs from "./component/racipe";
import Portfolio from "./component/portofolio";
import Footer from "./component/footer";
import "./App.css";
// key=6f4036bef9328dbf2e2e3d00735724f5
//id=718b910b
//`https://api.edamam.com/search?q=chicken&app_id=${api_id}&app_key=${api_key}&from=0&to=3`
//`https://api.edamam.com/search?q=chicken&app_id=${api_id}&app_key=${api_key}&from=0&to=3&calories=591-722&health=alcohol-free`

const api_key = "6f4036bef9328dbf2e2e3d00735724f5";
const api_id = "718b910b";
class App extends Component {
  state = {
    racipes: [],
    error: "",
    key_search: "",
  };
  search = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://api.edamam.com/search?q=${this.state.key_search}&app_id=${api_id}&app_key=${api_key}&from=0&to=3`
    );
    const data = await api.json();
    // // if (key_search) {
    this.setState({
      racipes: data.hits,
      error: "",
      key_search: "",
    });
    // } else {
    //   this.setState({
    //     error: "please Enter the correct data",
    //   });
    // }
  };
  // search = (e) => {
  //   e.preventDefault();
  //   console.log("worked");
  // };
  keychange = (e) => {
    this.setState({ key_search: e.target.value });
    console.log(this.state.key_search);
  };
  render() {
    return (
      <div className="app">
        <Nav
          search={this.search}
          key_search={this.state.key_search}
          keychange={this.keychange}
        />
        <Hero />
        <Filer />
        <div className="sec-container">
          {this.state.racipes.map((recipe) => {
            console.log(recipe.label);
            return (
              <Secs
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            );
          })}
        </div>
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
