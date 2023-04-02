import { ButtonCSS } from './Button.styled';
// import PropTypes from 'prop-types'

export const Button = ({ onClick }) => {
  return (
    <ButtonCSS type="button" onClick={onClick}>
      Load more
    </ButtonCSS>
  );
};

// Button.propTypes = {

// }
