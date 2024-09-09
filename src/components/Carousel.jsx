import React, { useEffect } from 'react';

const Carousel = ({ currentIndex, showContent }) => {

    useEffect(() => {
    }, [])

  const slides = [
    {
      img: './pictures/1.jpg',
      title: 'Une photo comme ça',
      description: 'Photo lors de fiançailles de proches',
    },
    {
      img: './pictures/2.jpg',
      title: 'Une autre photo comme ça',
      description: 'Photo lors de fiançailles de proches 2',
    },
    {
      img: './pictures/3.jpg',
      title: 'Euh c\'est différent ?',
      description: 'Photo lors de fiançailles de proches 3',
    },
  ];

  return (
    <div className="carousel" >
      {slides.map((slide, index) => (
        <div className="slide" key={index} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <img src={slide.img} className="slide__img" alt={slide.title} />
          <article className={`slide__content ${showContent ? '' : 'hidden'}`}>
            <h4>{slide.title}</h4>
            <p>{slide.description}</p>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
