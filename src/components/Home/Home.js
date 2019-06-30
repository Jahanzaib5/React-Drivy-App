import React from "react";
import "./Home.css";
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import Thirdpage from './Thridpage/Thirdpage';
import Fourth from './Fourthpage/Fourthpage';
import FifthPage from './Work/Fifth';
import Play from './Advertise/Play';
import Mobility from './Mobility/Mobi';


export const Home = () => (
    <div>
        <div>
            <FirstPage />
        </div>
        <div>
            <SecondPage />
        </div>
        <div>
            <Thirdpage />
        </div>
        <div>
            <Fourth />
        </div>
        <div>
            <FifthPage />
        </div>
        <div>
            <Play />
        </div>
        <div>
            <Mobility />
        </div>
        
    </div>
);
