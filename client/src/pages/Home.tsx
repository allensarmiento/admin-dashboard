import classnames from 'classnames';
import Navigation from '../core/navigation';
import MetricCard from '../components/metric-card';
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
          <div className="bg-gray-800 pt-3">
            <div className={classnames(
              'rounded-tl-3xl',
              'bg-gradient-to-r',
              'from-blue-900',
              'to-gray-800',
              'p-4',
              'shadow',
              'text-2xl',
              'text-white',
            )}>
              <h3 className="font-bold pl-2">Analytics</h3>
            </div>
          </div>
          <section className="flex flex-wrap">
            <MetricCard
              gradient={classnames(
                'from-green-200',
                'to-green-100',
                'border-green-600',
              )}
              background="bg-green-600"
              icon="fa fa-wallet fa-2x fa-inverse"
              heading="Total Revenue"
              text="$3249"
              textColor="text-green-500"
              textIcon="fas fa-caret-up"
            />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
