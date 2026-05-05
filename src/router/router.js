import { Router } from "@vaadin/router";

const outlet = document.getElementById("app"),
  router = new Router(outlet);

router.setRoutes([
  {
    path: "/",
    component: "home-page",
  },
  {
    path: "/gallery",
    component: "gallery-page",
  },
  {
    path: "(.*)",
    component: "/",
  },
]);

export { router };
