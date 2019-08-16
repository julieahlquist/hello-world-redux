import React from 'react';
import { connect } from 'react-redux';
import { Container, Button, Input } from 'semantic-ui-react';

const App = (props) => {
  return (
    <>
      <Container>
       <Greeting />
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

export default connect(null, greetingActions)(App);