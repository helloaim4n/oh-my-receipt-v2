const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/privacy-policy",
    exact: true,
    component: "PrivacyPolicy",
  },
  {
    path: "/terms-and-conditions",
    exact: true,
    component: "TnC",
  },
  {
    path: "/404",
    exact: true,
    component: "NotFound",
  }
];

export default routes;
