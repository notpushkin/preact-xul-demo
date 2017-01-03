"use strict";

var h = preact.h, render = preact.render;
var appRoot = document.getElementById("appRoot");

render(h("box", { orient: "vertical" },
  h("description", null,
    "Hello, world!"
  ),
  h("button", {
    label: "Hello",
    onClick: function onClick(e) {
      return alert("hi!");
    }
  })
), document.getElementById("appRoot"));
