import Link from 'next/link';
import { breakpoints, colors } from '../../../lib/styleguide';

export interface IProps {
  to: string;
}

const Button: React.FC<IProps> = ({ to, children }) => (
  <> 
    <Link href={to}>
      <div
        className="button"
        role="button"
        tabIndex={0}
        >
        {children}
      </div>
    </Link>
    <style jsx>{`
      .button {
        background: ${ colors.pink };
        border-radius: 10px;
        box-sizing: border-box;
        color: ${ colors.white };
        cursor: pointer;
        display: inline-block;
        font-size: 20px;
        line-height: 1;
        padding: 14px 30px;
        text-transform: uppercase;
        outline: none;
        margin-bottom: 20px;
      }

      .button:hover, .button:focus {
        background: ${ colors.pinkHover };
      }

      @media screen and (min-width: ${ breakpoints.lg }px) {
        .button {
          font-size: 22px;
          padding: 18px 48px;
        }
      }
    `}</style>
  </>
);

export default Button;
