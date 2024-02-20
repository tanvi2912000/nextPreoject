// index.jsx

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';




export default function Home() {
  
  
const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    '/images/c1.jpg',
    '/images/c2.jpg',
    '/images/c3.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // console.log(slides)
  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-36 rounded-lg md:h-80">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              activeSlide === index ? 'block' : 'hidden'
            } absolute w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-transform duration-700 ease-in-out`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full"
           
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              activeSlide === index ? 'bg-white' : 'bg-gray-300'
            }`}
            aria-current={activeSlide === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
    </div>
  );
};



  
  return (
    <>
      <Navbar />
      <section className='py-48'>
      <Carousel />
      </section>
      
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-50 mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-400 py-8">Portfolio</h2>
          <div className="flex flex-wrap m-2">
            
            <div className="p-4 md:w-1/3 bg-stone-50 rounded-md mb-4">
              <div className="h-full rounded-md overflow-hidden">
                <img
                  className="md:h-90"
                  src="/images/i1.jpg"
                  alt="blog"
               
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-blue-400">
                    New Collection
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <button className="bg-blue-300 text-white p-2 text-sm rounded-md">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 bg-stone-50 rounded-md mb-4">
              <div className="h-full rounded-md overflow-hidden">
                <img
                  className="md:h-90"
                  src="/images/i3.jpg"
                  alt="blog"
                  width={400}
                  height={800}
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-blue-400">
                    New Collection
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <button className="bg-blue-300 text-white p-2 text-sm rounded-md">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 bg-stone-50 rounded-md mb-4">
              <div className="h-full rounded-md overflow-hidden">
                <img
                  className="md:h-90"
                  src="/images/i2.jpg"
                  alt="blog"
                  width={400}
                  height={800}
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-bold text-blue-400">
                    New Collection
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <button className="bg-blue-300 text-white p-2 text-sm rounded-md">
                    Go somewhere
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


