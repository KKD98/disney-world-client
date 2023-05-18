import React from 'react';
import Banner from '../Banner/Banner';
import GallerySection from '../GallerySection/GallerySection';
import PopularSection from '../PopularSection/PopularSection';

const HomeBody = () => {
    return (
        <div>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <PopularSection></PopularSection>
        </div>
    );
};

export default HomeBody;