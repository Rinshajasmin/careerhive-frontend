import type { NavigateFunction } from "react-router-dom";

export function redirectByRole(role: string, navigate: NavigateFunction) {
  if (role === "freelancer") navigate("/freelancer/dashboard");
  else if (role === "recruiter") navigate("/recruiter/dashboard");
  else if (role === "admin") navigate("/admin/dashboard");
}