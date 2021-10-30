import React, { FC } from 'react'

import Block from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
  return (
    <Container data-cy="grid-container">
      {[...Array(9)].map((_, rowIndex) => (
        <Row data-cy="grid-row-container">
          {[...Array(9)].map((_, colIndex) => (
            <Block colIndex={colIndex} rowIndex={rowIndex} />
          ))}
        </Row>
      ))}
    </Container>
  )
}

export default Grid
