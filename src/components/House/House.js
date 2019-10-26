import React, { Component } from "react";

export default class House extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property_name: "",
      address: "",
      city: "",
      state: "",
      zip: null
    };
  }
  render() {
    const { property_name, address, city, state, zip } = this.props;
    return (
      <div>
        <p>Property Name:{property_name}</p>
        <p>Address:{address}</p>
        <p>City:{city}</p>
        <p>State:{state}</p>
        <p>Zip:{zip}</p>
        House
        <button>Delete</button>
      </div>
    );
  }
}
