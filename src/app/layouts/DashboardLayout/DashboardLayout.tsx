import { FC, PropsWithChildren } from 'react';

import Navbar from '../../components/shared/Navbar';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="dashboard-layout">
    <Navbar />
    {children}
  </div>
);

export default DashboardLayout;
