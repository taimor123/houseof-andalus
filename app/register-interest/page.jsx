import HeaderOne from '../../src/Components/Header/HeaderOne';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import RegisterInterestSection from '../../src/Components/Interest/RegisterInterestSection';
import FooterOne from '../../src/Components/Footer/FooterOne';
import ScrollToTop from '../../src/Components/ScrollToTop';

export const metadata = {
  title: 'Register Interest | House of Andalus',
  description: 'Register your interest in retreats at House of Andalus and we will contact you shortly.',
};

export default function RegisterInterestPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Register Interest" />
      {/* Separation between breadcrumb and video/form section */}
      <div className="container">
        <div className="border-top" style={{ opacity: 0.25 }} />
      </div>
      <div style={{ height: '30px' }} aria-hidden="true" />
      <RegisterInterestSection />
      <FooterOne />
      <ScrollToTop />
    </>
  );
}
