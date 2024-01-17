import axios from "axios";

const list = (setPostList, setSortPostList) => {
    axios
        .get("/api/post/list")
        .then((res) => {
            console.log(res.data); // 이 부분을 추가

            if (res.data.success) {
                setPostList(res.data.postList);
                const sortedPostList = [...res.data.postList]
                    .sort((a, b) => {
                        if (a.postNum < b.postNum) return -1;
                        if (a.postNum > b.postNum) return 1;
                        return 0;
                    })
                    .reverse();
                setSortPostList(sortedPostList);
                console.log("axios list");
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export default list;
