import React from "react";
import Section01 from "./section01/Section01";
import Section04 from "./section04/Section04";
import Section03 from "./section03/Section03";
import Section02 from "./section02/Section02";

const Home = () => {
    const getOS = () => {
        const platform = window.navigator.platform;
        const macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
        const windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
        if (macosPlatforms.includes(platform)) {
            return "macos";
        } else if (windowsPlatforms.includes(platform)) {
            return "windows";
        } else {
            return "unknown";
        }
    };
    const osClass = getOS();
    return (
        <div className={`App ${osClass}`}>
            <Section01 />
            <Section02 />
            <Section03 />
            <Section04 />
        </div>
    );
};

export default Home;
