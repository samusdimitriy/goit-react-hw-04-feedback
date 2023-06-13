import React from 'react';
import PropTypes from 'prop-types';
import './CustomNotification.css';

const CustomNotification = ({ message }) => {
  return <p className="notification_text">{message}</p>;
};

CustomNotification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default CustomNotification;
