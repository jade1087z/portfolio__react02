import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/image.png";
const Section01 = () => {
    return (
        <div>
            <header id="header">
                <div className="left">
                    <span>
                        <img src={logo} alt="" />
                    </span>
                    <h1>developer</h1>
                    <p>korea, Monday 22:20</p>
                </div>
                <nav className="right">
                    <ul>
                        <li>
                            <Link to={"#"}>abuot</Link>
                        </li>
                        <li>
                            <Link to={"#"}>work</Link>
                        </li>
                        <li>
                            <Link to={"#"}>contact</Link>
                        </li>
                        <li>
                            <Link to={"#"}>comment</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <div id="section1">
                <div className="sec1__text">
                    <span className="img"></span>
                    <div className="split t1">frontend</div>
                    <div className="split t2">developer</div>
                    <div className="split t3">I want be.</div>
                </div>
                <div className="sec1__intro">
                    <p className="split">
                        가장 큰 위험은 위험없는 삶이다!
                        <br />
                        무언가를 직접, 내 손으로 만들어낼 수 있다는 점에서 웹
                        개발이라는 직업에 굉장한 매력을 느꼈습니다. 개발
                        과정에서 부딪히는 다양한 <br />
                        난관과 버그를 찾아내고 그런 요소들을 해결하는 일 하나,
                        하나가 스트레스를 주는 것은 분명합니다. 하지만 그런
                        일들을 차근, 차근 해결할 때마다 오는 성취감이, <br />
                        제가 개발 공부를 더 열심히하고자 하는 이유 중에
                        하나입니다. 제가 되고 싶은 개발자는 프로그래밍, 맡은
                        일에 있어서 전체적인 흐름을 <br />잘 파악하고 리소스
                        내에서 최대한의 성능을 끌어낼 수 있는 개발자가 되고
                        싶습니다.{" "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Section01;
