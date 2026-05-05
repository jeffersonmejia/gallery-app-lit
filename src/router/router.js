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
    path: "/address",
    component: "address-page",
  },
  {
    path: "/services",
    component: "services-page",
  },
  {
    path: "/contact",
    component: "contact-page",
  },
  {
    path: "/address",
    component: "address-page",
  },
  {
    path: "(.*)",
    component: "/",
  },
]);

export { router };
