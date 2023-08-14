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
];

export default routes;
