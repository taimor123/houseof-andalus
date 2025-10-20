import HeaderOne from '../src/Components/Header/HeaderOne';
import Breadcrumb from '../src/Components/BreadCrumb/Breadcrumb';
import Link from 'next/link';
import FooterOne from '../src/Components/Footer/FooterOne';
import ScrollToTop from '../src/Components/ScrollToTop';

export default function NotFound() {
  return (
    <div>
      <HeaderOne />
      <Breadcrumb title="Error Page" />
      <section className="space bg-smoke">
        <div className="container">
          <div className="row flex-row-reverse align-items-center">
            <div className="col-lg-6">
              <div className="error-img">
                <img src="/assets/img/theme-img/error.svg" alt="404" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="error-content">
                <h2 className="error-title">Oops! Page Not Found</h2>
                <h4 className="error-subtitle">
                  This page seems to have slipped through a time portal
                </h4>
                <p className="error-text">
                  We apologize for any disruption to the space-time continuum. Feel
                  free to journey back to our homepage.
                </p>
                <Link href="/" className="th-btn style3">
                  <img src="/assets/img/icon/right-arrow2.svg" alt="" />
                  Go Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterOne />
      <ScrollToTop />
    </div>
  );
}
