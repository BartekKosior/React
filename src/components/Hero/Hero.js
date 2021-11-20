import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class Hero extends React.Component{
    render(){
        return (
            <header className = {styles.component}>
                {/* <h2 className = {styles.title}> {this.props.titleText} </h2> */}
                <h2 className = {styles.title}> {ReactHtmlParser(props.titleText)} </h2>
                <img className = {styles.image} src={this.props.image} />
            </header>
        )
    }
}

Hero.propTypes = {
    titleText: PropTypes.node,
};

export default Hero