import Page from '../components/common/Page';
import Promo from '../components/main/Promo';
import Catalog from '../components/main/Catalog';
import Order from '../components/main/Order';
import Service from '../components/main/Service';

const Index = () => (
  <Page>
    <Promo />
    <Catalog />
    <Order />
    <Service />
  </Page>
);

export default Index;
