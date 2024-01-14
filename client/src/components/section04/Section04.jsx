import React from "react";
import Data04 from "./Data04";
import { Link } from "react-router-dom";

const Section04 = () => {
    return (
        <div id="section4">
            <div className="title">
                <div className="sec4__title">
                    <span className="img"></span>
                    <div className="split t1">Competence</div>
                    <div className="split t2">&Self Outline</div>
                </div>
                <p className="desc2">
                    개인 프로젝트와 팀워크를 통해 RESTful API, 최신 웹 통신
                    기술에 대한 이해를 바탕으로,
                    <br />
                    개발에 필수적인 문제 해결력과 유연성을 키워왔습니다.또한,
                    다양한 프론트엔드 기술을 적용해 사용자 중심의 인터페이스를
                    구현하는 데에도 집중하였습니다.
                </p>
            </div>
            <div className="about-wrap">
                <div className="left"></div>
                <div className="right">
                    {Data04.map((data, key) => (
                        <dl key={key}>
                            <dt>{data.title}</dt>
                            <dd>{data.desc}</dd>
                        </dl>
                    ))}
                    <div className="link">
                    <Link to={'#'}>Go to Git Repository</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section04;
