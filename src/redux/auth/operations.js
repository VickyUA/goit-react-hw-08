import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const register = createAsyncThunk("auth/register", async (values) => {
  const response = await axios.post("/users/signup", values);
  axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
  return response.data;
});

export const logIn = createAsyncThunk("auth/login", async (values) => {
  const response = await axios.post("/users/login", values);
  axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
  return response.data;
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  axios.defaults.headers.common.Authorization = "";
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const reduxState = thunkApi.getState();
      axios.defaults.headers.common.Authorization = `Bearer ${reduxState.auth.token}`;

      const response = await axios.get("/users/current");

      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const reduxState = thunkApi.getState();
      return reduxState.auth.token !== null;
    },
  }
);
