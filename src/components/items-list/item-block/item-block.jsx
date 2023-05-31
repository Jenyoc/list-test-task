import React from 'react';
import PropTypes from 'prop-types';
import { animated } from '@react-spring/web';

import './item-block.css';

export const ItemBlock = ({ backgroundColor, style }) => <animated.div className="items-block" style={{ ...style, backgroundColor }} />;

ItemBlock.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};
