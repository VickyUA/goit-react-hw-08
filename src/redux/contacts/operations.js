import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const response = await axios.get("/contacts");
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

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (text, thunkApi) => {
    try {
      const response = await axios.post("/contacts", text);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

// export const editContact = createAsyncThunk(
//   "contacts/editContact",
//   async (contactId, text) => {
//     const response = await axios.patch(`/contacts/${contactId}`, text);
//     return response.data;
//   }
// );

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (text, thunkApi) => {
    try {
      const response = await axios.patch(`/contacts/${text.id}`, text.value);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
