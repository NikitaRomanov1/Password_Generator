export const makePassword = (digits) => {
  let charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~|}{[]:;?><,./-=",
    password_func = "";
  for (var i = 0, n = charset.length; i < digits; ++i) {
    password_func += charset.charAt(Math.floor(Math.random() * n));
  }
  return password_func;
};
