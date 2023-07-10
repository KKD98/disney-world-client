import React from 'react';
import Banner from '../Banner/Banner';
import GallerySection from '../GallerySection/GallerySection';
import PopularSection from '../PopularSection/PopularSection';
import AllCategory from '../AllCategory/AllCategory';
import SalesSection from '../SalesSection/SalesSection';
import useTitle from '../../hooks/useTitle';
import Review from '../Review/Review';
import ToyPartners from '../ToyPartners/ToyPartners';

const HomeBody = () => {
    useTitle('Home');
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <AllCategory></AllCategory>
            <SalesSection></SalesSection>
            <ToyPartners></ToyPartners>
            <PopularSection></PopularSection>
            <Review></Review>
        </div>
    );
};

export default HomeBody;