import classnames from 'classnames';
import GraphCard from '../components/graph-card';
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
            <MetricCard
              gradient={classnames(
                'from-pink-200',
                'to-pink-100',
                'border-pink-500',
              )}
              background="bg-pink-500"
              icon="fas fa-users fa-2x fa-inverse"
              heading="Total Users"
              text="249"
              textColor="text-pink-500"
              textIcon="fas fa-exchange-alt"
            />
            <MetricCard
              gradient={classnames(
                'from-yellow-200',
                'to-yellow-100',
                'border-yellow-600',
              )}
              background="bg-yellow-600"
              icon="fas fa-user-plus fa-2x fa-inverse"
              heading="New Users"
              text="249"
              textColor="text-yellow-600"
              textIcon="fas fa-caret-up"
            />
            <MetricCard
              gradient={classnames(
                'from-blue-200',
                'to-blue-100',
                'border-blue-500',
              )}
              background="bg-blue-600"
              icon="fas fa-server fa-2x fa-inverse"
              heading="Server Uptime"
              text="152 days"
              textColor=""
              textIcon=""
            />
            <MetricCard
              gradient={classnames(
                'from-indigo-200',
                'to-indigo-100',
                'border-indigo-500',
              )}
              background="bg-indigo-600"
              icon="fas fa-tasks fa-2x fa-inverse"
              heading="To Do List"
              text="7 Tasks"
              textColor=""
              textIcon=""
            />
            <MetricCard
              gradient={classnames(
                'from-red-200',
                'to-red-100',
                'border-red-500',
              )}
              background="bg-red-600"
              icon="fas fa-inbox fa-2x fa-inverse"
              heading="Issues"
              text="3"
              textColor="text-red-500"
              textIcon="fas fa-caret-up"
            />
          </section>
          <section className={classnames(
            'flex',
            'flex-row',
            'flex-wrap',
            'flex-grow',
            'mt-2',
          )}>
            <GraphCard title="Bar Chart">

            </GraphCard>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Home;
