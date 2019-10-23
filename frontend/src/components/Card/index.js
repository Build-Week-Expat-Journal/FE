import React from 'react';

import styled from 'styled-components/macro';

export const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${props => {
    const [w, h] = props.aspectRatio.split(':');
    return `${(h / w) * 100}%`;
  }};
`;

export const Card = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  background: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-clip: padding-box;
  width: 100%;
  border: solid ${props => props.borderSize} transparent;
  border-radius: 1rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${props => props.theme.gradients.purplePink};
    margin: -${props => props.borderSize};
    border-radius: inherit;
    z-index: -1;
  }
`;

{
  /* <CardWrapper aspectRatio={'16:9'}>
  <Card
    borderSize={'5px'}
    image={
      'https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
    }
  >
    Aute nisi occaecat magna excepteur mollit sint cillum nulla ullamco mollit
    et ex proident.
  </Card>
</CardWrapper>; */
}
