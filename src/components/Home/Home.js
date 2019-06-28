import React from "react";
import { Jumbotron, Container, Button, Col, Row } from "react-bootstrap";
import "./Home.css";
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import Thirdpage from './Thridpage/Thirdpage';
import Fourth from './Fourthpage/Fourthpage';
import FifthPage from './Work/Fifth';
import Play from './Advertise/Play';
import Mobility from './Mobility/Mobi';
import Moreto from './More/More';
import Mainly from './BeforeFooter/Main';
import Footer from './Footer/Footer';


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
        <div>
            <Moreto />
        </div>
        <div>
            <Mainly />
        </div>
        <div>
            <Footer />
        </div>
        
    </div>
);
