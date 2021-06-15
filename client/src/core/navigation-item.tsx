import classnames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const NavigationItem = ({ children, className }: Props) => {
  return (
    <div className={classnames('md:w-1/3 flex', className)}>
      {children}
    </div>
  );
};

export default NavigationItem;
