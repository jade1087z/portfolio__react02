import React, { useEffect, useState } from "react";
import addPost from "./addPost";
import list from "./list";

const Section05 = () => {
    const [desc, setDesc] = useState();
    const [name, setName] = useState();
    const [pass, setPass] = useState();
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        list(setPostList);
    }, []);

    return (
        <div id="section5">
            <div className="title">
                <span className="img"></span>
                <div className="split t1">profile,</div>
                <div className="split t2">& comment</div>
                <p className="desc2">
                    협업없이 혼자 프로젝트를 추진하는 것은 혼자만의 시야와
                    지식으로 한정된 결과물을 가져온다고 생각합니다.
                    <br />
                    협업을 통한 팀원 간의 피드백과 검토 과정은 다양한 문제에
                    대한 해결방안과 다양한 기술과 관점을 빠르게 배울 수 있는
                    기회라고 생각합니다.
                </p>
            </div>
            <div className="comment__wrap">
                <div className="comment__inner">
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            기술과 관점을 빠르게 배울 수 있는 기회라고
                            생각합니다. 기술과 관점을 빠르게 배울 수 있는
                            기회라고 생각합니다. 기술과 관점을 빠르게 배울 수
                            있는 기회라고 생각합니다. 기술과 관점을 빠르게 배울
                            수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                </div>
                <div className="comment__inner">
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            기술과 관점을 빠르게 배울 수 있는 기회라고
                            생각합니다. 기술과 관점을 빠르게 배울 수 있는
                            기회라고 생각합니다. 기술과 관점을 빠르게 배울 수
                            있는 기회라고 생각합니다. 기술과 관점을 빠르게 배울
                            수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            다양한 기술과 관점을 빠르게 배울 수 있는 기회라고
                            생각합니다.
                        </p>
                    </div>
                    <div className="comment">
                        <div className="author">
                            <em>학생</em> <span>2023.03.04</span>
                        </div>
                        <p>
                            협업을 통한 팀원 간의 피드백과 검토 과정은 다양한
                            문제에 대한 해결방안과 다양한 기술과 관점을 빠르게
                            배울 수 있는 기회라고 생각합니다.
                        </p>
                    </div>
                </div>
                <div className="comment__input">
                    <input
                        type="text"
                        placeholder="이름"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="text"
                        placeholder="비밀번호"
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                    />
                    <input
                        type="text"
                        placeholder="댓글"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                    />
                    <button
                        onClick={(e) =>
                            addPost(e, desc, pass, name, setPostList)
                        }
                    >
                        댓글 쓰기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Section05;
