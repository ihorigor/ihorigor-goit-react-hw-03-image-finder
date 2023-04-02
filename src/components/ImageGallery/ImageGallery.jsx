import React from 'react';
import { ImageGalleryBox } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types'

export const ImageGallery = ({ onModalOpen, onImgData }) => {
  return (
    <ImageGalleryBox>
      <ImageGalleryItem onImgData={onImgData} onModalOpen={onModalOpen} />
    </ImageGalleryBox>
  );
};

// ImageGallery.propTypes = {

// }
