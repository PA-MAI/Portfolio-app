import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profileSlice";
import projectsReducer from "./slices/projectsSlice";
import experiencesReducer from "./slices/experiencesSlice";
import diplomasReducer from "./slices/diplomasSlice";

export const store = configureStore({
   reducer: {
      profile: profileReducer,
      projects: projectsReducer,
      experiences: experiencesReducer,
      diplomas: diplomasReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
