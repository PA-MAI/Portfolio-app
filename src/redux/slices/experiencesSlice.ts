import { createSlice } from "@reduxjs/toolkit";
import DataPerso from "@/data/dataPerso";

const experiencesSlice = createSlice({
   name: "experiences",
   initialState: DataPerso.experiencesData,
   reducers: {},
});

export default experiencesSlice.reducer;
