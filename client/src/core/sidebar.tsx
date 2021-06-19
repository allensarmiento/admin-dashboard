import classnames from 'classnames';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  return (
    <div className={classnames(
      'fixed',
      'md:relative',
      'z-10',
      'bottom-0',
      'w-full',
      'wd:w-48',
      'h-16',
      'md:h-screen',
      'mt-12',
    )}>
      <div className={classnames(
        'md:fixed',
        'md:top-0',
        'md:left-0',
        'content-center',
        'md:center-start',
        'justify-between',
        'md:mt-12',
        'md:w-48',
        'text-left',
      )}>
        <ul className={classnames(
          'flex',
          'flex-row',
          'md:flex-col',
          'py-0',
          'md:py-3',
          'px-1',
          'md:px-2',
          'text-center',
          'md:text-left',
        )}>
          {children}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
