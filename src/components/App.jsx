import React, { Component } from 'react';
import Searchbar from './Searchbar';
import PropTypes from 'prop-types';
import '../styles.css';
import * as apiImages from './apiImages';
import { ImageGallery } from './ImageGallery';
// import { ImageGalleryItem } from './ImageGalleryItem';
import { Button } from './Button';
import Modal from './Modal';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    photos: [],
    hiddenBtn: false,
    isLoading: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        isLoading: true,
      });
      apiImages
        .getImg(this.state.query, this.state.page)
        .then(data => {
          // data.data.hits --- Массив объектов с фото
          if (!data.data.hits.length) {
            console.log('Нет результатов', '😥');
            return;
          }
          console.log('Данные получены', data.data);
          this.setState(prevState => ({
            photos: [...prevState.photos, ...data.data.hits],
            hiddenBtn: this.state.page < Math.ceil(data.data.totalHits / 12),
          }));
        })
        .catch(error => console.log(error))
        .finally(() => {
          // setTimeout(() => {
          this.setState({
            isLoading: false,
          });
          // }, 100);
        });
    }
  }

  submitForm = query => {
    if (this.state.query === query) return;
    this.setState({ query, page: 1, photos: [], hiddenBtn: false });
  };

  handleClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  showModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  render() {
    return (
      <div className="App">
        <Searchbar submitForm={this.submitForm}></Searchbar>

        {this.state.isLoading && <Loader />}

        <ImageGallery showModal={this.showModal} photos={this.state.photos} />

        {this.state.hiddenBtn && <Button onClick={this.handleClick} />}

        {this.state.largeImageURL && (
          <Modal
            largeImageURL={this.state.largeImageURL}
            modalClose={this.showModal}
          ></Modal>
        )}
      </div>
    );
  }
}
