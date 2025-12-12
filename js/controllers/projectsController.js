import projectsView from "../views/projectsView.js";

export async function init() {
  const content = document.querySelector("#app");
  content.innerHTML = "<p>Loading projects...</p>";
  content.innerHTML = await projectsView();
}
