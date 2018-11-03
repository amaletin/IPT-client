export interface IProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }) => (
  <div className="page--header container">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
);

export default PageHeader;
