import axios from 'axios';
import { Component } from 'react';

import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import { Searchbar } from '../Searchbar/Searchbar';

import { AppContainer } from './AppContainer.styled';

export class App extends Component {
  state = {
    isModalOpen: false,
    img: null,
    isLoading: true,
    page: 1,
    query: '',
    isError: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios.get(
        'https://pixabay.com/api/?q=cat&page=1&key=33393332-d0a7e56fcb76aa01ea11cc253&image_type=photo&orientation=horizontal&per_page=12'
      );
      this.setState({ img: data });
    } catch (error) {
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      console.log('first');
    }
  }

  fethData;

  toggle = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handlePage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  handleChangeForm = event => {
    console.log(event.target.value);
    this.setState({ query: event.target.value });
  };

  handleSubmitForm = event => {
    console.log();
    event.preventDefault();
    this.setState({
      page: 1,
      query: '',
      img: null,
    });
  };

  render() {
    const { isModalOpen, isLoading, img, query } = this.state;
    return (
      <AppContainer>
        <Searchbar
          onSubmit={this.handleSubmitForm}
          value={query}
          onChange={this.handleChangeForm}
        />

        {img && <ImageGallery onImgData={img} onModalOpen={this.toggle} />}
        {isModalOpen && <Modal onClose={this.toggle} />}

        {isLoading && <Loader />}

        {!isLoading && <Button onClick={this.handlePage} />}
      </AppContainer>
    );
  }
}
