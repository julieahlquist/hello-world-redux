import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Button, Input } from 'semantic-ui-react';

const App = (props) => {
  return (
    <>
      <Container>
       <Header as='h1'>{props.state.greeting}</Header>
        <Input
          placeholder='How would you like to be greeted?'
          onBlur={(event) => props.dispatch({ type: 'PROPOSE_GREETING',
        greeting: event.target.value })}
        />
        <Button
          primary
          onClick={() => props.dispatch({ type: 'CHANGE_GREETING' })}
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