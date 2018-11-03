import Link from 'next/link';
import './button.less';

export interface IProps {
  to: string;
}

const Button: React.SFC<IProps> = ({ to, children }) => (
  <Link href={to}>
    <div
      className="button"
      role="button"
      tabIndex={0}
    >
      {children}
    </div>
  </Link>
);

export default Button;
