import aboutView from "../views/aboutView.js";

export function init() {
  document.getElementById("app").innerHTML = aboutView();
}
