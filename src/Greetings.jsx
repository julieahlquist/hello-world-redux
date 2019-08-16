import React from 'react';
import { connect } from 'react-redux';
import { Header } from 'sematic-ui-redux';

const Greeting = (props) => {
  return (
      <>
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