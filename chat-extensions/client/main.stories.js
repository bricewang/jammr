import React from 'react'
import {
  storiesOf,
} from '@storybook/react'

import App from './app'
import Oops from './oops'

storiesOf('Screens', module)
  .add('Oops', () => <Oops />)
