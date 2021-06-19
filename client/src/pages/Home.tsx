import classnames from 'classnames';
import Navigation from '../core/navigation';
import Sidebar from '../core/sidebar';
import SidebarItem from '../core/sidebar-item';

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
        <Sidebar>
          <SidebarItem
            hover="hover:border-pink-500"
            icon="fa fa-tasks"
            text="text-gray-600 md:text-gray-400"
          >
            Tasks
          </SidebarItem>
          <SidebarItem
            hover="hover:border-purple-500"
            icon="fa fa-envelope"
            text="text-gray-600 md:text-gray-400"
          >
            Messages
          </SidebarItem>
          <SidebarItem
            hover="hover:border-blue-600"
            icon="fas fa-chart-area text-blue-600"
            text="text-white md:text-white"
          >
            Analytics
          </SidebarItem>
          <SidebarItem
            hover="hover:border-red-500"
            icon="fa fa-wallet"
            text="text-gray-600 md:text-gray-400"
          >
            Payments
          </SidebarItem>
        </Sidebar>
        <main className={classnames(
          'flex-1',
          'mt-12',
          'md:mt-2',
          'pb-24',
          'md:pb-5',
          'bg-gray-100',
        )}>
          <div className="bg-gray-800 pt-3"></div>
        </main>
      </div>
    </div>
  );
};

export default Home;
