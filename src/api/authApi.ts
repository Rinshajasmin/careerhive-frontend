import { API_BASE_URL } from "../constants/api";
export interface RegisterData {
  userName: string;
  email: string;
  password: string;
  role: "freelancer" | "recruiter";
}

export const registerUser = async (data: RegisterData) => {
  const response = await fetch(`${API_BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Registration failed");
  }

  return result;
};


export const verifyOtp = async (
  email: string,
  otp: string
) => {
  const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      otp,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "OTP verification failed");
  }

  return result;
};

export const resendOtp = async (email: string) => {
  const response = await fetch(`${API_BASE_URL}/auth/resend-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to resend OTP");
  }

  return result;
};
export interface LoginData {
  email: string;
  password: string;
}

// export const loginUser = async (data: LoginData) => {
//   const response = await fetch(`${API_BASE_URL}/auth/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   const result = await response.json();

//   if (!response.ok) {
//   console.log("LOGIN ERROR STATUS:", response.status);
//   console.log("LOGIN ERROR RESPONSE:", result);

//   throw new Error(result.message || "Login failed");
//   }

//   return result;
// };

export const loginUser = async (data: LoginData) => {
  console.log("LOGIN API CALLED");
  console.log("LOGIN DATA:", data);

  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log("LOGIN RESPONSE STATUS:", response.status);

  const result = await response.json();

console.log(
  "LOGIN DATA STRUCTURE:",
  JSON.stringify(result.data, null, 2)
);
  if (!response.ok) {
    throw new Error(result.message || "Login failed");
  }

  return result;
};