import React, { Component } from 'react'
import Slider from 'react-slick'
import styles from './styles.scss'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const PHOTO_SET = [
  { src: '../assets/img/mechmania/1.jpg', alt: 'Slide 1' },
  { src: '../assets/img/mechmania/2.jpg', alt: 'Slide 2' },
  { src: '../assets/img/mechmania/3.jpg', alt: 'Slide 3' },
  { src: '../assets/img/mechmania/4.jpg', alt: 'Slide 4' },
  { src: '../assets/img/mechmania/5.jpg', alt: 'Slide 5' },
  { src: '../assets/img/mechmania/6.jpg', alt: 'Slide 6' }
];

function HiddenArrow(props) {
    const {style} = props
    return (
      <div
        style={{display: 'none'}}
      ></div>
    );
}

class Carousel extends Component {

    constructor() {
        super();
    }

    render() {

        var settings = { 
            autoplay: true,
            autoplaySpeed: 1800,
            pauseOnHover: true,
            speed: 600,
            nextArrow: <HiddenArrow/>,
            prevArrow: <HiddenArrow/>,
            responsive: [{
              breakpoint: 3000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                className: 'center',
                centerMode: true,
                infinite: true,
                centerPadding: '60px',
              }
            }, {
              breakpoint: 1050,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            }, {
              breakpoint: 440,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]
          };
        
        return(
            <div id="Photos">
                <Slider {...settings}>
                    {PHOTO_SET.map((item, index) => (
                        <div>
                        <img id="Photos_items" src={item.src} alt={item.alt}/>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

export default Carousel 





