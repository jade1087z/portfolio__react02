import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/image.png";
import { useInView, motion } from "framer-motion";
import data from "./text";

const Section01 = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [activeLink, setActiveLink] = useState(null);
    const [time, setTime] = useState("");
    const [colonOpacity, setColonOpacity] = useState(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const timer = setInterval(() => {
            const now = new Date();
            const day = days[now.getDay()];
            const hour = ("0" + now.getHours()).slice(-2);
            const minute = ("0" + now.getMinutes()).slice(-2);
            const second = now.getSeconds();

            setColonOpacity(second % 2 ? 0 : 1);
            setTime(`korea, ${day} ${hour}:${minute}`);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    // header day

    const list = [
        { link: "#", name: "Abuot" },
        { link: "#", name: "Work" },
        { link: "#", name: "Contact" },
        { link: "#", name: "Comment" },
    ];
    const handleMenuClick = () => {
        setShowMenu(!showMenu);
        console.log("click");
    };
    const handleMouseOver = (key) => {
        setActiveLink(key);
    };
    const handleMouseOut = () => {
        setActiveLink(null);
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 700) {
                setShowMenu(true);
            } else {
                setShowMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    //  hover + toggle
    const body = useRef(null);
    const isInView = useInView(body, { once: true, margin: "1%" });

    const animation = {
        initial: { y: "100%" },

        enter: () => ({
            y: "0",
            transition: {
                duration: 0.95,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.6,
            },
        }),
    };
    const texts = ["frontend", "developer", "I want be."];
    const desc = [
        "가장 큰 위험은 위험없는 삶이다!",
        "무언가를 직접, 내 손으로 만들어낼 수 있다는 점에서 웹 개발이라는 직업에 굉장한 매력을 느꼈습니다. 개발 과정에서 부딪히는 다양한",
        "난관과 버그를 찾아내고 그런 요소들을 해결하는 일 하나, 하나가 스트레스를 주는 것은 분명합니다. 하지만 그런    일들을 차근, 차근 해결할 때마다 오는 성취감이,",
        "제가 개발 공부를 더 열심히하고자 하는 이유 중에 하나입니다. 제가 되고 싶은 개발자는 프로그래밍, 맡은 일에 있어서 전체적인 흐름을",
        "잘 파악하고 리소스 내에서 최대한의 성능을 끌어낼 수 있는 개발자가 되고 싶습니다.",
    ];

    return (
        <div ref={body}>
            <header id="header">
                <div className="left">
                    <span className="logoImg">
                        <img src={logo} alt="" />
                    </span>
                    <h1>developer</h1>
                    <p className="time">
                        {time.split(":").map((part, index) => (
                            <React.Fragment key={index}>
                                <span>{part}</span>
                                {index < time.split(":").length - 1 && (
                                    <span style={{ opacity: colonOpacity }}>
                                        :
                                    </span>
                                )}
                            </React.Fragment>
                        ))}
                    </p>
                </div>
                <nav className="right">
                    <div
                        className="header__nav__mobile"
                        id="headerToggle"
                        aria-controls="primary-menu"
                        aria-expanded={showMenu ? false : true}
                        role="button"
                        onClick={() => handleMenuClick()}
                    >
                        Menu
                    </div>
                    <ul className={`${showMenu ? "show" : "hide"}`}>
                        {list.map((li, key) => (
                            <li key={key}>
                                <Link
                                    to={li.link}
                                    style={{
                                        color:
                                            activeLink === key
                                                ? "#22242a"
                                                : activeLink !== null
                                                ? "#eaeaea"
                                                : "#22242a",
                                    }}
                                    onMouseOver={() => handleMouseOver(key)}
                                    onMouseOut={handleMouseOut}
                                >
                                    {li.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <div id="section1">
                <div className="sec1__text">
                    <div className="lineMask ab">
                        <motion.p
                            variants={animation}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                            className="split t0"
                        ></motion.p>
                    </div>
                    {texts.map((text, key) => (
                        <div className="lineMask" key={key}>
                            <motion.p
                                className={`split t${key + 1}`}
                                variants={animation}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                            >
                                {text}
                            </motion.p>
                        </div>
                    ))}
                </div>
                <div>
                    {desc.map((desc, key) => (
                        <div className="sec1__intro lineMask" key={key}>
                            <motion.p
                                className="split"
                                variants={animation}
                                initial="initial"
                                animate={isInView ? "enter" : ""}
                            >
                                {desc}
                            </motion.p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section01;
