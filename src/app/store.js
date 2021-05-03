import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../features/movie/movieSlice";

export const store = configureStore({
  reducer: {
    movie: MovieReducer,
  },
});
