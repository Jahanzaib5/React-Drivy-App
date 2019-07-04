import React from 'react';
import Forma from './Form/Form';
import Banner from './BannerGrid/Banner';
import Tab from './Tab/Tab';
import CardBox from './CardBox/CardBox';
import LearnMore from './LearnMore/LearMore';
import LastCard from './LastCard/LastCard';


export const About = () => (
    <div>
      <div>
        <Forma />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <CardBox />
      </div>
      <div>
        <Tab />
      </div>
      <div>
        <LearnMore />
      </div>
      <div>
        <LastCard />
      </div>
    </div>
)
