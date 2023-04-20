import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BillingForm } from './billing-form';

export default {
  title: 'Components/BillingForm',
  component: BillingForm,
} as Meta;

const Template: Story = (args) => <BillingForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  subscriptionPlan: {
    name: 'Basic Plan',
    description: 'This is the basic subscription plan.',
    isCanceled: false,
    stripeCurrentPeriodEnd: '2023-05-01T00:00:00.000Z',
    isPro: false,
  },
};

export const ProSubscription = Template.bind({});
ProSubscription.args = {
  subscriptionPlan: {
    name: 'Pro Plan',
    description: 'This is the pro subscription plan.',
    isCanceled: false,
    stripeCurrentPeriodEnd: '2023-05-01T00:00:00.000Z',
    isPro: true,
  },
};
