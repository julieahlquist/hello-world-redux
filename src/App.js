import React from 'react';
import { Container } from 'semantic-ui-react';
import GreetingInput from './GreetingInput';
import Greeting from './Greeting';

const App = () => {
  return (
    <>
      <Container>
        <Greeting />
        <GreetingInput />
      </Container>
    </>
  )
}

export default App;