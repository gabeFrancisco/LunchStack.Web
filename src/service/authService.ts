import { User } from "../models/User";

const saveToken = (token: string) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};

const getToken = (): string | null => {
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  return token;
};

const saveUser = (user: User) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

const getUser = (): string | null => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user;
};

const checkAuth = () => (localStorage.getItem("token") !== null ? true : false);
const logout = () => {
  localStorage.clear();
};

export default { saveToken, saveUser, getUser, checkAuth, getToken, logout };
