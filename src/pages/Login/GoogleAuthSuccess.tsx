import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const GoogleAuthSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      navigate("/login", { replace: true });
      return;
    }

    console.log("Google authentication successful");
    console.log("JWT:", token);

    // We'll handle token storage and role-based redirect next.
  }, [searchParams, navigate]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-gray-600">Signing you in...</p>
    </main>
  );
};

export default GoogleAuthSuccess;