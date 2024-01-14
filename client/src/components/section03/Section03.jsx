import React from "react";
import { Link } from "react-router-dom";
import Data03 from "./Data03";

const Section03 = () => {
    return (
        <div id="section3">
            <div className="title">
                <div className="sec3__title">
                    <span className="img"></span>
                    <div className="split t1">In Progress,</div>
                    <div className="split t2">Compilation</div>
                </div>
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
                {Data03.map((data, key) => (
                    <div className={`site s`+(key+1)}  key={key}>
                    <span className="num">{key+1}</span>
                    <div className="subTitle">({data.subTitle})</div>
                    <div className="tit">
                        <div className="h4">
                            {data.h4}
                        </div>
                        <div className="img-wrap">
                            <div className="img"></div>
                            <div className="desc">
                                <h4><Link to={data.siteLink}>{data.descLink}</Link></h4>
                                <p className="">
                                  {data.mainP}
                                </p>
                                <div className="link">
                                    <Link to={data.gitLink}>View on Git</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>  

                ))}

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
                                <h4><Link to={'#'}>YouTube Clone Link</Link></h4>
                                <p>
                                    유튜브 API를 불러와 클론 사이트를
                                    제작했습니다. React 그리고, API에
                                    대해 경험 할 수 있는 기회였습니다.
                                    React Hook, Redux, Props의 이해를 위한 첫
                                    발걸음이 되었습니다.
                                </p>
                                <div className="link">
                                    <Link to={'#'}>View on Git</Link>
                                </div>
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
                                <h4><Link to={'#'}>Diary Site Link</Link></h4>
                                <p>
                                    비동기 프로그래밍의 문제점이 Virtual DOM에{" "}
                                    영향을 미치는 점을 파악하고, 이에 대응하기{" "}
                                    위해 FLUX 패턴의 중요성과 Redux, React
                                    Hook과 같은 도구들의 역할을 이해했습니다.{" "}
                                    
                                </p>
                                <div className="link">
                                    <Link to={'#'}>View on Git</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section03;
