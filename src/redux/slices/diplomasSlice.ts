import { createSlice } from "@reduxjs/toolkit";
import DataPerso from "@/data/dataPerso";

const diplomasSlice = createSlice({
   name: "diplomes",
   initialState: DataPerso.diplomesData,
   reducers: {},
});

export default diplomasSlice.reducer;
