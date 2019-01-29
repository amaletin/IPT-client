import React from 'react';
import { connect } from 'react-redux';
import { IProduct } from '../../lib/models';
import Page from '../../components/common/Page';
import { loadPrinters } from '../../actions/printerActions';
import { IAppState } from '../../lib/models';
import ProductFilters from '../../components/catalog/ProductFilters';
import ProductList from '../../components/catalog/ProductList';


interface IProps {
  printers: IProduct[];
}

const Printers: React.SFC<IProps> = ({ printers }) => {
  return (
    <Page title="3D Принтеры">
      <div className="catalog--layout container">
        <ProductFilters />
        <ProductList className="catalog--container--right" products={printers} />
      </div>
      <style jsx>{`
        .catalog--layout {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </Page>
  );
}
Printers.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(loadPrinters());
  const printers = reduxStore.getState().printers.filtered;
  return { printers }
}

const mapStateToProps = (state: IAppState) => ({ printers: state.printers.filtered });
export default connect(mapStateToProps)(Printers);
