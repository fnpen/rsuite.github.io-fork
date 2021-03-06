import React from 'react';
import { ButtonToolbar, Button, Whisper, Popover } from 'rsuite';
import createComponentExample from '../createComponentExample';

export default createComponentExample({
  id: 'Popover',
  examples: ['basic', 'placement', 'trigger', 'container'],
  dependencies: {
    ButtonToolbar,
    Button,
    Whisper,
    Popover
  }
});
