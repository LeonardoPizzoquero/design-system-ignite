import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-design-system-lp/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias accusamus, nostrum optio cupiditate incidunt dolorem quasi! Nulla, natus asperiores ex eos et sit praesentium optio illo nostrum. Fugit, corporis recusandae.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
