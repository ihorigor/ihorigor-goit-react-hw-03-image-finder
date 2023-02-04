import { Component } from 'react';

import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
// import { Modal } from '../Modal/Modal';
import { Searchbar } from '../Searchbar/Searchbar';

import { AppContainer } from './AppContainer.styled';

export class App extends Component {
  state = {};

  render() {
    return (
      <AppContainer>
        <Searchbar></Searchbar>
        <ImageGallery></ImageGallery>
        {/* <Modal></Modal> */}
        <Button />
        <Loader></Loader>
      </AppContainer>
    );
  }
}
