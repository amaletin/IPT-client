import { colors, gradients } from '../../../lib/styleguide';

const Search = ({ show }) => {
  return (
    <div className="search--container">
      <input className="search--input" placeholder="Поиск" />
      <style jsx>{`
        .search--container {
          background: ${ colors.headerBlue };
          background: ${ gradients.gradient1 };
          box-sizing: border-box;
          display: ${show ? 'block' : 'none'};
          padding: 10px;
          position: absolute;
          right: 0;
          top: 100%;
          width: 100%;
        }

        .search--input {
          background: transparent;
          border: 0 none;
          border-bottom: 2px solid ${ colors.white };
          color: ${ colors.white };
          font-size: 20px;
          outline: none;
          padding: 10px;
          width: 100%;
        }

        .search--input::placeholder {
          color: ${ colors.white };
        }
      `}</style>
    </div>
  );
};

export default Search;
