import { defineComponent } from '@music163/tango-boot';
import { Button as AntButton } from 'antd';

export const Button = defineComponent(AntButton, {
  name: 'Button',
});

export const ButtonGroup = defineComponent(AntButton.Group, {
  name: 'ButtonGroup',
});
