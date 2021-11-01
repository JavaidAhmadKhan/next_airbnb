const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = {
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiamF2YWlka2hhbiIsImEiOiJja3ZmMm5xMHoweXdwMnBxNXkzaXpvNzMxIn0.4-Np7IOGheyzrFGq1PdLdA",
  },
};


