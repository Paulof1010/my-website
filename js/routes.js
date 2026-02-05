const routes = {
  home: {
    path: "/my-website",
    controller: "homeController",
  },
  about: {
    path: "/about",
    controller: "aboutController",
  },
  projects: {
    path: "/projects",
    controller: "projectsController",
  },
  interests: {
    path: "/interests",
    controller: "interestsController",
  },
  currentPath: {
    path: "",
    controller: "",
  },
};

export default routes;
