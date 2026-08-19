import { NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  CreditCard,
  User,
  MessageSquare,
  Bell,
  CalendarDays,
  Video,
  FileText,
  Clock3,
} from "lucide-react";

const sidebarItems = [
  {
    name: "Projects",
    path: "/freelancer/projects",
    icon: BriefcaseBusiness,
  },
  {
    name: "Payments",
    path: "/freelancer/payments",
    icon: CreditCard,
  },
  {
    name: "Profile",
    path: "/freelancer/profile",
    icon: User,
  },
  {
    name: "Message",
    path: "/freelancer/messages",
    icon: MessageSquare,
  },
  {
    name: "Notification",
    path: "/freelancer/notifications",
    icon: Bell,
  },
  {
    name: "Calendar",
    path: "/freelancer/calendar",
    icon: CalendarDays,
  },
  {
    name: "Interviews",
    path: "/freelancer/interviews",
    icon: Video,
  },
  {
    name: "Proposals",
    path: "/freelancer/proposals",
    icon: FileText,
  },
  {
    name: "Pending Projects",
    path: "/freelancer/pending-projects",
    icon: Clock3,
  },
];

const FreelancerSidebar = () => {
  return (
    <aside className="w-64 min-h-[calc(100vh-5rem)] bg-[#FBF6F0] border-r border-gray-100">
              

      <nav className="px-4 py-6">
                <div className="space-y-1.5">

        {sidebarItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `
                group
                flex
                items-center
                gap-3
                w-full
                px-4
                py-3
                rounded-lg
                text-sm
                transition-all
                duration-300
                ${
                  isActive
                    ? "gradient-text font-semibold"
                    : "text-gray-700 hover:text-[#FF7A18]"
                }
                `
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={19}
                    strokeWidth={isActive ? 2.2 : 1.8}
                    className={
                      isActive
                        ? "text-[#FF7A18]"
                        : "text-gray-500 group-hover:text-[#FF7A18]"
                    }
                  />

                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
        </div>
      </nav>
    </aside>
  );
};

export default FreelancerSidebar;