import React from "react";
import "./App.css";
import Slider from "./Components/Slider";
import { Provider } from "react-redux";
import { createStore } from "redux";
import combinedReducer from "./Redux/reducers/index";

const store = createStore(combinedReducer);

const App = props => {
  return (
    <Provider store={store}>
      <Slider />
    </Provider>
  );
};

export default App;
