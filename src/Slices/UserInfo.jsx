import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      token: "",
      name: "",
    },
  },
  reducers: {
    add_user: (state, { payload }) => {
      state.userInfo.token = payload.token;
      state.userInfo.name = payload.name;
    },
  },
});

export default UserSlice.reducer;
export const { add_user } = UserSlice.actions;
