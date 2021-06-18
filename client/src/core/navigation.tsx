import classnames from 'classnames';
import { useState } from 'react';
import BasicNavigation from './basic-navigation';
import BasicNavigationItem from './basic-navigation-item';
import Dropdown from './dropdown';
import DropdownLink from './dropdown-link';
import NavigationItem from './navigation-item';
import SearchInput from './search-input';

const Navigation = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

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
          <BasicNavigation>
            <BasicNavigationItem>
              <a href="#" className={classnames(
                'inline-block',
                'py-2',
                'px-4',
                'text-white',
                'no-underline',
              )}>
                Active
              </a>
            </BasicNavigationItem>
            <BasicNavigationItem>
              <a href="#" className={classnames(
                'inline-block',
                'py-2',
                'px-4',
                'no-underline',
                'text-gray-600',
                'hover:text-gray-200',
                'hover:text-underline',
              )}>
                Link
              </a>
            </BasicNavigationItem>
            <BasicNavigationItem>
              <div className="relative inline-block">
                <button
                  className={classnames(
                    'drop-button',
                    'text-white',
                    'focus:outline-none',
                  )}
                  onClick={toggleDropdown}
                >
                  <span className="pr-2"></span>&nbsp;
                  Hi, User&nbsp;
                  <svg
                    className="h-3 fill-current inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </button>
                <Dropdown visible={dropdownVisible}>
                  <input
                    className={classnames('p-2', 'text-gray-600')}
                    placeholder="Search.."
                  />
                  <DropdownLink href="#">
                    <i className="fa fa-user fa-fw"></i> Profile
                  </DropdownLink>
                  <DropdownLink href="#">
                    <i className="fa fa-cog fa-fw"></i> Settings
                  </DropdownLink>
                  <div className="border border-gray-800"></div>
                  <DropdownLink href="#">
                    <i className="fa fa-sign-out-alt fa-fw"></i> Log Out
                  </DropdownLink>
                </Dropdown>
              </div>
            </BasicNavigationItem>
          </BasicNavigation>
        </NavigationItem>
      </div>
    </nav>
  );
};

export default Navigation;
