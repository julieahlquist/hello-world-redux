import React from 'react';
import { connect } from 'react-redux';
import {Container, Header} from 'semantic-ui-react';

const App = (props) => {
  return (
    <>
      <Container>
       <Header as='h1'>{props.state.greeting}</Header>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

export default connect(
  mapStateToProps
)(App);