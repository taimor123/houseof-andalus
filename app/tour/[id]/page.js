import TourDetailsMain from '../../../src/Components/Tour/TourDetailsMain';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterOne from '../../../src/Components/Footer/FooterOne';

export default function TourDetailsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <HeaderOne />
      <TourDetailsMain id={id} />
      <FooterOne />
    </div>
  );
}
