export const isAuthenticated = () => {
  if (typeof window === "undefined") return true;

  const accessToken = window.localStorage.getItem("access_token");

  if (accessToken) {
    let token = JSON.parse(accessToken);
    if (token) return token;

    return false;
  }
  return false;
};
