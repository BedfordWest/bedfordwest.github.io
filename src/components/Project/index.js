/* eslint-disable */
import { css } from 'react-emotion';

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Box } from '../Layout/';
import colors from '../../utils/colors';

const projectBox = css`
  border: 1px solid;
  & p {
    font-size: 20px;
  }
`;

const Project = props => (
  <Box
    className={projectBox}
    width={[1, 2 / 3, 1 / 3]}
    m={['1.5rem 1rem', '1.5rem 1rem', '1.5rem 1rem']}
    px={[3, 3, 3]}
    pb={[3, 3, 3]}
    color={colors.secondary}
    align="center"
  >
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    <Img sizes={props.image} />
  </Box>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Project;
