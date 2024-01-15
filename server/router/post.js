const express = require("express");
const router = express.Router();
// 스키마

// 스키마
const { Counter } = require("../model/Counter.js");
const { Post } = require("../model/Post.js");

router.post("/write", (req, res) => {
    let temp = {
        content: req.body.content,
    };

    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum;

            const newPost = new Post(temp);
            newPost.save().then((savedPost) => {
                Counter.updateOne(
                    { name: "counter" },
                    { $inc: { postNum: 1 } }
                ).then(() => {
                    res.status(200).json({ success: true, newPost: savedPost });
                });
            });
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({ success: false });
        });
});

router.get("/list", (req, res) => {
    Post.find()
        .sort({ postNum: -1 })
        .then((result) => {
            res.status(200).json({ success: true, postList: result });
        })
        .catch((err) => {
            res.status(400).json({ success: false });
        });
});

module.exports = router;
