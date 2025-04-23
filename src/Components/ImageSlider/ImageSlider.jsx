import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MyImages from '../../Constants/MyImages';

const images = [
  MyImages.slider1,
  MyImages.slider2,
  MyImages.slider3,
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const ImageSlider = () => {
  return (
    <div className='w-full h-full relative max-h-[700px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[800px]'>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        showDots={true}
        arrows={false}
        draggable={true}
        renderDotsOutside={false}
        dotListClass='!flex !justify-center !absolute w-full z-10 bottom-3 sm:bottom-5 md:bottom-10'
        containerClass='carousel-container'
        itemClass='carousel-item-padding-40-px'
      >
        {images.map((img, index) => (
          <div key={index} className='w-full h-full px-2'>
            <img
              src={img}
              alt={`slide-${index}`}
              className='w-full h-full object-cover rounded-xl'
            />
          </div>
        ))}
      </Carousel>

      {/* Dot button responsive styling */}
      <style>{`
        .react-multi-carousel-dot button {
          transition: all 0.3s ease;
          background-color: black;
          border-radius: 10px;
          margin: 10px 1px; 
        }

        .react-multi-carousel-dot--active button {
          background-color: white !important;
        }

        @media (max-width: 400px) {
          .react-multi-carousel-dot button {
            width: 8px;
            height: 6px;
          }
        }

        @media (max-width: 768px) {
          .react-multi-carousel-dot button {
            width: 10px;
            height: 8px;
          }
        }

        @media (min-width: 769px) {
          .react-multi-carousel-dot button {
            width: 15px;
            height: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
