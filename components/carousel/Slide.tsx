import { Fragment } from 'react';
import { breakpoints } from '../../lib/styleguide';

export interface IProps {
  image: string;
}

const Slide: React.SFC<IProps> = ({ image }) => {
  const slideStyles = {
    backgroundImage: `url(${image})`,
  };
  return (
    <Fragment>
      <div className={'slide'} style={slideStyles} />
      <style jsx>{`
        .slide {
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 60%;
          display: inline-block;
          width: 290px;
          height: 100%;
        }

        @media screen and (min-width: ${ breakpoints.lg }px) {
          .slide {
            width: 500px;
            min-width: 500px;
            height: 395px;
          }
        }

        @media screen and (min-width: ${ breakpoints.xl }px) {
          .slide {
            width: 623px;
            min-width: 623px;
            height: 492px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Slide;
