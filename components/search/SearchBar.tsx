import { NextFC } from 'next';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { resetSearch, searchProducts, setSearchString } from '../../actions/searchActions';
import { IAppState } from '../../lib/models';
import { colors, gradients } from '../../lib/styleguide';

interface IProps {
  searchString: string;
  onResetSearch: () => void;
  onSearchProducts: (str: string) => void;
  onSetSearchString: (str: string) => void;
}

const SearchBar: NextFC<IProps> = ({ onResetSearch, onSearchProducts, onSetSearchString, searchString }) => {
  const handleChange = (e) => onSetSearchString(e.target.value);
  useEffect(() => {
    if (searchString.length > 0) {
      onSearchProducts(searchString);
    } else {
      onResetSearch();
    }
  }, [searchString]);
  return (
    <div className="search-bar">
      <input
        className="search-bar--input"
        placeholder="Поиск"
        value={searchString}
        onChange={handleChange}
      />
      <style jsx>{`
        .search-bar {
          background: ${ colors.headerBlue };
          background: ${ gradients.gradient1 };
          box-sizing: border-box;
          padding: 15px;
          margin-bottom: 10px;
        }

        .search-bar--input {
          background: transparent;
          border: 0 none;
          border-bottom: 2px solid ${ colors.white };
          box-sizing: border-box;
          color: ${ colors.white };
          font-size: 30px;
          outline: none;
          padding: 10px;
          width: 100%;
        }

        .search-bar--input::placeholder {
          color: ${ colors.white };
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  searchString: state.search.searchString,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onResetSearch: () => dispatch(resetSearch()),
  // @ts-ignore
  onSearchProducts: (str: string) => dispatch(searchProducts(str)),
  onSetSearchString: (str: string) => dispatch(setSearchString(str)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
