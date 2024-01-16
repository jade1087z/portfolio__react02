import axios from "axios";

const list = (setPostList) => {
    axios
        .get("/api/post/list")
        .then((res) => {
            if (res.data.success) {
                setPostList(res.data.postList);
                console.log("axios list");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export default list;
