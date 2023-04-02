import { Component } from 'react';
import { ModalCSS, Overlay } from './Modal.styled';
// import PropTypes from 'prop-types'

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyClose);
    // console.log('componentDidMount');
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyClose);
    // console.log('componentWillUnmount');
  }

  handleKeyClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClose}>
        <ModalCSS>
          <img src="" alt="" />
        </ModalCSS>
      </Overlay>
    );
  }
}

// Modal.propTypes = {

// }
