import React from 'react';
import { Container } from 'semantic-ui-react';
import GreetingInput from './GreetingInput';
import Greeting from './Greeting';
import NavBar from './NavBar';

const App = () => {
  return (
    <>
    <NavBar/>
      <Container>
        <Greeting />
        <GreetingInput />
      </Container>
    </>
  )
}

export default App;