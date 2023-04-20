'use client';

// import { Button } from '@mylibrary/shadnui/ui/button';
import { ImSpinner8 } from '../../icons';
import { useState } from 'react';
/* eslint-disable-next-line */
export interface LoadingSpinnerProps {}

export function LoadingSpinner(props: LoadingSpinnerProps) {
  const [testvar1, testvar2] = useState(false);

  // A function to toggle the testvar1 state
  const handleClick = () => {
    testvar2(!testvar1);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <div>
        <ImSpinner8 className="animate-spin" />
        {/* A button that calls the handleClick function on click */}
      </div>
      <div>Loading...</div>
    </div>
  );
}

export default LoadingSpinner;
