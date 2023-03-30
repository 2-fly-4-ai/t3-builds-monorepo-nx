import type { Meta } from '@storybook/react';
import { ColumnWithDates } from './column-with-dates';

const Story: Meta<typeof ColumnWithDates> = {
  component: ColumnWithDates,
  title: 'ColumnWithDates',
};
export default Story;

export const Primary = {
  args: {},
};
