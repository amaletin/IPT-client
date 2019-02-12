import { breakpoints } from '../../../lib/styleguide';

export default ({ children }) => (
  <div className="catalog--layout container">
    {children}
    <style jsx>{`
      .catalog--layout {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      @media screen and (min-width: ${ breakpoints.md }px) {
        .catalog--layout {
          flex-direction: row;
        }
      }
    `}</style>
  </div>
);
