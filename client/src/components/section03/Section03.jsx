import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Data03 from "./Data03";
import { useInView, motion } from "framer-motion";

//  리액트 훅은 반복, 조건, 중첩 함수 내에서 호출 불가 ->
//  훅의 호출 순서 보장

const Section03 = () => {
    const body3 = useRef(null);
    const stickyRefs = Data03.map(() => React.createRef());
    const isInView = useInView(body3, { once: true, marginTop: "20px" });
    const [isVisible, setIsVisible] = useState(stickyRefs.map(() => false));

    useEffect(() => {
        const observers = stickyRefs.map((ref, index) => {
            const observer = new IntersectionObserver(
                (entries) => {
                    setIsVisible((prev) => {
                        const newState = [...prev];
                        newState[index] = entries[0].isIntersecting;
                        return newState;
                    });
                },
                { rootMargin: "20px" }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return observer;
        });
        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [stickyRefs]);

    useEffect(() => {
        const handleScroll = () => {
            stickyRefs.forEach((ref, index) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const isVisible =
                        rect.top < window.innerHeight && rect.bottom >= 0;
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const animation = {
        initial: { y: "100%" },

        enter: () => ({
            y: "0",
            transition: {
                duration: 0.95,
                ease: [0.33, 1, 0.68, 1],
                delay: 0.8,
            },
        }),
    };

    return (
        <div id="section3">
            <div className="title">
                <div className="sec3__title lineMask" ref={body3}>
                    <div className="lineMask ab">
                        <motion.p
                            variants={animation}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                            className="img"
                        ></motion.p>
                    </div>
                    <div className="lineMask">
                        <motion.p
                            className="split t1"
                            variants={animation}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                        >
                            In Progress,
                        </motion.p>{" "}
                    </div>
                    <div className="lineMask">
                        <motion.p
                            className="split t2"
                            variants={animation}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                        >
                            Compilation
                        </motion.p>{" "}
                    </div>
                </div>
                <div className="lineMask">
                    <motion.p
                        variants={animation}
                        initial="initial"
                        animate={isInView ? "enter" : ""}
                        className="desc"
                    >
                        프론트앤드 포트폴리오를 위한 작업 목록입니다.
                    </motion.p>
                </div>

                <div className="lineMask">
                    <motion.p
                        className="desc2"
                        variants={animation}
                        initial="initial"
                        animate={isInView ? "enter" : ""}
                    >
                        php를 시작으로, React.js, Node.js를 활용해 팀프로젝트에
                        참여하며 웹 사이트를 제작해보았습니다.
                        <br />
                        API가 무엇인지, 그리고 API와 통신하려면 어떤 방식을
                        활용하는지 배울 수 있었고 가져온 데이터를 어떻게 하면
                        효율적으로 보여줄 수 있는지 경험했습니다.
                    </motion.p>
                </div>
            </div>

            <div className="site__wrap">
                {Data03.map((data, key) => {
                    return (
                        <div
                            className={`site s${key + 1}`}
                            key={key}
                            ref={stickyRefs[key]}
                        >
                            <div className="">
                                <div className="lineMask num">
                                    <motion.p
                                        variants={animation}
                                        initial="initial"
                                        animate={isVisible[key] ? "enter" : ""}
                                        className="num"
                                    >
                                        {key + 1}
                                    </motion.p>
                                </div>
                            </div>
                            <div className="subTitle">({data.subTitle})</div>
                            <div className="tit">
                                {data.h4.map((tit, index) => (
                                    <div className="h4 lineMask" key={index}>
                                        <motion.p
                                            variants={animation}
                                            initial="initial"
                                            animate={
                                                isVisible[key] ? "enter" : ""
                                            }
                                        >
                                            {tit}
                                        </motion.p>
                                    </div>
                                ))}
                                <div className="img-wrap">
                                    <div className="img lineMask">
                                        <img src={data.img} alt="" />
                                    </div>
                                    <div className="desc lineMask">
                                        <h4>
                                            <Link to={data.siteLink}>
                                                {data.descLink}
                                            </Link>
                                        </h4>
                                        <p> {data.mainP}</p>
                                        <div className="link">
                                            <Link to={data.gitLink}>
                                                View on Git
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Section03;
