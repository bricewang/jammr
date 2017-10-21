import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  MusicNote,
} from '../Shapes'

storiesOf('Shapes', module)
  .add('Default MusicNote', () => <MusicNote />)
