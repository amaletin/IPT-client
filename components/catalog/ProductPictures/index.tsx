import {isEmpty} from 'lodash';
import { API_HOST } from '../../../configuration/app.config';

const pictureUrl = (picture: string) => {
  return `${API_HOST}/thumbnail/_/500/500/contain/best/${picture}`;
};

const renderThumbnails = (pictures) => pictures.map((picture, idx) => (
  <div className="picture--thumb" key={`gallery-${idx}`}>
    <img src={pictureUrl(picture)} />
    <style jsx>{`
      .picture--thumb {
        width: 25%;
      }

      .picture--thumb img {
        width: 100%;
      }
    `}</style>
  </div>
));

interface IProps {
  pictures: string[];
}

const ProductPictures: React.FC<IProps> = ({ pictures }) => {
  if (isEmpty(pictures)) {
    return <img src="/static/images/image-placeholder.png" />;
  }

  return (
    <div className="pictures--container">
      <img src={pictureUrl(pictures[0])} />
      {renderThumbnails(pictures.slice(1))}
      <style jsx>{`
        .pictures--container img {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default ProductPictures;
