module.exports = {
  routes: [
    {
      method: "GET",
      path: "/header",
      handler: "home.getHeader",
      config: {
        auth: false,
      },
    },
  ],
};
