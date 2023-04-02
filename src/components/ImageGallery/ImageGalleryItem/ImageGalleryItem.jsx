import React from 'react';
import {
  ImageGalleryItemImage,
  ImageGalleryItemLI,
} from './ImageGalleryItem.styled';
// import PropTypes from 'prop-types'

export const ImageGalleryItem = ({ onModalOpen, onImgData }) => {
  return (
    <>
      {onImgData.hits.map(data => {
        return (
          <ImageGalleryItemLI key={data.id}>
            <ImageGalleryItemImage
              src={data.webformatURL}
              alt={data.user}
              onClick={onModalOpen}
            />
          </ImageGalleryItemLI>
        );
      })}
    </>
  );
};

// ImageGalleryItem.propTypes = {

// }
