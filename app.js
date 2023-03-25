const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1> Auto scaling 데모 테스트 </h1> <h4> Message: success</h4>");
});

app.listen(port, () => {
  console.log(`Demo app is up and listening to port ${port}`);
});
