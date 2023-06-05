import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    modalClose: PropTypes.func.isRequired,
  };
  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      this.props.modalClose('');
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.modalClose('');
    }
  };

  render() {
    return (
      <div
        onClick={this.handleOverlayClick}
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba( 0, 0, 0, 0.7 )',
        }}
      >
        <img src={this.props.largeImageURL} alt="img" width="50%" />
      </div>
    );
  }
}
