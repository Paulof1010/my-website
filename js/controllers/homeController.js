import homeView from "../views/homeView.js";

export function init() {
  document.getElementById("app").innerHTML = homeView();
}
