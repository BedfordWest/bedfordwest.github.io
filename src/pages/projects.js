/* eslint-disable no-undef, react/prop-types */
import React from 'react';
import Project from '../components/Project/';
import { Box, Flex } from '../components/Layout/';
import colors from '../utils/colors';

export default ({ data }) => {
  const portfolio2 = data.allProjectsJson.edges[0].node.projects[0];
  const darrandyford2 = data.allProjectsJson.edges[0].node.projects[1];
  const nurtured2 = data.allProjectsJson.edges[0].node.projects[2];
  const { portfolio, darrandyford, nurturedExpectations } = data;
  return (
    <Box
      width={[1, 1, 9 / 10]}
      m="4rem auto"
      color={colors.secondary}
      align="center"
    >
      <Flex wrap={['wrap', 'wrap', 'nowrap']} justify="center">
        <Project
          title={portfolio2.title}
          image={portfolio.sizes}
          description={portfolio2.description}
        />
        <Project
          title={darrandyford2.title}
          image={darrandyford.sizes}
          description={darrandyford2.description}
        />
        <Project
          title={nurtured2.title}
          image={nurturedExpectations.sizes}
          description={nurtured2.description}
        />
      </Flex>
    </Box>
  );
};

export const pageQuery = graphql`
  query projectsQuery {
    allProjectsJson {
      edges {
        node {
          projects {
            id
            title
            image
            description
          }
        }
      }
    }
    portfolio: imageSharp(id: { regex: "/portfolio/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
    darrandyford: imageSharp(id: { regex: "/darrandyford/" }) {
      sizes(maxWidth: 4000) {
        ...GatsbyImageSharpSizes
      }
    }
    nurturedExpectations: imageSharp(id: { regex: "/nurtured/" }) {
      sizes(maxWidth: 1000) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
