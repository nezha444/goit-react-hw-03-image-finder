import React, { Component } from 'react';

export default class Modal extends Component {
  handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
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
