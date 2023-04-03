import { ImSpinner8 } from '../../icons';
/* eslint-disable-next-line */
export interface LoadingSpinnerProps {}

export function LoadingSpinner(props: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center space-x-4">
      <div>
        <ImSpinner8 className="animate-spin" />
      </div>
      <div>Loading...</div>
    </div>
  );
}

export default LoadingSpinner;
