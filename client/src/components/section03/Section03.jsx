import React from "react";

const Section03 = () => {
    return (
        <div id="section3">
            <div className="title">
                <span className="img"></span>
                <div className="split t1">working,</div>
                <div className="split t2">mylist</div>
                <p className="desc">
                    프론트앤드 포트폴리오를 위한 작업 목록입니다.
                </p>
                <p className="desc2">
                    php를 시작으로, React.js, Node.js를 활용해 팀프로젝트에
                    참여하며 웹 사이트를 제작해보았습니다.
                    <br />
                    API가 무엇인지, 그리고 API와 통신하려면 어떤 방식을
                    활용하는지 배울 수 있었고 가져온 데이터를 어떻게 하면
                    효율적으로 보여줄 수 있는지 경험했습니다.
                </p>
            </div>

            <div className="site__wrap">
                <div className="site s1">
                    <span className="num">1.</span>
                    <div className="subTitle">(게시판 사이트 제작)</div>
                    <div className="tit">
                        <div className="h4">
                            Crafted a PHP based community platform.
                        </div>
                        <div className="img-wrap">
                            <div className="img"></div>
                            <div className="desc">
                                <h4>php를 활용한 커뮤니티 사이트</h4>
                                <p>
                                    DB와 SQL 기본 지식을 토대로 서버와
                                    클라이언트 통신을 구현했습니다.
                                    <br />
                                    RESTFULL API와 데이터베이스 직접 설계를
                                    해보는 경험이 웹사이트 개발의 전체적인
                                    흐름을 익히는데 많은 도움이 되었습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site s2">
                    <span className="num">2.</span>
                    <div className="subTitle">(유튜브 사이트 제작)</div>
                    <div className="tit">
                        <div className="h4">
                            Built a React YouTube Clone on Digital Stage.
                        </div>
                        <div className="img-wrap">
                            <div className="img"></div>
                            <div className="desc">
                                <h4>유튜브 사이트 제작</h4>
                                <p>
                                    유튜브 API를 불러와 클론 사이트를
                                    제작했습니다. <br /> React 그리고, API에
                                    대해 경험 할 수 있는 기회였습니다. <br />{" "}
                                    React Hook, Redux, Props의 이해를 위한 첫
                                    발걸음이 되었습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="site s3">
                    <span className="num">3.</span>
                    <div className="subTitle">(다이어리 사이트 제작)</div>
                    <div className="tit">
                        <div className="h4">
                            Engineered a diary site with React.js and Node.js.
                        </div>
                        <div className="img-wrap">
                            <div className="img"></div>
                            <div className="desc">
                                <h4>
                                    React와 Node.js를 활용한 다이어리 사이트
                                </h4>
                                <p>
                                    비동기 프로그래밍의 문제점이 Virtual DOM에{" "}
                                    <br />
                                    영향을 미치는 점을 파악하고, 이에 대응하기{" "}
                                    <br />
                                    위해 FLUX 패턴의 중요성과 Redux, React
                                    Hook과 같은 도구들의 역할을 이해했습니다.{" "}
                                    <br />
                                    이를 통해 기술 숙련에 집중하고 프로그램
                                    최적화에 더 많은 노력을 기울일 수
                                    있었습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section03;
