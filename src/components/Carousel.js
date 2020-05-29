import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card"
import './carousel.css'

class Carousel extends Component {
    state = {
        images: ["picture1.png", "picture2.jpg", "picture3.jpeg", "picture4.jpeg", "picture5.jpg", "picture6.jpg"]
    }

    render() {
        const {images} = this.state
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            dotsClass : 'carousel-dots',
            arrows : true,
            adaptiveHeight : true,
            centerMode : true,
            swipeToSlide : true
        }
        return (
            <div>
                <Slider {...settings}>
                    {
                        images.map(image => {
                            return (
                                <div><Card 
                                    key={image}
                                    img={image} /></div>
                            )
                        })
                    }
                </Slider>
            </div>
        )
    }
} export default Carousel