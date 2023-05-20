import React from 'react';
import Banner from '../Banner/Banner';
import GallerySection from '../GallerySection/GallerySection';
import PopularSection from '../PopularSection/PopularSection';
import AllCategory from '../AllCategory/AllCategory';
import SalesSection from '../SalesSection/SalesSection';

const HomeBody = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <AllCategory></AllCategory>
            <SalesSection></SalesSection>
            <PopularSection></PopularSection>
        </div>
    );
};

export default HomeBody;