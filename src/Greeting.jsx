import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Menu, Header } from 'semantic-ui-react';
import './navbar.css';

const Greeting = (props) => {
  
  return (
    <>
      <Menu secondary id="navbar">
        <Menu.Item name='Environment' />
        <Menu.Item name='Medicine' />
        <Menu.Item name='Outreach' />
      </Menu>
      <Header as="h1">{props.greeting}</Header>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
      greeting: state.greeting
  }
}

export default connect(mapStateToProps)(Greeting);