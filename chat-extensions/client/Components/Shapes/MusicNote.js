import React from 'react'
import styled from 'styled-components'

import {
  randomNumRange,
} from '../../utilties'
import {
  colors,
} from '../../styles'

const colorsArr = Object.values(colors)

export default (props) => {
  const Note = styled.span`
    font-size: ${randomNumRange(4,6)}em;
    color: ${colorsArr[Math.floor(Math.random() * colorsArr.length)]};
  `

  return <Note>&#9833;</Note>
}
