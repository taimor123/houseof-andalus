import HeaderOne from '../../src/Components/Header/HeaderOne';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import GalleryInner from '../../src/Components/Gallery/GalleryInner';
import FooterOne from '../../src/Components/Footer/FooterOne';
import ScrollToTop from '../../src/Components/ScrollToTop';

export const metadata = {
  title: 'Gallery | Tourm',
  description: 'Explore travel gallery and memorable moments',
};

export default function GalleryPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Gallery" />
      <GalleryInner />
      <FooterOne />
      <ScrollToTop />
    </>
  );
}
