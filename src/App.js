import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Button } from 'semantic-ui-react';

const App = (props) => {
  return (
    <>
      <Container>
       <Header as='h1'>{props.state.greeting}</Header>
      <Button
        primary
        onClick={() => props.dispatch({ type: 'CHANGE_GREETING',
  greeting: 'Hello Mars' })}
        >
          Change greeting
        </Button>
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