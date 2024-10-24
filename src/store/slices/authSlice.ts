import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../models/User";
import authService from "../../service/authService";
import ajaxAdapter from "../../service/ajaxAdapter";

export interface AuthState {
  user: User,
  token: string,
  message: string
}

const initialState: AuthState = {
  user: {
    id: -0,
    username: "",
    name: "",
    email: "",
    role: -0,
    lastUserWorkGroup: -0,
    createdAt: "",
    updatedAt: ""
  },
  token: "",
  message: ""
}

export const fetchLogin = createAsyncThunk(
  "auth/login/fetch",
  async (data: {}) => {
    const response = (await ajaxAdapter
      .post(`/auth/login`, data)
      .then(res => res.data)
    ) as AuthState

    authService.saveUser(response.user);

    ajaxAdapter.defaults.headers.common["Authorization"] = `Bearer ${response.token}`
    return response
  }
)

export const getActualUser = createAsyncThunk(
  "auth/actualUser",
  async () => {
    const response =  await ajaxAdapter.get("/user/actualUser").then(res => res.data);
    authService.saveUser(response.user);
    return response;
  }
)

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    });
    builder.addCase(fetchLogin.rejected, (state, _action) => {
      state.message = "Username or password are incorrect!"
    });
    builder.addCase(getActualUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  }
})

export default AuthSlice.reducer;
export const {} = AuthSlice.actions;