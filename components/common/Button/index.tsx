import { breakpoints, colors } from '../../../lib/styleguide';

export interface IProps {
  onClick?: () => void;
  size?: string;
}

const Button: React.FC<IProps> = ({ children, onClick, size }) => (
  <div
    className={`button ${size}`}
    role="button"
    onClick={onClick}
    tabIndex={0}
  >
    {children}
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

      .button.sm {
        font-size: 16px;
        padding: 12px 30px;
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
  </div>
);

export default Button;
