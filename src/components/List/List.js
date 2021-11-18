import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node,
  }
  
  static defaultProps = {
    children:<p> I can do all the things </p>,
  }

  render() {
    return (
      <section className = {styles.component}>
        <Hero titleText = {this.props.title} />
        <Hero image = {this.props.img} />
        <div className = {styles.description}>
          {this.props.children}
        </div>
        <div className = {styles.columns}
          <Column Animals = {this.props.Animals} />
          <Column Plants = {this.props.Plants} />
          <Column Minerals = {this.props.Minerals} />
        </div>
      </section>
    )
  }
}

export default List;