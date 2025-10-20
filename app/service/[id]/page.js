import ServiceDetailsMain from '../../../src/Components/Services/ServiceDetailsMain';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterOne from '../../../src/Components/Footer/FooterOne';

export default function ServiceDetailsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <HeaderOne />
      <ServiceDetailsMain id={id} />
      <FooterOne />
    </div>
  );
}
