import React from 'react';
import { ImageGalleryBox } from './ImageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
// import PropTypes from 'prop-types'

export const ImageGallery = props => {
  return (
    <ImageGalleryBox>
      <ImageGalleryItem></ImageGalleryItem>
    </ImageGalleryBox>
  );
};

// ImageGallery.propTypes = {

// }
