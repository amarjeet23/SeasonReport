import React, { Component } from "react";
import "./App.css";
import SeasonDisplay from "./components/SeasonDisplay";
import Loader  from "./components/Loader"

class App extends Component {
  state = {
    lat: null,
    error: "",
  };

  componentDidMount = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ error: err.message });
      }
    );
  };

  renderContent(){
    if (this.state.error && !this.state.lat) {
      return <div>Error:{this.state.error}</div>;
    }
    if (this.state.lat && !this.state.error) {
      return <div><SeasonDisplay latitude={this.state.lat}/></div>;
    }
    return <div><Loader/></div>

  }
  render() {
    // CASE 1: Displaying conditional rendering

    // if (this.state.error && !this.state.lat) {
    //   return <div>Error:{this.state.error}</div>;
    // }
    // if (this.state.lat && !this.state.error) {
    //   return <div><SeasonDisplay latitude={this.state.lat}/></div>;
    // }
    // return <Loader/>

    // CASE:2  Conditional Rendering....

    // const display = this.state.error? <div> Error:{this.state.error} </div> : <div><SeasonDisplay latitude={this.state.lat} /></div>
    
    return (
      <div className="App">
        <h4></h4>
        {/* {display} */}
        {this.renderContent()}
        
      </div>
    );
  }
}

export default App;
