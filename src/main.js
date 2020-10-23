import React from "react";
import ReactDOM from "react-dom";

import "bootstrap";
import "./style.css"

import Home from "./components/home.js"

const container = document.querySelector("#app");
const component = <Home />;

ReactDOM.render(component, container);