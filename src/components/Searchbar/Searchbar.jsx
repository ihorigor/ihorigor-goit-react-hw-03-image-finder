import React from 'react';
import { ImSearch } from 'react-icons/im';

import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './SearchBar.styled';
// import PropTypes from 'prop-types'

export const Searchbar = props => {
  return (
    <SearchBar>
      <SearchForm>
        <SearchFormButton type="submit">
          <ImSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBar>
  );
};

// Searchbar.propTypes = {

// }
