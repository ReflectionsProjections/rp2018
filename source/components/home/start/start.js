import React, { Component } from 'react'
import { Jumbotron, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import styles from './styles.scss'
import Countdown from '../countdown/countdown'
import Scrolldown from '../scrolldown/scrolldown'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PHOTO_SET = [
  { src: '../../../assets/img/history/career0.jpg', alt: 'Slide 1' },
  { src: '../../../assets/img/history/career2.jpg', alt: 'Slide 2' },
  { src: '../../../assets/img/history/speaker0.jpg', alt: 'Slide 3' },
  { src: '../../../assets/img/history/mechmania.jpg', alt: 'Slide 4' },
  { src: '../../../assets/img/history/speaker1.jpg', alt: 'Slide 5' },
  { src: '../../../assets/img/history/career3.jpg', alt: 'Slide 6' },
  { src: '../../../assets/img/history/career4.jpg', alt: 'Slide 7' },
  { src: '../../../assets/img/history/career5.jpg', alt: 'Slide 8' }
];

const SUBTITLES = [
    "This is a long Subtitle 1, made long to see effect...........long long long text.. does this wrap? Keep wrapping......",
    "This is a long Subtitle 2, made long to see effect...........long long long text.. does this wrap? Keep wrapping......",
    "Speaker Subtitle 3, made long to see effect...........long long long text.. does this wrap? Keep wrapping.............",
    "Mechmania,     Subtitle 4, made long to see effect...........long long long text.. does this wrap? Keep wrapping......",
    "Speaker        Subtitle 5, made long to see effect...........long long long text.. does this wrap? Keep wrapping......",
    "This is a long Subtitle 6, made long to see effect...........long long long text.. does this wrap? Keep wrapping......",
    "This is a long Subtitle 7, made long to see effect...........long long long text.. does this wrap? Keep wrapping......",
    "This is a long Subtitle 8, made long to see effect...........long long long text.. does this wrap? Keep wrapping......"
]

const popoverBottom = (
    <Popover id="popover-positioned-bottom" style={{backgroundColor: "rgba(43, 92, 93, 0.5)", border: "2px solid #cadea5", borderRadius: 0}}>
        If you are willing to sponsor!
    </Popover>
);

class Start extends Component {

    constructor() {
        super();
    }

    render() {
      var settings = {
          autoplay: true,
          autoplaySpeed: 3500,
          fade: true,
          speed: 2000,
          arrows: false,
          pauseOnHover: false
        };

        return(
            <div className="Start">
                <Jumbotron>
                    <div id="carousel_container">
                        <Slider  {...settings}>
                                {PHOTO_SET.map((item, index) => (
                                    <div id="images_container">
                                        <h2 className="image-caption">{SUBTITLES[index]}</h2>
                                        <img id="carousel_image" src={item.src} alt={item.alt}/>
                                    </div>
                                ))}
                        </Slider>
                    </div>
                    <div id="carousel-overlay">
                        <img className="header" src="../assets/svg/home_header.svg" />
                        <div className="caps">September 17th - 22nd, 2018</div>
                        <Countdown className="counter"/>
                        {/*<div style={{margin: "15px", paddingBottom: "10px", fontSize: "18px"}}>DAYS&nbsp; LEFT</div>*/}
                        <div className="intro"> Interested in sponsoring or attending? </div>
                        <a className="btn" href="mailto:conference-chair@acm.illinois.edu">
                            <button className="contact">CONTACT US
                            </button>
                        </a>
                    </div>
                    <Scrolldown/>
                </Jumbotron>
            </div>
        )
    }
}

export default Start
