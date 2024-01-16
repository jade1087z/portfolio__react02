import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

const Right = () => {
    const Item = ({ data, animation, animation2 }) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, marginTop: "10px" });
        return (
            <motion.dl
                ref={ref}
                variants={animation}
                initial="initial"
                animate={isInView ? "enter" : ""}
            >
                <motion.dt variants={animation2}>{data.title}</motion.dt>
                <motion.dd variants={animation2}>{data.desc}</motion.dd>
            </motion.dl>
        );
    };
};

export default Right;
