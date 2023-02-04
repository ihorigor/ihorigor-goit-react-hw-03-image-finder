import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ visibleContacts, onDelete }) => {
  return (
    <>
      <ul>
        {visibleContacts.map(({ name, id, number }) => {
          return (
            <li key={id} className="d-flex p-1 justify-content-around">
              <p>{name}: </p>
              <p>{number}</p>
              <button
                className="btn btn-success"
                type="button"
                onClick={() => onDelete(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
