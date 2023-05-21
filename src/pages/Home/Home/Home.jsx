import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import MeaningFullToys1 from '../MeaningFulllToys1/MeaningFullToys1';
import MeaningFullToys2 from '../MeaningFullToys2/MeaningFullToys2';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <MeaningFullToys1></MeaningFullToys1>
            <MeaningFullToys2></MeaningFullToys2>
        </div>
    );
};

export default Home;