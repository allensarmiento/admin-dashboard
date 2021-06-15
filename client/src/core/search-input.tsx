import classnames from 'classnames';

const SearchInput = () => {
  return (
    <span className="relative w-full">
      <input
        className={classnames(
          'w-full',
          'px-2',
          'py-3',
          'pl-10',
          'bg-gray-900',
          'transition',
          'focus:outline-none',
          'focus:border-gray-400',
          'rounded',
          'leading-normal',
          'appearance-none',
        )}
        type="search"
        placeholder="Search"
      />
      <div className="absolute top-4 left-3">
        <svg
          className="fill-current pointer-events-none text-white w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
        </svg>
      </div>
    </span>
  );
};

export default SearchInput;
