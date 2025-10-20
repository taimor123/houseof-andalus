import ShopDetailsMain from '../../../src/Components/Shop/ShopDetailsMain';
import HeaderOne from '../../../src/Components/Header/HeaderOne';
import FooterOne from '../../../src/Components/Footer/FooterOne';

export default function ShopDetailsPage({ params }) {
  const { id } = params;
  return (
    <div>
      <HeaderOne />
      <ShopDetailsMain id={id} />
      <FooterOne />
    </div>
  );
}
