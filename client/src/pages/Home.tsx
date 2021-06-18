import classnames from 'classnames';
import Navigation from '../core/navigation';

const Home = () => {
  return (
    <div className={classnames(
      'w-full',
      'h-full',
      'mt-12',
      'bg-gray-800',
      'font-sans',
      'tracking-normal',
      'leading-normal',
    )}>
      <Navigation />
      <div className={classnames(
        'flex',
        'flex-col',
        'md:flex-row',
        'bg-gray-800',
      )}>
        Sidebar and main
      </div>
    </div>
  );
};

export default Home;
