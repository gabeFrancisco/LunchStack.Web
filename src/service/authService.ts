const loginUser = (token: string) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};

const checkAuth = () => (localStorage.getItem("token") !== null ? true : false);
const getToken = (): string | null => {
  const authData = JSON.parse(localStorage.getItem("token") || "{}");
  return authData;
};

const logout = () => {
  localStorage.clear();
};

export default {loginUser, checkAuth, getToken, logout};
