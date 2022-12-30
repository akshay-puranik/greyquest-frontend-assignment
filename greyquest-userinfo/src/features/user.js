import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(URL);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
