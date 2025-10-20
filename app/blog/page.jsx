import HeaderOne from '../../src/Components/Header/HeaderOne';
import Breadcrumb from '../../src/Components/BreadCrumb/Breadcrumb';
import BlogInner from '../../src/Components/Blog/BlogInner';
import FooterOne from '../../src/Components/Footer/FooterOne';
import ScrollToTop from '../../src/Components/ScrollToTop';

export const metadata = {
  title: 'Blog Lists View | Tourm',
  description: 'Latest travel and tour articles',
};

export default function BlogPage() {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title="Blog Lists View" />
      <BlogInner />
      <FooterOne />
      <ScrollToTop />
    </>
  );
}
