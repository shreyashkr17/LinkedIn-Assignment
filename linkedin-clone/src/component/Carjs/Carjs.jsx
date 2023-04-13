import React, { useEffect, useRef, useState } from "react";
import "./Carjs.css";
import MunchInLogo from "../../Assets/munchIn.png"
import MeLogo from "../../Assets/me.png"

// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {Swiper , SwiperSlide} from "swiper/react";
import {Pagination} from "swiper"
import "swiper/css";
import "swiper/css/pagination";



function Carjs() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselSlidesRef = useRef([]);
  
    useEffect(() => {
      carouselSlidesRef.current.forEach((slide) =>
        slide.classList.remove("active")
      );
      carouselSlidesRef.current[currentIndex].classList.add("active");
    }, [currentIndex]);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? carouselSlidesRef.current.length - 1 : prevIndex - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselSlidesRef.current.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
    <>
      <div className="containerX">
        <div className="twoBtnCont">
          <button className="carousel-prev" onClick={prevSlide}>
            <i className="fa fa-angle-left"></i>
            <span>Previous</span>
          </button>
          <button className="carousel-next" onClick={nextSlide}>
            <span>Next</span>
            <i className="fa fa-angle-right"></i>
          </button>
        </div>
        <div className="containerImg">
          <div className="carousel-container">
            <div className="carousel-slide active" ref={(el) => (carouselSlidesRef.current[0] = el)}>
              {/* <img src="./1.jpg" /> */}
              <div className="containerHalf1">
                <div className="upperHalf">
                    <h1>Stay up to date on your industry</h1>
                </div>
                <div className="lowerHalf">
                    <p>From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.</p>
                </div>
              </div>
              <div className="containerHalf2">
                <div className="imageCont">
                  <img src={MunchInLogo} alt="" className="ComLog" />
                </div>
              </div>
            </div>
            <div className="carousel-slide" ref={(el) => (carouselSlidesRef.current[1] = el)}>
              {/* <img src="./2.jpg" /> */}
              <div className="containerHalf1">
                <div className="upperHalf">
                    <h1>Stay up to date on your knowledge</h1>
                </div>
                <div className="lowerHalf">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde hic sit atque nam ab tempore quam suscipit obcaecati nulla, cupiditate repellendus dolorum enim minima ipsum nobis .</p>
                </div>
              </div>
              <div className="containerHalf2">
                <div className="imageCont">
                  <img src={MeLogo} alt="" className="ComLog" />
                </div>
              </div>
            </div>
            <div className="carousel-slide" ref={(el) => (carouselSlidesRef.current[2] = el)}>
              {/* <img src="./3.jpg" /> */}
              <div className="containerHalf1">
              <div className="upperHalf">
                    <h1>Stay up to date on your industry</h1>
                </div>
                <div className="lowerHalf">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus pariatur, reiciendis aliquam ducimus quae quam consectetur aut totam provident magnam, veritatis dolore temporibus nobis, quibusdam aspernatur.</p>
                </div>
              </div>
              <div className="containerHalf2">
                <div className="imageCont">
                  <img src={MunchInLogo} alt="" className="ComLog" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="MobileCarousel">
        <div className="containerMob">
          <div className="sliderContMob">
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              <SwiperSlide>
                <div className="upperHalfMob">
                  <h2>Stay up to date on your industry</h2>
                </div>
                <div className="lowerHalfMob">
                  <p>From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="upperHalfMob">
                  <h2>Stay up to date on your industry</h2>
                </div>
                <div className="lowerHalfMob">
                  <p>From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="upperHalfMob">
                  <h2>Stay up to date on your industry</h2>
                </div>
                <div className="lowerHalfMob">
                  <p>From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="upperHalfMob">
                  <h2>Stay up to date on your industry</h2>
                </div>
                <div className="lowerHalfMob">
                  <p>From live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry.</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
    );
  }

export default Carjs;