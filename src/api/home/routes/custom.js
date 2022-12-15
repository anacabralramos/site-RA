module.exports = {
  routes: [
    {
      method: "GET",
      path: "/custom",
      handler: "home.customAction",
      config: {
        auth: false,
      },
    },
  ],
};
