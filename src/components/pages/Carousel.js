import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselWithDots = () => {
  const pdpImgs = [
    "bigfront", "backsideImg", "sideImg", "standupwithbook"
]

  return (
    <div className="relative md:hidden lg:hidden w-full">
    <div className="flex">
    <Carousel
        emulateTouch
        swipeable
        useKeyboardArrows
        transitionTime={1000}
        pagination={false}
        showThumbs={false}
        autoFocus
        showStatus={false}
        showIndicators
        infiniteLoop
      >
   
        {pdpImgs.map((pdpImgItem, index) => (
          <div  key={index}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${pdpImgItem}.jpg`}
            alt={`pdpImg ${index}`}
          />
          </div>
        ))}
     
     
          </Carousel>
          </div>
    </div>
  
  );
};

export default CarouselWithDots;
