import React from "react";
import ReactDOM from "react-dom";
import SeasonsDisplay from "./SeasonsDisplay";

class App extends React.Component {
  state = { lat: null, errMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errMsg: err.message });
      }
    );
  }
  render() {
    if (this.state.errMsg !== "" && this.state.lat === null) {
      return <div>Error: {this.state.errMsg}</div>;
    }
    if (this.state.lat !== null && this.state.errMsg === "") {
      return <SeasonsDisplay lat={this.state.lat} />;
    }
    return <div>Loading</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
