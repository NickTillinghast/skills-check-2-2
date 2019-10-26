import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: []
    };
    this.getProperty = this.getProperty.bind(this);
  }
  componentDidMount() {
    this.getProperty();
  }
  getProperty() {
    axios
      .get("/property")
      .then(res => {
        this.setState({
          property: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const mappedProperties = this.state.property.map((property, index) => {
      return (
        <div className="houses">
          <div className="listings">
            <House
              key={this.index}
              name={property.property_name}
              address={this.address}
              city={this.city}
              state={this.state}
              zip={this.zip}
              monthy_mortgage={this.monthy_mortgage}
              desired_rent={this.desired_rent}
            />
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="dashboard-header">
          <h1>Dashboard</h1>
        </div>
        <h2>Home Listings</h2>
        <div className="property-boxes"> </div>
        {mappedProperties}
        <Link to="/wizard">
          <button className="add-property">Add New Property</button>
        </Link>
      </div>
    );
  }
}
