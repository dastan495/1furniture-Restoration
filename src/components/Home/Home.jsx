import React from "react";
// block start
import FirstBlock from "./Blocks/Block1/FirstBlock";
import SeoBlock2 from "./Blocks/Block2/SeoBlock2";
import OurPhotos from "./Blocks/Block3/OurPhotos";
import FrServer from "./Blocks/Block4/FrServer";
import WordsFrom from "./Blocks/Block5/WordsFrom";
import LatestPost from "./Blocks/Block6/LatestPost";
import ProjectLocation from "./Blocks/Block7/ProjectLocation";
// block end
// строго использовать css.module
const Home = () => {
    return (
        <div>
            <FirstBlock />
            <SeoBlock2 />
            <OurPhotos />
            <FrServer />
            <WordsFrom />
            <LatestPost />
            <ProjectLocation />
        </div>
    );
};

export default Home;
