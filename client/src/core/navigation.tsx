import classnames from 'classnames';
import Dropdown from './dropdown';
import NavigationItem from './navigation-item';
import SearchInput from './search-input';

const Navigation = () => {
  return (
    <nav className={classnames(
      'fixed',
      'top-0',
      'z-20',
      'w-full',
      'h-auto',
      'mt-0',
      'pt-2',
      'md:pt-1',
      'px-1',
      'pb-1',
      'bg-gray-800',
      'text-white',
    )}>
      <div className="flex flex-wrap items-center">
        <NavigationItem className={classnames(
          'flex-shrink',
          'justify-center',
          'md:justify-start',
          'text-white',
        )}>
          <a href="#" className="pl-2">Admin Dashboard</a>
        </NavigationItem>
        <NavigationItem className={classnames(
          'flex-1',
          'px-2',
          'justify-center',
          'md:justify-start',
        )}>
          <SearchInput />
        </NavigationItem>
        <NavigationItem className={classnames(
          'w-full',
          'md:w-1/3',
          'pt-2',
          'content-center',
          'justify-between',
          'md:justify-end',
        )}>
          <Dropdown />
        </NavigationItem>
      </div>
    </nav>
  );
};

export default Navigation;
