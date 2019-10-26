import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property_name: "",
      city: "",
      state: "",
      zip: null
    };
  }

  handleNameChange(value) {
    this.setState({
      name: value
    });
  }
  handleAddressChange(value) {
    this.setState({
      address: value
    });
  }
  handleCityChange(value) {
    this.setState({
      city: value
    });
  }
  handleStateChange(value) {
    this.setState({
      state: value
    });
  }
  handleZipChange(value) {
    this.setState({
      zip: value
    });
  }

  addProperty(property_name, address, city, state, zip) {
    const addedProperty = { property_name, address, city, state, zip };
    axios
      .post("/add/property", addedProperty)
      .then(res => {
        this.setState({
          addedProperty: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="main">
        <h2>Property Name</h2>
        <input
          value={this.state.property_name}
          onChange={e => this.handleNameChange(e.target.value)}
        />
        <h2>Address</h2>
        <input
          value={this.state.address}
          onChange={e => this.handleAddressChange(e.target.value)}
        />
        <h2>City</h2>
        <input
          value={this.state.city}
          onChange={e => this.handleCityChange(e.target.value)}
        />
        <h2>State</h2>
        <input
          value={this.state.state}
          onChange={e => this.handleStateChange(e.target.value)}
        />
        <h2>Zip</h2>
        <input
          value={this.state.zip}
          onChange={e => this.handleZipChange(e.target.value)}
        />
        <button>Cancel</button>
        <button onClick={e => this.addProperty(e.target.value)}>
          Complete
        </button>
        <Link to="/">
          <button className="add-property">Add Property</button>
        </Link>
      </div>
    );
  }
}
