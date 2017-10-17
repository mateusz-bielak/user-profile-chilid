"use strict";

var test = React.createElement(
  "div",
  null,
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "1"
    ),
    React.createElement(
      "li",
      null,
      "2"
    ),
    React.createElement(
      "li",
      null,
      "3"
    )
  )
);

ReactDOM.render(test, document.querySelector("#app"));
