import React,{useEffect,useState,useRef} from 'react';
// import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Carousel() {
    const containerRef = useRef(null);
    const news = [
      "  Speedway Cargo does not require OTP or credentials for address confirmation for your delivery Our Customer Support team is reachable only from our website or app.",
      "    Login with your phone number and raise your support request with us",
      "  SERVICE UPDATES:",
      "  Please do not transfer money to payment links that are not shared from Speedway Cargo's official accounts"
    ];

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const totalNewsWidth = containerRef.current.scrollWidth;
      const newsItems = containerRef.current.querySelectorAll('.news-item');

      if (totalNewsWidth > containerWidth) {
        let newsItemsWidth = 0;
        newsItems.forEach((item) => {
          newsItemsWidth += item.offsetWidth;
        });
        const marginRight = parseInt(window.getComputedStyle(newsItems[0]).marginRight);
        const extraSpace = totalNewsWidth - newsItemsWidth - marginRight;
        containerRef.current.style.width = `${containerWidth + extraSpace}px`;
      }
    }
  }, [news]);
    return (
        <div className="flash-news-container" >
        <div className="flash-news">
          {/* Mapping through the news items and displaying them */}
          {news.map((item, index) => (
             <div key={index} className="news-item">
             <span className={`dot ${index === 2 ? 'bold-news' : 'red-dot'}`}>&#9632;</span> {item} 
           </div>
          ))}
        </div>
      </div>
      );
}

export default Carousel;
