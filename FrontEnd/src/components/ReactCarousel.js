import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ReactCarousel = ()=>{

    return (
        <Carousel  className="carousel-control">
                <div className="slide-1 slide-1__text">
                    {/* <img src="https://www.history.com/.image/t_share/MTU3ODc5MDg3NTA5MDg3NTYx/taj-mahal-2.jpg" /> */}
                    {/* <div className=""> */}
                    <h3 className="h3__text" >Welcome to Ride Account</h3>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        {/* </div> */}
                </div>
                <div>
                    <img src="https://www.history.com/.image/t_share/MTU3ODc5MDg3NTA5MDg3NTYx/taj-mahal-2.jpg" />
                    <h3>Welcome to Ride Account</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </Carousel>
    )


}

export default ReactCarousel;