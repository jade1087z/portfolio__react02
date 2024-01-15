const express = require("express");
const path = require("path");
// 데이터베이스
const mongoose = require("mongoose");
const app = express();
const port = 5050;

// DB, Firebase, navercloud key
const config = require("./config/key.js");
app.use(express.static(path.join(__dirname, "../portt/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// router
app.use("/api/post", require("./router/post.js"));

app.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log("listening  --> " + port);
            console.log("mongoose --> connecting");
        })
        .catch((err) => {
            console.log(err);
        });
});
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../portt/build/index.html"));
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../portt/build/index.html"));
});
