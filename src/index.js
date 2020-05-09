import React from "react";
import ReactDom from "react-dom";
import SeaonDiplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null,lng: null ,errorMessage:''};

  // }
  state = { lat: null, lng: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lng) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat && this.state.lng) {
      return (
        <SeaonDiplay Latitude={this.state.lat} Longitude={this.state.lng} />
      );
    }

    return <Spinner message="Allow Location...." />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
