module.exports = {
  apps: [
    {
      name: "Clustering",
      script: "withoutCluster.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
