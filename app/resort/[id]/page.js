import ResortDetailsMain from '../../../src/Components/Resort/ResortDetailsMain';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterOne from '../../../src/Components/Footer/FooterOne';

export default function ResortDetailsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <HeaderOne />
      <ResortDetailsMain id={id} />
      <FooterOne />
    </div>
  );
}
