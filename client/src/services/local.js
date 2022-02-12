class LocalService {
  setAccessToken(accessToken) {
    localStorage.setItem("x-access-token", JSON.stringify(accessToken));
  }

  setRefreshToken(refreshToken) {
    localStorage.setItem("refresh-token", JSON.stringify(refreshToken));
  }

  getAccessToken() {
    let accessToken = localStorage.getItem("x-access-token");
    if (accessToken) {
      accessToken = JSON.parse(accessToken);
      return accessToken;
    }
    return null;
  }

  getRefreshToken() {
    let refreshToken = localStorage.getItem("refresh-token");
    if (refreshToken) {
      refreshToken = JSON.parse(refreshToken);
      return refreshToken;
    }
    return null;
  }

  setUserData(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  getUserData() {
    let user = localStorage.getItem("user");
    if (user) {
      user = JSON.parse(user);
      return user;
    }
    return null;
  }

  removeUserData() {
    localStorage.removeItem("user");
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("x-access-token");
    localStorage.removeItem("refresh-token");
  }
}
export default new LocalService();
