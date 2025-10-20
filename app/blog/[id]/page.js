import BlogDetailsMain from '../../../src/Components/Blog/BlogDetailsMain';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterOne from '../../../src/Components/Footer/FooterOne';

export default function BlogDetailsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <HeaderOne />
      <BlogDetailsMain id={id} />
      <FooterOne />
    </div>
  );
}
