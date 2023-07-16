import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";


export default function Home() {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} stopOnHover={true} showThumbs={false}>
                <div onClick={() => navigate('/shop')}>
                    <img src="https://shop.msg.com/cdn/shop/files/NYK23_SummerMerchSale_ShopMSGDesktop.jpg?v=1687373890" alt="summer merch"/>
                </div>
                <div onClick={() => navigate('/shop')}>
                    <img src="https://shop.msg.com/cdn/shop/files/main_feature_banner_1650x583_10a43099-f930-4d70-a15d-f7fc6abb604b.jpg?v=1631026783" alt="official store" />
                </div>
            </Carousel>
            <h1 class='horizontal-lines'>SHOP BY CATEGORY</h1>
            <div className='category-cards'>
                <div className='category-card' style={{"backgroundImage": "url(https://shop.msg.com/cdn/shop/files/381x381_MENS_1.jpg?v=1635260884"}} onClick={() => navigate('/shop')}></div>
                <div className='category-card' style={{"backgroundImage": "url(https://shop.msg.com/cdn/shop/files/381x381_JERSEYS_97d8e57d-49cc-4df5-9053-8bf0f46d9607.jpg?v=1631028339"}} onClick={() => navigate('/shop')}></div>
                <div className='category-card' style={{"backgroundImage": "url(https://shop.msg.com/cdn/shop/files/381x381_HEADWEAR_f7b14163-87ed-49fc-8ef2-76657b612fa4.jpg?v=1631028369"}} onClick={() => navigate('/shop')}></div>
            </div>
            <div class='brunson'>
                
            </div>
            <h1 class='horizontal-lines'>TOP SELLING KNICKS GEAR</h1>

            <div className='category-cards'>
                <div className='category-card' style={{"backgroundImage": "url(https://shop.msg.com/cdn/shop/files/381x381_MENS_1.jpg?v=1635260884"}}></div>
                <div className='category-card' style={{"backgroundImage": "url(https://shop.msg.com/cdn/shop/files/381x381_JERSEYS_97d8e57d-49cc-4df5-9053-8bf0f46d9607.jpg?v=1631028339"}} onClick={() => navigate('/shop')}></div>
                <div className='category-card' style={{"backgroundImage": "url(https://shop.msg.com/cdn/shop/files/381x381_HEADWEAR_f7b14163-87ed-49fc-8ef2-76657b612fa4.jpg?v=1631028369"}} onClick={() => navigate('/shop')}></div>
            </div>
        </div>
    )
}