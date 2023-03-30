import type { Meta } from '@storybook/react';
import { CategoryCards } from './category-cards';

const Story: Meta<typeof CategoryCards> = {
  component: CategoryCards,
  title: 'CategoryCards',
};
export default Story;

export const Primary = {
  args: {},
};
