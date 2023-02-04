import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = { onSubmit: PropTypes.func.isRequired };
  state = { name: '', number: '' };

  handleChange = event => {
    // console.log(event);
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { number, name } = event.target.elements;

    this.props.onSubmit(name.value, number.value);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="w-25 m-1" onSubmit={this.handleSubmit}>
        <div className="mb-1">
          <label htmlFor="text" className="form-label">
            <p>Name</p>

            <input
              value={name}
              className="form-control"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="mb-1">
          <label htmlFor="tel" className="form-label">
            <p>Number</p>

            <input
              value={number}
              className="form-control"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Add contacts
        </button>
      </form>
    );
  }
}
