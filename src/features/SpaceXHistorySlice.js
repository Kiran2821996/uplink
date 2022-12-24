import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("post/getPost", async () => {
  return await axios
    .get("https://api.spacexdata.com/v3/history")
    .then((res) => res.data);
});

const SpaceXHistory = createSlice({
  name: "post",
  initialState: {
    post: [],
    loading: false,
  },
  extraReducers: {
    [getPost.pending]: (state, action) => {
      state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.post = action.payload;
    },
    [getPost.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default SpaceXHistory.reducer;
