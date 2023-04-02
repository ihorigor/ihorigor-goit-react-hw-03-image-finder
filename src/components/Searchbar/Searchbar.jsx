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

export const Searchbar = ({ onSubmit, value, onChange }) => {
  return (
    <SearchBar>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormButton type="submit">
          <ImSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          value={value}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </SearchForm>
    </SearchBar>
  );
};

// Searchbar.propTypes = {

// }
