import { useAuth } from "../../context/AuthContext";

const RecruiterDashboard = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold">
        Recruiter Dashboard
      </h1>

      <p className="mt-3 text-gray-600">
        Welcome, {user?.userName}
      </p>
    </main>
  );
};

export default RecruiterDashboard;