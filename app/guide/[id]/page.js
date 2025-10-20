import TourGuiderDetailsMain from '../../../src/Components/Guide/TourGuiderDetailsMain';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterOne from '../../../src/Components/Footer/FooterOne';

export default function GuideDetailsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <HeaderOne />
      <TourGuiderDetailsMain id={id} />
      <FooterOne />
    </div>
  );
}
