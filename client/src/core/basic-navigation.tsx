import classnames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const BasicNavigation = ({ children }: Props) => {
  return (
    <ul className={classnames(
      'flex-1',
      'flex',
      'md:flex-none',
      'items-center',
      'justify-between',
    )}>
      {children}
    </ul>
  );
};

export default BasicNavigation;
