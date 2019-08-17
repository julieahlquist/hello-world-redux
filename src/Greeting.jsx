import React from 'react';
import { connect } from 'react-redux';
import { Menu, Header } from 'semantic-ui-react';

const Greeting = (props) => {
  return (
    <>
      <Menu>
        <Menu.Item header>HELLO REDUX</Menu.Item>
        <Menu.Item name='Environment'/>
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