import React from 'react';
import { Button } from '../styles/button';
import { Container } from '../styles/shared';

export default class Index extends React.Component{  

  render(){
    return(
      <section>
          <Container>
            <Button primary> I'm a primary button </Button>
            <Button> I'm a normal button</Button>
          </Container>
      </section>
    )
  }
};