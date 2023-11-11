export const validateRegistraion = async (
  displayName,
  email,
  password,
  confirmPassword
) => {
  // check if displayname contains numbers
  const regex = /\d/;
  if (displayName.match(regex) || displayName.length < 3) {
    return 'Invalid Name';
  }
  // check if email is valid
  const emailRegex = /\S+@\S+\.\S+/;
  if (emailRegex.test(email) === false) {
    return 'Invalid Email';
  }
  // check if password is valid
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  // check if password and confirm password match
  if (password !== confirmPassword) {
    return 'Passwords do not match';
  }
  return '';
};

export const validateLogin = async (email, password) => {
  const emailRegex = /\S+@\S+\.\S+/;
  if (emailRegex.test(email) === false) {
    throw new Error('Invalid Email');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }
  return;
};
