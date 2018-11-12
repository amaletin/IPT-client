import { colors, fonts } from '../../../lib/styleguide';

export interface IProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }) => (
  <div className="page--header container">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    <style jsx>{`
      .page--header {
        font-family: ${ fonts.fontCirce };
        text-transform: uppercase;
      }

      .page--header h1 {
        color: ${ colors.pink };
        font-weight: bold;
      }
    `}</style>
  </div>
);

export default PageHeader;
