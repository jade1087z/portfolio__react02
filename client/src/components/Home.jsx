import React, { useEffect, useRef } from "react";
import Section01 from "./section01/Section01";
import Section04 from "./section04/Section04";
import Section03 from "./section03/Section03";
import Section02 from "./section02/Section02";
import Footer from "./Footer";
import Section05 from "./section05/Section05";
import getOS from "./os";
import { useInView } from "framer-motion";

const Home = () => {
    const osClass = getOS();
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;

            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <div className={`App ${osClass}`}>
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
            <Section05 />
            <Footer />
        </div>
    );
};

export default Home;
