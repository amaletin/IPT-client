import { breakpoints, colors } from '../../../lib/styleguide';

export interface IProps {
  disabled?: boolean;
  onClick?: () => void;
  size?: string;
}

const Button: React.FC<IProps> = ({ children, disabled, onClick, size }) => (
  <div
    className={`button ${size}`}
    role="button"
    onClick={disabled ? null : onClick}
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
        opacity: ${ disabled ? 0.5 : 1 }
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
