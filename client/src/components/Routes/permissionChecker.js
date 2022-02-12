export const isAuthenticated = () => {
  if (typeof window === "undefined") return true;

  const accessToken = window.localStorage.getItem("x-access-token");

  if (accessToken) {
    let token = JSON.parse(accessToken);
    // let token = accessToken;
    // console.log("tokenn", token);
    if (token) return token;
    else return false;
  }
  return false;
};
