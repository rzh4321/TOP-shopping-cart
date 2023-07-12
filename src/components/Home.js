import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
    return (
        <div >
            <h1>The Shopping Website</h1>
            <div>this is the home page.</div>
            <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} stopOnHover={true} data-testid="carousel">
                <div>
                    <img src="https://www.shutterstock.com/shutterstock/photos/1812937819/display_1500/stock-photo-portrait-of-happy-mid-adult-man-sitting-on-sofa-at-home-handsome-latin-man-in-casual-relaxing-on-1812937819.jpg"  alt="sadd" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.insider.com/6340783eb3e94d0019781b4e?width=700" alt="fwd" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
            <div className="desc">
                This is a shopping website where you can shop things
 d           </div>
        </div>
    )
}