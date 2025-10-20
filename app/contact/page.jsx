import HeaderOne from '../../src/Components/Header/HeaderOne';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import GetInTouch from '../../src/Components/Contact/GetInTouch';
import BookATour from '../../src/Components/Contact/BookATour';
import ContactMap from '../../src/Components/Contact/ContactMap';
import FooterOne from '../../src/Components/Footer/FooterOne';
import ScrollToTop from '../../src/Components/ScrollToTop';

export const metadata = {
  title: 'Contact Us | Tourm',
  description: 'Get in touch with the Tourm team',
};

export default function ContactPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Contact Us" />
      <GetInTouch />
      <BookATour />
      <ContactMap />
      <FooterOne />
      <ScrollToTop />
    </>
  );
}
