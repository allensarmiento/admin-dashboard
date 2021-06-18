import classnames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
}

const DropdownLink = ({ children, href }: Props) => {
  return (
    <a href={href} className={classnames(
      'block',
      'p-2',
      'hover:bg-gray-800',
      'text-white',
      'text-sm',
      'no-underline',
      'hover:no-underline',
    )}>
      {children}
    </a>
  );
};

export default DropdownLink;
