import React from 'react';
import AdvertiseMent from './AdvertiseMent/AdvertiseMent';
import Baner from './Baner/Baner';
import BestBrand from './BestBrand/BestBrand';
import ReviewSection from './ReviewSection/ReviewSection';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home" >
            <Baner></Baner>
            <Services></Services>
            <BestBrand></BestBrand>
            <AdvertiseMent></AdvertiseMent>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default Home;