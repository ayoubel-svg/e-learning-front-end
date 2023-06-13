import { configureStore } from "@reduxjs/toolkit";
import UserInfo from "../Slices/UserInfo";
const Store = configureStore({
  reducer: {
    user: UserInfo,
  },
});

export default Store;
