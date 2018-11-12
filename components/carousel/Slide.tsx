import { Fragment } from 'react';

export interface IProps {
  customStyles?: string;
  image: string;
}

const Slide: React.SFC<IProps> = ({ customStyles = null, image }) => {
  const slideStyles = {
    backgroundImage: `url(${image})`,
  };
  return (
    <Fragment>
      <div className={customStyles || 'slide'} style={slideStyles} />
      <style jsx>{`
        .slide {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 60%;
          display: inline-block;
          width: 500px;
          height: 100%;
        }
      `}</style>
    </Fragment>
  );
};

export default Slide;
