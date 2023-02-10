module.exports = {
  apps: [
    {
      name: "Clustering",
      script: "index.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
