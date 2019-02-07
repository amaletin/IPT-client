import Page from '../components/common/Page';
import Catalog from '../components/main/Catalog';
import Order from '../components/main/Order';
import Promo from '../components/main/Promo';
import Service from '../components/main/Service';

const Index = () => (
  <Page header={false}>
    <Promo />
    <Catalog />
    <Order />
    <Service />
  </Page>
);

export default Index;
