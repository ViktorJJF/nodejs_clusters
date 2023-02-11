const express = require("express");
const app = express();
const port = process.env.PORT || 6000;

const numCPUs = require("os").cpus().length;
console.log("🚀 Aqui *** -> numCPUs", numCPUs);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/:n", function (req, res) {
  let n = parseInt(req.params.n);
  let count = 0;

  if (n > 5000000000) n = 5000000000;

  for (let i = 0; i <= n; i++) {
    count += i;
  }

  res.send(`Final count is ${count}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
