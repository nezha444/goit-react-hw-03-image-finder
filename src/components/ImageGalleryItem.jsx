import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const ImageGalleryItem = ({ photos, showModal }) => {
  return photos.map(el => {
    return (
      <li
        className="ImageGalleryItem"
        onClick={() => showModal(el.largeImageURL)}
      >
        <img
          className="ImageGalleryItem-image"
          src={el.webformatURL}
          alt="img"
        />
      </li>
    );
  });
};
