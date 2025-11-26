import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main" className="ns-wrapper">
      <h1 data-ns-test="project-name">
        What is Lorem Ipsum?What is Lorem Ipsum?
      </h1>

      <h6 data-ns-test="project-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a
      </h6>
    </div>
  );
};

export default App;
