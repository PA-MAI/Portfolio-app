import { createSlice } from "@reduxjs/toolkit";
import DataPerso from "@/data/dataPerso";

const projectsSlice = createSlice({
   name: "projects",
   initialState: DataPerso.projectsData,
   reducers: {},
});

export default projectsSlice.reducer;
