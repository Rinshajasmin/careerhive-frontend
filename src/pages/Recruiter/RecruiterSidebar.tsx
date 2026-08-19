import {
  FolderKanban,
  CreditCard,
  UserRound,
  MessageSquare,
  Bell,
  CalendarDays,
  UsersRound,
  CalendarClock,
  FileText,
  Clock3,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  {
    name: "Projects",
    path: "/recruiter/projects",
    icon: FolderKanban,
  },
  {
    name: "Payments",
    path: "/recruiter/payments",
    icon: CreditCard,
  },
  {
    name: "Profile",
    path: "/recruiter/profile",
    icon: UserRound,
  },
  {
    name: "Message",
    path: "/recruiter/messages",
    icon: MessageSquare,
  },
  {
    name: "Notification",
    path: "/recruiter/notifications",
    icon: Bell,
  },
  {
    name: "Calendar",
    path: "/recruiter/calendar",
    icon: CalendarDays,
  },
  {
    name: "Client",
    path: "/recruiter/clients",
    icon: UsersRound,
  },
  {
    name: "Interview Scheduling",
    path: "/recruiter/interviews",
    icon: CalendarClock,
  },
  {
    name: "Bids / Proposals",
    path: "/recruiter/proposals",
    icon: FileText,
  },
  {
    name: "Pending Project",
    path: "/recruiter/pending-projects",
    icon: Clock3,
  },
];

const RecruiterSidebar = () => {
  return (
    <aside className="w-64 min-h-[calc(100vh-5rem)] bg-[#FBF6F0] border-r border-gray-100">
      <nav className="px-4 py-6">
        <div className="space-y-1.5">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `
                  group
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-lg
                  text-sm
                  font-medium
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "bg-[#FFF5EC] gradient-text"
                      : "text-gray-600 hover:bg-[#FFF9F5] gradient-hover"
                  }
                  `
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      strokeWidth={1.8}
                      className={
                        isActive
                          ? "text-[#FF6B00]"
                          : "text-gray-500 group-hover:text-[#FF6B00]"
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

export default RecruiterSidebar;