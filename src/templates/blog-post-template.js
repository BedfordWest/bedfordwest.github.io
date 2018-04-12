/* eslint-disable no-undef, react/prop-types, react/no-danger */
import { css } from 'react-emotion';

import React from 'react';
import { Box } from '../components/Layout';
import colors from '../utils/colors';

const blogPost = css`
  * {
    line-height: 1.6;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.2;
  }
  p {
    color: ${colors.dark};
  }
  li {
    margin-bottom: 1rem;
    margin-left: 1rem;
    color: ${colors.secondary};
  }
  pre {
    font-family: monospace;
    margin-left: 3rem;
    font-size: 14px;
    white-space: pre-wrap;
  }
`;

const Template = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Box bg={colors.primary}>
      <Box
        width={[1, 1, 4 / 5]}
        m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
        px={[3, 3, 0]}
        color={colors.secondary}
      >
        <h1>{post.frontmatter.title}</h1>
        <h5>Written by {post.frontmatter.author.id}</h5>
        <div
          className={blogPost}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Box>
    </Box>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author {
          id
        }
      }
    }
  }
`;

export default Template;
