import DestinationDetailsMain from '../../../src/Components/Destination/DestinationDetailsMain';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterOne from '../../../src/Components/Footer/FooterOne';

export default function DestinationDetailsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <HeaderOne />
      <DestinationDetailsMain id={id} />
      <FooterOne />
    </div>
  );
}
