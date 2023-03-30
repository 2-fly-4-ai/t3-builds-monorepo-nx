import type { Meta } from '@storybook/react';
import { ColumnWithCTA } from './column-with-cta';

const Story: Meta<typeof ColumnWithCTA> = {
  component: ColumnWithCTA,
  title: 'ColumnWithCTA',
};
export default Story;

export const Primary = {
  args: {},
};
