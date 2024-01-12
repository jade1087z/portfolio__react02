import React from "react";

const Section02 = () => {
    return (
        <div id="section2">
            <div className="imgWrap">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="text-title">
                <span className="svg">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <polygon points="11.293 4.707 17.586 11 4 11 4 13 17.586 13 11.293 19.293 12.707 20.707 21.414 12 12.707 3.293 11.293 4.707" />
                    </svg>
                </span>
                <p className="desc1">WHY, COLLABORATION AMONG DEVELOPERS</p>
                <p className="desc2">
                    <i>
                        최종 제품의 품질을 높이기 위해서는 협업은 필수적이라
                        생각합니다.
                    </i>
                    협업없이 혼자 프로젝트를 추진하는 것은 혼자만의 시야와
                    지식으로 한정된 결과물을 가져온다고 생각합니다.
                    <br />
                    협업을 통한 팀원 간의 피드백과 검토 과정은 다양한 문제에
                    대한 해결방안과 다양한 기술과 관점을 빠르게 배울 수 있는
                    기회라고 생각합니다. <br />
                    작은 관점에서의 협업은 단순히 함께 일하는 것이겠지만, 시각을
                    넓혀 보면 협업이란 서로를 이해하고 지지하며 공동의 목표를
                    향해 나아가는 과정인 것 같습니다.
                </p>
            </div>
        </div>
    );
};

export default Section02;
