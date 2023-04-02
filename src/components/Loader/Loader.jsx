import React from 'react';
import { Blocks } from 'react-loader-spinner';
import { Wraper } from './LoaderCSS.styled';

// import PropTypes from 'prop-types'

export const Loader = () => {
  return (
    <Wraper>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </Wraper>
  );
};

// Loader.propTypes = {

// }
