import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Slider from '../Shared/Slider/Slider';
import PopularClass from '../Shared/PopularClass/PopularClass';
import Art from '../Shared/Art/Art';
import Footer from '../Shared/Footer/Footer';

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <Art></Art>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;