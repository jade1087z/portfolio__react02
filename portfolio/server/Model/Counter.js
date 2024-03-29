const mongoose = require("mongoose");
const countSchema = new mongoose.Schema(
    {
        name: String,
        postNum: Number,
    },
    { collection: "counter" }
);
const Counter = mongoose.model("Counter", countSchema);
module.exports = { Counter };
