import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <div className="title">
                <div className="t1">contact</div>
                <div className="t2">contact@naver.com</div>
                <div className="list">
                    <ul>
                        <li>
                            <strong>site</strong>
                        </li>
                        <li>
                            <Link to={"#"}>github</Link>
                        </li>
                        <li>
                            <Link to={"#"}>codepen</Link>
                        </li>
                        <li>
                            <Link to={"#"}>blog</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>public</strong>
                        </li>
                        <li>
                            <Link to={"#"}>webstandard</Link>
                        </li>
                        <li>
                            <Link to={"#"}>html/css</Link>
                        </li>
                        <li>
                            <Link to={"#"}>phython</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>site</strong>
                        </li>
                        <li>
                            <Link to={"#"}>react</Link>
                        </li>
                        <li>
                            <Link to={"#"}>next</Link>
                        </li>
                        <li>
                            <Link to={"#"}>node</Link>
                        </li>
                        <li>
                            <Link to={"#"}>php</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <strong>css</strong>
                        </li>
                        <li>
                            <Link to={"#"}>blog</Link>
                        </li>
                        <li>
                            <Link to={"#"}>shop</Link>
                        </li>
                        <li>
                            <Link to={"#"}>node</Link>
                        </li>
                        <li>
                            <Link to={"#"}>php</Link>
                        </li>
                    </ul>
                </div>
                <div className="address">
                    Copyright © portfolio 2024
                    <p>이 사이트는 리액트로 제작되었습니다.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
