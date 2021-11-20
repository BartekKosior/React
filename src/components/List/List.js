import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';


class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  
  static propTypes = {
    title: PropTypes.node,
    //children: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  
  static defaultProps = {
    /* children:<p> I can do all the things </p>, */
    description: settings.defaultListDescription,
  }

  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length         ]
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }
  
  
  
  render() {
    return (
      <section className = {styles.component}>
        <Hero titleText = {this.props.title} image = {this.props.img} />
        <div className = {styles.description}>
          { /* {this.props.children} */ }
          {ReactHtmlParser(props.description)}
        </div>
        <div className = {styles.columns}>
          { /* <Column Animals = {this.props.Animals} Plants = {this.props.Plants} Minerals = {this.props.Minerals} /> */ }
          {this.state.columns.map(({key ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className = {styles.creator}>
          <Creator text = {settings.columnCreatorText} action = {title => this.addColumn}             />
        </div>
      </section>
    )
  }
}

export default List;