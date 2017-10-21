import React from 'react'
import styled from 'styled-components'
import {
  Panel,
} from 'react-weui'

import {
  MusicNote,
} from '../Components'

export default class extends React.Component {
  render() {
    return (
      <div id="app">
        <Panel>
          <MusicNote />
        </Panel>
      </div>
    )
  }
}

