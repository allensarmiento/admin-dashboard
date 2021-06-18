import classnames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  visible: boolean;
}

const Dropdown = ({ children, visible }: Props) => {
  return (
    <div className={classnames(
      'absolute',
      'bg-gray-800',
      'text-white',
      'right-0',
      'mt-3',
      'p-3',
      'overflow-auto',
      'z-30',
      visible ? '' : 'invisible',
    )}>
      {children}
    </div>
  );
};

export default Dropdown;
