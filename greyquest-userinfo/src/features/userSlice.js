import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  try {
    const response = await axios.get(URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {},
});
