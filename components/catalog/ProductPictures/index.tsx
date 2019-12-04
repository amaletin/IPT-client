import {isEmpty} from 'lodash';
import { useState } from 'react';
import { API_HOST } from '../../../configuration/app.config';

const pictureUrl = (picture: string) => {
  return `${API_HOST}/thumbnail/_/500/500/contain/best/${picture}`;
};

const renderThumbnails = (onThumbClick, pictures) => {
  return pictures.map((picture, idx) => {
    const onClick = () => onThumbClick(idx);
    return (
      <div
        className="picture--thumb"
        key={`gallery-${idx}`}
        onClick={onClick}
      >
        <img src={pictureUrl(picture)} />
        <style jsx>{`
          .picture--thumb {
            cursor: pointer;
            width: 25%;
          }

          .picture--thumb img {
            width: 100%;
          }
        `}</style>
      </div>
    );
  });
};

interface IProps {
  pictures: string[];
}

const ProductPictures: React.FC<IProps> = ({ pictures }) => {
  if (isEmpty(pictures)) {
    return <img src="/static/images/image-placeholder.png" />;
  }

  const [bigPicture, setBigPicture] = useState(0);

  const onThumbClick = (idx) => {
    setBigPicture(idx);
  };

  return (
    <div className="pictures--container">
      <img src={pictureUrl(pictures[bigPicture])} />
      <div className="product-thumbnails">
        {renderThumbnails(onThumbClick, pictures)}
      </div>
      <style jsx>{`
        .product-thumbnails {
          display: flex;
        }

        .pictures--container img {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default ProductPictures;
