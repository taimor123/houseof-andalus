import HeaderOne from '../src/Components/Header/HeaderOne';
import BannerOne from '../src/Components/Banner/BannerOne';
import Booking from '../src/Components/Booking/Booking';
import CategoryOne from '../src/Components/Category/CategoryOne';
import DestinationOne from '../src/Components/Destination/DestinationOne';
import AboutOne from '../src/Components/About/AboutOne';
import TourTwo from '../src/Components/Tour/TourTwo';
import GalleryOne from '../src/Components/Gallery/GalleryOne';
import CounterOne from '../src/Components/Counter/CounterOne';
import TourGuide from '../src/Components/Guide/TourGuide';
import TestimonialOne from '../src/Components/Testimonials/TestimonialOne';
import BrandOne from '../src/Components/Brand/BrandOne';
import BlogOne from '../src/Components/Blog/BlogOne';
import FooterOne from '../src/Components/Footer/FooterOne';
import ScrollToTop from '../src/Components/ScrollToTop';
import TourValues from '../src/Components/Tour/TourValues';

export default function HomePage() {
  return (
    <div style={{backgroundColor: "#FFF9F3"}}>
      <HeaderOne />
      <BannerOne />
      <Booking />
      <AboutOne />
      <DestinationOne />
      <CategoryOne />
     
    
      <TourValues />
      <GalleryOne />
      <CounterOne />
      {/* <TourGuide /> */}
      <TestimonialOne />
      {/* <BrandOne className="space-bottom" /> */}
      {/* <BlogOne /> */}
      <FooterOne />
      <ScrollToTop />
    </div>
  );
}
