import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ProductCard, ProductCardProps } from './productCard';

export default {
  title: 'Components/ProductCard',
  component: ProductCard,
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
  description:
    'The Apple Watch Series 7 GPS model lets you track your workouts and daily activity, and makes it easy to stay connected with calls, texts, and notifications. This aluminum case watch features a Retina display that is nearly 20% larger than the Series 6 and is water-resistant up to 50 meters.',
  rating: 4.5,
  link: 'test',
};
