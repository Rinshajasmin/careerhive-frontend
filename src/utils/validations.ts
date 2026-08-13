export const validateName = (name: string): string | null => {
  if (!name.trim()) {
    return "Username is required.";
  }

  if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name.trim())) {
    return "Name can contain only letters and spaces.";
  }

  return null;
};

export const validateEmail = (email: string): string | null => {
  if (!email.trim()) {
    return "Email is required.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return "Please enter a valid email address.";
  }

  return null;
};

export const validatePassword = (password: string): string | null => {
  if (!password) {
    return "Password is required.";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters.";
  }

  return null;
};


export const validateOtp = (otp: string): string | null => {
  if (!otp) {
    return "OTP is required.";
  }

  if (!/^\d{6}$/.test(otp)) {
    return "OTP must be exactly 6 digits.";
  }

  return null;
};