import { createStore } from "redux";

export const ADD_PROPERTY = "ADD_PROPERTY";
export const ADD_URL = "ADD_URL";
export const MORTGAGE_RENT = "MORTGAGE_RENT";

let initialState = {
  property_name: "",
  address: "",
  city: "",
  state: "",
  zip: ""
};
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

export default createStore(reducer);
