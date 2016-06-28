import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import cssModules from 'react-css-modules';
import styles from '../style/header.scss';

@cssModules(styles)
export default class Header extends Component {
  static propTypes = {
    styles: PropTypes.object
  };

  render() {
    return (
      <div>
        <h2 styleName='h2'><%= appName %></h2>

        <Link to={'/'}>Home Page</Link> -&nbsp;
        <Link to={'/another'}>Another Page</Link>
      </div>
    );
  }
}
