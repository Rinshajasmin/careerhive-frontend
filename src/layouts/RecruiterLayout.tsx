import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import RecruiterSidebar from "../pages/Recruiter/RecruiterSidebar";

const RecruiterLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Recruiter Navbar */}
       <Navbar variant="recruiter" />

          <div className="flex">
            {/* Recruiter Sidebar */}
            <RecruiterSidebar />

                {/* Page Content */}
                <main>
                  <Outlet />
                </main>
          </div>
    </div>
  );
};

export default RecruiterLayout;