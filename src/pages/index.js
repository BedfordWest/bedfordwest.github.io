/* eslint-disable no-undef, react/prop-types */
import { css } from 'react-emotion';

import React from 'react';
import Img from 'gatsby-image';
import { Box, Flex } from '../components/Layout';
import colors from '../utils/colors';

export default ({ data }) => {
  const myData = data.allContentJson.edges[0].node.index;
  const { imageSharp } = data;
  const imgStyle = css`
    max-width: 100%;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
    vertical-align: middle;
  `;

  const title = css`
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid;
      margin: 0;
      padding: 0;
    }
  `;

  const bedford = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    margin-right: auto;
    vertical-align: middle;
  `;

  const details = css`
    & h1 {
      color: ${colors.primary};
    }
    & p {
      color: ${colors.light};
    }
  `;

  return (
    <div>
      <Box bg={colors.primary}>
        <Box
          width={[1, 1, 2 / 3]}
          m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
          px={[3, 3, 0]}
          color={colors.secondary}
          align="center"
        >
          <Flex justify="flex-start">
            <Box className={bedford} m={[2]} width={[1, 1 / 3, 1 / 3]}>
              <Img className={imgStyle} alt="Me" sizes={imageSharp.sizes} />
            </Box>
            <Box className={title} m={[2]} width={[1, 2 / 3, 2 / 3]}>
              <h1>{myData.title}</h1>
              <hr />
              <h3>{myData.subtitle}</h3>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box bg={colors.dark} py={[3, 3, 4]}>
        <Box
          className={details}
          width={[1, 1, 4 / 5]}
          height={[1, 1, 1]}
          m="0 auto"
          px={[3, 3, 0]}
          color={colors.primary}
        >
          <h1>
            I test things professionally, get excited by game jams, and
            experiment with dev projects.
          </h1>
          <p>
            Check out my resume, blog <i>(thoughts)</i>, and project portfolio
            while you&apos;re here!
          </p>
        </Box>
      </Box>
    </div>
  );
};

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
    imageSharp(id: { regex: "/me2/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
