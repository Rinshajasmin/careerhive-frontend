import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import FreelancerSidebar from "../pages/Freelancer/FreelancerSidebar";

const FreelancerLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Freelancer Navbar */}
      <Navbar variant="freelancer" />

      <div className="flex">
        {/* Freelancer Sidebar */}
        <FreelancerSidebar />

        {/* Page Content */}
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default FreelancerLayout;