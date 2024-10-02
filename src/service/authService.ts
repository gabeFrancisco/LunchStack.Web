import { User } from "../models/User";

const saveUser = (user: User) => {
  if (user) {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

const getUser = (): User | null => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user;
};

const logout = () => {
  localStorage.clear();
};

export default { saveUser, getUser, logout };
