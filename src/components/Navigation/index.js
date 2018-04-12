import React, { Component } from 'react';
import Link from 'gatsby-link';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import colors from '../../utils/colors';
import feather from '../../utils/feather';
import MobileNav from './mobile';
import media from '../../utils/media';
import { Box } from '../../components/Layout';
import { ButtonSecondary } from '../Buttons';

const basicNav = css`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  color: ${colors.primary};
  background-color: ${colors.secondary};
  margin: 0;
  width: 100%;
  list-style-type: none;
  z-index: 9998;
  height: 3.5rem;
  font-family: 'Nunito', sans-serif;
  font-size: 18px;

  & ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    width: 100%;
  }
`;

/*  -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 1); */

const fullNav = css`
  ${basicNav};
  display: none;
  & li {
    margin-left: 0.75rem;
    margin-top: auto;
    margin-bottom: auto;
  }
  & li:last-child {
    margin-right: 0.75rem;
  }

  & li img {
    display: inline-block;
    vertical-align: middle;
  }
  & ul div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: auto;
    margin-left: 0.75rem;

    & li {
      margin-left: 0;
      margin-right: 1.25rem;
    }
  }

  ${media.mid`
    display: flex;
  `};
`;

// Styles for the mobile View of the navigation
const mobileNav = css`
  ${basicNav};
  & li {
    margin-right: 0.5rem;
  }

  & li:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: auto;
    margin-left: 0;
    font-weight: 600;
    cursor: pointer;
  }

  & li:last-child {
    margin-right: 0;
  }

  & li img {
    display: block;
    margin: auto;
  }
  ${media.mid`
    display: none;
  `};
`;

// Styles for the overlay which pops up, when the menu is clicked
const mobileStyle = css`
  position: fixed;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  display: block;
  padding: 1rem;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  & ul {
    list-style-type: none;
    padding: 0;
    margin: 3rem 0 0 0;
    height: 100%;
    text-align: center;
    font-size: 2rem;
    & div {
      text-align: center;
    }
  }

  & ul li {
    margin-top: 2rem;
  }
  & div {
    font-weight: 600;
    text-align: left;
  }
`;

const svgStyles = css`
  opacity: 0.5;
  transition: opacity 0.15s ease-in;
  transition: color 0.15s ease-in;

  &:hover {
    text-decoration: none;
    box-shadow: none;
    opacity: 1;
    transition: opacity 0.15s ease-in;
  }
`;

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileActive: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    if (this.state.mobileActive) {
      this.setState({ mobileActive: false });
    } else {
      this.setState({ mobileActive: true });
    }
  }

  render() {
    return (
      <nav>
        <Box width="100%" px={[0, 0, 1]} className={fullNav}>
          <ul>
            <div className="nav_links">
              <li>
                <Link to="/">
                  <ButtonSecondary>Me</ButtonSecondary>
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <ButtonSecondary>Resume</ButtonSecondary>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <ButtonSecondary>Thoughts</ButtonSecondary>
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <ButtonSecondary>Projects</ButtonSecondary>
                </Link>
              </li>
            </div>
            <li>
              <a
                title="Link to my Github page"
                href={this.props.github}
                target="_blank"
                rel="noopener"
              >
                {feather('github', ['30', '30'], svgStyles)}
              </a>
            </li>
            <li>
              <a
                title="Link to my Twitter account"
                href={this.props.twitter}
                target="_blank"
                rel="noopener"
              >
                {feather('twitter', ['30', '30'], svgStyles)}
              </a>
            </li>
            <li>
              <a
                title="Link to my LinkedIn account"
                href={this.props.linkedin}
                target="_blank"
                rel="noopener"
              >
                {feather('linkedin', ['30', '30'], svgStyles)}
              </a>
            </li>
            <li>
              <a title="My E-Mail address" href={`mailto:${this.props.email}`}>
                {feather('mail', ['30', '30'], svgStyles)}
              </a>
            </li>
          </ul>
        </Box>
        <Box width="100%" px={[3, 3, 4]} className={mobileNav}>
          <ul>
            <li>
              <div
                onClick={this.toggleNav}
                role="button"
                tabIndex="0"
                onKeyPress={this.toggleNav}
              >
                {feather('menu', ['30', '30'], svgStyles)}
              </div>
            </li>
            <li>
              <a
                title="Link to my Github page"
                href={this.props.github}
                target="_blank"
                rel="noopener"
              >
                {feather('github', ['30', '30'], svgStyles)}
              </a>
            </li>
            <li>
              <a
                title="Link to my Twitter account"
                href={this.props.twitter}
                target="_blank"
                rel="noopener"
              >
                {feather('twitter', ['30', '30'], svgStyles)}
              </a>
            </li>
            <li>
              <a
                title="Link to my LinkedIn account"
                href={this.props.linkedin}
                target="_blank"
                rel="noopener"
              >
                {feather('linkedin', ['30', '30'], svgStyles)}
              </a>
            </li>
            <li>
              <a title="My E-Mail address" href={`mailto:${this.props.email}`}>
                {feather('mail', ['30', '30'], svgStyles)}
              </a>
            </li>
          </ul>
        </Box>
        {this.state.mobileActive && (
          <MobileNav toggleNav={this.toggleNav} mobileStyle={mobileStyle}>
            <ul>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  tabIndex="0"
                  onKeyPress={this.toggleNav}
                >
                  <Link to="/">Me</Link>
                </div>
              </li>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  tabIndex="-1"
                  onKeyPress={this.toggleNav}
                >
                  <Link to="/resume">Resume</Link>
                </div>
              </li>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  tabIndex="-1"
                  onKeyPress={this.toggleNav}
                >
                  <Link to="/blog">Thoughts</Link>
                </div>
              </li>
              <li>
                <div
                  onClick={this.toggleNav}
                  role="button"
                  tabIndex="-1"
                  onKeyPress={this.toggleNav}
                >
                  <Link to="/projects">Projects</Link>
                </div>
              </li>
            </ul>
          </MobileNav>
        )}
      </nav>
    );
  }
}

Navigation.propTypes = {
  linkedin: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
  email: PropTypes.string
};

Navigation.defaultProps = {
  linkedin: 'https://www.linkedin.com/in/bedfordwest/',
  twitter: 'https://twitter.com/GameDevBedford',
  github: 'https://github.com/BedfordWest',
  email: 'bedfordwest@gmail.com'
};

export default Navigation;
