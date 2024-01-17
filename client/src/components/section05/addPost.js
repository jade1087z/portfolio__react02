import axios from "axios";

const addPost = async (e, desc, pass, name, setPostList, setSortPostList) => {
    e.preventDefault();

    if (desc && pass && name) {
        let body = {
            name: name,
            pass: pass,
            content: desc,
        };
        await axios
            .post("/api/post/write", body)
            .then((res) => {
                if (res.data.success) {
                    setPostList((prevPosts) => [
                        res.data.newPost,
                        ...prevPosts,
                    ]);
                    const sortedPostList = [...res.data.postList]
                    .sort((a, b) => {
                        if (a.postNum < b.postNum) return -1;
                        if (a.postNum > b.postNum) return 1;
                        return 0;
                    })
                    .reverse();
                setSortPostList(sortedPostList);
                    alert("댓글 작성이 완료되었습니다.");
                } else {
                    console.log("axios실패");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    } else {
        alert("내용을 입력해주세여");
    }
};
export default addPost;
