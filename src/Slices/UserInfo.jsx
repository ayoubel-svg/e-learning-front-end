import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      token: "",
      name: "",
      email: "",
      password: "",
      city: "",
      image: ""
    },
  },
  reducers: {
    add_user: (state, { payload }) => {
      state.userInfo.token = payload.token;
      state.userInfo.name = payload.name;
      state.userInfo.email = payload.email;
      state.userInfo.city = payload.city;
      state.userInfo.image = payload.image;
      state.userInfo.password = payload.password;
    },
  },
});

export default UserSlice.reducer;
export const { add_user } = UserSlice.actions;
