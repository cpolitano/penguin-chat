var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use("/src", express.static(__dirname + "/src"));
app.use("/service-worker.js", express.static(__dirname + "/src/service-worker.js"));

app.listen(2020, () => console.log('Server now running at port 2020'));