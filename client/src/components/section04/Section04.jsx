import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Data04 from "./Data04";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import desc from "./desc";

const Section04 = () => {
    const body4 = useRef(null);
    const body4Desc = useRef(null);
    const isInView = useInView(body4, { once: true, marginTop: "20px" });
    const isInView2 = useInView(body4Desc, { once: true, marginTop: "10px" });
    const linkRef = useRef(null);
    const isLinkInView = useInView(linkRef, { once: true, marginTop: "20px" });

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

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
        },
    };

    const Item = ({ data }) => {
        const controls = useAnimation();
        const { ref, inView } = useInView({
            threshold: 0.1, // 10%가 보이면 trigger 되도록
        });

        useEffect(() => {
            if (inView) {
                controls.start("visible");
            }
            console.log(inView);
        }, [controls, inView]);

        return (
            <motion.dl
                ref={ref}
                variants={fadeIn}
                initial="hidden"
                animate={controls}
            >
                <motion.dt>{data.title}</motion.dt>
                <motion.dd>{data.desc}</motion.dd>
            </motion.dl>
        );
    };

    return (
        <div id="section4">
            <div className="title">
                <div className="sec4__title" ref={body4}>
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
                            variants={animation}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                            className="split t1"
                        >
                            Competence
                        </motion.p>
                    </div>
                    <div className="lineMask">
                        <motion.p
                            variants={animation}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                            className="split t2"
                        >
                            &Self Outline
                        </motion.p>
                    </div>
                </div>

                {desc.map((desc, key) => (
                    <div className="lineMask" key={key}>
                        <motion.p
                            variants={animation}
                            initial="initial"
                            animate={isInView ? "enter" : ""}
                            className="desc2"
                        >
                            {desc}
                        </motion.p>
                    </div>
                ))}
            </div>
            <div className="about-wrap">
                <div className="left"></div>
                <div className="right">
                    {Data04.map((data, key) => (
                        <Item
                            key={key}
                            data={data}
                            animation={animation}
                            fadeIn={fadeIn}
                        />
                    ))}
                    <div className="link" ref={linkRef}>
                        <motion.a
                            initial="hidden"
                            animate={isLinkInView ? "visible" : "hidden"}
                            variants={fadeIn}
                            href="#"
                        >
                            Go to Git Repository
                        </motion.a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section04;
