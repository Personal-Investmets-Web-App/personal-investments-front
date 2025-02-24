import { FC, PropsWithChildren } from "react";
import Navbar from "../../components/shared/Navbar";
import "./dashboard-layout.scss";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Navbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
