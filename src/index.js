import "@babel/polyfill";
import "core-js/es7/object";
import React from "react";
import { render } from "react-dom";
import { AppLoginPage, PageLayoutSimpleNav } from "./components";
document.addEventListener("DOMContentLoaded", () => {
  const app_stylesheet =
    navigator.userAgent.toLowerCase().indexOf("trident") != -1
      ? "app-ie11.css"
      : "app.css";

  const head = document.head;
  const link = document.createElement("link");

  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = app_stylesheet;

  head.appendChild(link);

  //render(<AppLoginPage />, document.getElementById("root"));
  render(<PageLayoutSimpleNav />, document.getElementById("root"));
});
