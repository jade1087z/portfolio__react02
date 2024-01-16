import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView, motion } from "framer-motion";

const Section02 = () => {
    // 애니메이션이 살짝 끊기는 현상이 있음
    // 휠을 위로 올렸을 때 이동하는 값이 크지 않음 -> 더 크게 키우고 싶음

    // const wrap1 = useRef(null);
    // const wrap2 = useRef(null);
    // const slider = useRef(null);

    // let xPercent = 0;

    // let direction = -1;

    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.to(slider.current, {
    //         scrollTrigger: {
    //             trigger: document.documentElement,
    //             scrub: 0.5,
    //             start: 0,
    //             end: window.innerHeight,
    //             onUpdate: (e) => (direction = e.direction * -1),
    //         },
    //         x: "-800px",
    //     });

    //     gsap.to([wrap1.current, wrap2.current], {
    //         xPercent: direction * 100,
    //         modifiers: {
    //             xPercent: function (xPercent) {
    //                 return gsap.utils.wrap(-100, 0, parseFloat(xPercent));
    //             },
    //         },
    //         repeat: -1,
    //         ease: "none",
    //         duration: 20, // 이 값을 늘려 애니메이션 속도를 줄임
    //     });

    //     requestAnimationFrame(animate);
    // }, []);

    // const animate = () => {
    //     if (xPercent <= -100 && direction === -1) {
    //         xPercent = 0;
    //     } else if (xPercent >= 0 && direction === 1) {
    //         xPercent = -100;
    //     }
    //     xPercent += (direction * 0.05) / 60;

    //     requestAnimationFrame(animate);
    // };
    const wrap1 = useRef(null);
    const wrap2 = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;
    let direction = useRef(-1).current; // useRef로 direction 변수 선언

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                scrub: 0.5,
                start: 0,
                end: window.innerHeight,
                onUpdate: (e) => {
                    direction = e.direction * -1; // direction 값을 업데이트
                },
            },
            x: "-800px",
        });

        gsap.to([wrap1.current, wrap2.current], {
            xPercent: direction * 100,
            modifiers: {
                xPercent: function (xPercent) {
                    return gsap.utils.wrap(-100, 0, parseFloat(xPercent));
                },
            },
            repeat: -1,
            ease: "none",
            duration: 20,
        });

        requestAnimationFrame(animate);
    }, []);

    const animate = () => {
        if (xPercent <= -100 && direction === -1) {
            xPercent = 0;
        } else if (xPercent >= 0 && direction === 1) {
            xPercent = -100;
        }
        xPercent += (direction * 0.05) / 60;

        requestAnimationFrame(animate);
    };

    const body2 = useRef(null);
    const isInView = useInView(body2, { once: true, margin: "10px" });

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
    const animation1 = {
        initial: { y: "100%" },

        enter: () => ({
            y: "0",
            transition: {
                duration: 1.2,
                ease: [0.33, 1, 0.68, 1],
                delay: 1,
            },
        }),
    };
    const desc = [
        "최종 제품의 품질을 높이기 위해서는 협업은 필수적이라 생각합니다.",
        "협업없이 혼자 프로젝트를 추진하는 것은 혼자만의 시야와 지식으로 한정된 결과물을 가져온다고 생각합니다.",
        "협업을 통한 팀원 간의 피드백과 검토 과정은 다양한 문제에    대한 해결방안과 다양한 기술과 관점을 빠르게 배울 수 있는 기회라고 생각합니다. ",
        "작은 관점에서의 협업은 단순히 함께 일하는 것이겠지만, 시각을 넓혀 보면 협업이란 서로를 이해하고 지지하며 공동의 목표를 향해 나아가는 과정인 것 같습니다.",
    ];

    return (
        <div id="section2">
            <div className="imgWrap" ref={slider}>
                <div className="wrap" ref={wrap1}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="wrap" ref={wrap2}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="text-title">
                <span className="svg" ref={body2}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
                    </svg>
                </span>

                <div className="lineMask">
                    <motion.p
                        className="desc1"
                        variants={animation}
                        initial="initial"
                        animate={isInView ? "enter" : ""}
                    >
                        WHY, COLLABORATION AMONG DEVELOPERS
                    </motion.p>
                </div>

                {desc.map((desc, key) => (
                    <div className="lineMask" key={key}>
                        <motion.p
                            className={`desc2 d${key}`}
                            variants={animation1}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                        >
                            {desc}{" "}
                        </motion.p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section02;
