import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import App from './app'
import Oops from './oops'
import Main from './Components'

storiesOf('Screens', module)
  .add('Oops', () => <Oops />)
  .add('Main', () => <Main />)
