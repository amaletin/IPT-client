import './carousel.less';

export interface IProps {
  customStyles?: string;
  image: string;
}

const Slide: React.SFC<IProps> = ({ customStyles = null, image }) => {
  const slideStyles = {
    backgroundImage: `url(${image})`,
  };
  return <div className={customStyles || 'slide'} style={slideStyles} />;
};

export default Slide;
